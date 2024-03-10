import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => {
    return (
        <div className="w-10/12 lg:w-3/6 mb-8 mx-auto block">
            <Link to={post.frontmatter.slug}>
                <em className="block">{post.frontmatter.date}</em>
                <strong>{post.frontmatter.title}</strong>
            </Link>
            <p>{post.excerpt}</p>
        </div>
    )
}

export default PostLink
