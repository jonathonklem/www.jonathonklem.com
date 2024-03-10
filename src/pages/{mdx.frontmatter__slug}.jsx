import * as React from "react"
import { graphql } from "gatsby"
import Header from '../components/header.tsx'
import Footer from '../components/footer.tsx'

const BlogPostTemplate = ({ data: { mdx }, children }) => {
    return (
        <>
            <Header />
            <section className="p-10">
                <h1 className="text-3xl">{mdx.frontmatter.title}</h1>
                <h2 className="text-2xl my-4">{mdx.frontmatter.date}</h2>
                {children}
            </section>
            <a className="m-4 font-bold text-blue-600 text-center block" href="/">Go Back</a>
            <Footer />
        </>
    );
}

export default BlogPostTemplate


export const pageQuery = graphql`
    query($id: String) {
        mdx(id: { eq: $id }) {
            body
            frontmatter {
                date(formatString: "MMM DD, YYYY")
                slug
                title
            }
        }
    }
`

export const Head = ({ data: { mdx }, children }) => <title>{mdx.frontmatter.title} : Jonathon Klem</title>
