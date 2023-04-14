import Layout from "@/components/Layout"
import ArticleContent from "@/components/ArticleContent"
import { getArticlesSlugs, getArticleContent } from "@/utils/articles"


export default function Article({ articleContent }) {
    return <Layout>
        {console.log(articleContent)}
        <h1>{articleContent.title}</h1>
        <p>{articleContent.publishedAt}</p>
        {console.log(articleContent)}
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