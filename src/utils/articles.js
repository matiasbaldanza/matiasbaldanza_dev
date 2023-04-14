import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesPath = path.join(process.cwd(), 'content')
const articleValidExtensions = /\.md$|\.mdx$/
const ignoreFileNames = /^_[^/]*$/

export function getArticlesDataSorted() {
    const fileNames = getFileNames()

    // Extract filenames without extension
    const articlesData = fileNames.map( (fileName) => {
        const slug = getSlug(fileName)

        // Extract metadata from each file (title, date, topic, tags, etc.)
        const filePath = path.join(articlesPath, fileName)
        const fileContents = fs.readFileSync(filePath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        return {
            slug,
            ...matterResult.data,
        }
        })

    // Sort by date (newest first)
    articlesData.sort( (a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }})
    // Return sorted array
    return articlesData
}

export function getArticlesSlugs() {
    const fileNames = getFileNames()

    return fileNames.map( (fileName) => {
        return {
            params: {
                slug: getSlug(fileName),
            }
        }
    })
}

function getFileNames() {
    const fileNames = fs.readdirSync(articlesPath)
        .filter( (fileName) => { return fileName.match(articleValidExtensions, '') })
        .filter( (fileName) => { return !fileName.match(ignoreFileNames, '') })

    if (!fileNames) return []

    return fileNames
}

function getSlug(fileName) {
    return fileName.replace(articleValidExtensions, '')
}

