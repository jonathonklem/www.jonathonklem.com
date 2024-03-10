import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from "gatsby"
import Header from '../components/header.tsx'
import Footer from '../components/footer.tsx'
import PostLink from '../components/postlink.tsx'

const IndexPage: React.FC<PageProps> = ({
  data: {
    allMdx: { edges },
  },
}) => {
  const Posts = edges.map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <>
        <Header />
        <h1 className="text-3xl text-center m-4">Recent Posts</h1>
        <section>
            {Posts}
        </section>
        <Footer />
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`

export const Head: HeadFC = () => <title>Jonathon Klem</title>
