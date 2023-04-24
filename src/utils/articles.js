import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

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

    // Return sorted array
    return articlesData.sort( (a, b) => 
        b.publishedAt.localeCompare(a.publishedAt)
        // new Date(b.publishedAt) - new Date(a.publishedAt)
    )
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

export async function getArticleContent(slug) {
    const filePath = path.join(articlesPath, `${slug}.mdx`)
    const fileContents = fs.readFileSync(filePath, 'utf8')

    const metaData = matter(fileContents)
    
    const rawArticleContent = await remark()
        .use(html)
        .process(metaData.content)

    const articleContentHtml = rawArticleContent.toString()

    return {
        slug, 
        articleContentHtml,
        ...metaData.data,
    }

    // TODO: error handling for missing or invalid file
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


