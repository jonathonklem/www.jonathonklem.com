import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from "gatsby"
import Header from '../components/header.tsx'
import Footer from '../components/footer.tsx'
import PostLink from '../components/postlink.tsx'

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
        <Header />
        <h1 className="text-3xl text-center m-4">404: Not Found</h1>
        <Footer />
    </>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
