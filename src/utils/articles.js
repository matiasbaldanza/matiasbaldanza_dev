import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesPath = path.join(process.cwd(), 'content')
const articleValidExtensions = /\.md$|\.mdx$/

// TODO: handle error - directory empty
// TODO: handle error - subdirectories cannot be read as files

export function getArticlesDataSorted() {
    // Get file names under /content
    const fileNames = fs.readdirSync(articlesPath).filter( (fileName) => {
        return fileName.match(articleValidExtensions, '')
    })

    console.log(fileNames)

    // Extract filenames without extension
    if (fileNames.length === 0) return {}

    const articlesData = fileNames.map( (fileName) => {
        // Extract slug from filename
        const slug = fileName.replace(articleValidExtensions, '')

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

export function getArticleSlugs() {

}