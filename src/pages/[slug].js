import Layout from "@/components/Layout"
import ArticleContent from "@/components/ArticleContent"
import DateLabel from "@/components/DateLabel"
import { getArticlesSlugs, getArticleContent } from "@/utils/articles" 
import Balancer from "react-wrap-balancer"

export default function Article({ articleContent }) {

    const dateFormatOptions = { 
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}

    return <Layout>
        <div className="mb-10 text-center">
            <h1
                className="mb-4 text-4xl font-bold"
            >
                <Balancer>{articleContent.title}</Balancer>
            </h1>
            <DateLabel
                className="text-gray-500"
                options={dateFormatOptions}
            >
                {articleContent.publishedAt}
            </DateLabel>
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
    const articleContent = await getArticleContent(params.slug)
    return {
        props: {
            articleContent,
        },
    }
}