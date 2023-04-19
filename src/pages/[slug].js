import Layout from "@/components/Layout"
import ArticleContent from "@/components/ArticleContent"
import { getArticlesSlugs, getArticleContent } from "@/utils/articles" 
import { format } from "date-fns" 


export default function Article({ articleContent }) {

    const dateFormatOptions = { 
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}

    return <Layout>
        <div className="text-center mb-10">
            <h1
                className="text-4xl font-bold mb-4"
            >{articleContent.title}</h1>
            <time
                className="text-gray-500"
            >{new Date(articleContent.publishedAt)
                .toLocaleDateString('es', dateFormatOptions)}</time>
        </div>
        <ArticleContent content={articleContent.articleContentHtml}/>
    </Layout>
}

export async function getStaticPaths() {
    const paths = getArticlesSlugs()
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    console.log(params)
    const articleContent = await getArticleContent(params.slug)
    return {
        props: {
            articleContent,
        },
    }
}