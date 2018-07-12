import React from "react";
import Helmet from "react-helmet";
import Link from 'gatsby-link';

// import '../css/page.css'; // make it pretty!

export default function Template({
    data
}) {
    const { markdownRemark: post } = data;
    return (
        <div className="page-container">
            <Helmet
                title={`Page - ${post.frontmatter.title}`}
            >
                <meta name="robots" content="noindex" />
            </Helmet>
            <div className="page">
                <h1>{post.frontmatter.title}</h1>
                <div
                    className="page-content"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
                <Link to="/">Go back to the homepage</Link>
            </div>
        </div>
    );
}

export const pageQuery = graphql`
    query PageByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`;