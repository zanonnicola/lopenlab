import React from "react";
import Helmet from "react-helmet";
import Heading from '../components/heading';
import Footer from '../components/footer';
import './css/team.css'; // make it pretty!

export default function Template({
    data
}) {
    const { markdownRemark: post } = data;
    return (
        <main role="main">
            <div className="wrapper wrapper--padded">
                <Helmet
                    title={`Page - ${post.frontmatter.title}`}
                    meta={[
                        { name: 'description', content: `${post.frontmatter.metaDescription}` }
                    ]}
                />
                <article className="small-content padding-bottom">
                    <Heading
                        rank={3}
                        text={post.frontmatter.title}
                        extraStyle={{ textAlign: 'left' }}
                    />
                    <div dangerouslySetInnerHTML={{ __html: post.html }}>
                    </div>
                </article>
            </div>
            <section className="team-cards">
                <div className="wrapper wrapper--padded">
                    asddasdasdds
                </div>
            </section>
            <Footer lng={post.frontmatter.lng} />
        </main>
    );
}

export const pageQuery = graphql`
    query PageTeam($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                metaDescription
                subTitle
                lng
            }
        }
    }
`;