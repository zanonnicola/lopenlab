import React from "react";
import Helmet from "react-helmet";
import Heading from '../components/heading';
import Footer from '../components/footer';
import './css/contact.css'; // make it pretty!

export default function Template({
    data
}) {
    const { markdownRemark: post } = data;
    return (
        <main role="main">
            <div className="wrapper wrapper--padded">
                <Helmet title={`Page - ${post.frontmatter.title}`} />
                <Heading
                    rank={3}
                    text={post.frontmatter.title}
                    extraStyle={{ textAlign: 'left' }}
                />
                <div className="padding-bottom">
                    <div className="flex">
                        <div className="flex-50" dangerouslySetInnerHTML={{ __html: post.html }}></div>
                        <div className="flex-50">
                            <aside className="yellow-box">
                                <Heading
                                    rank={5}
                                    text={post.frontmatter.contactBoxTitle}
                                />
                                <ul className="ul_general">
                                    <li><strong>Phone</strong><a href="tel:+33686022250">+33 6 86 02 22 50</a></li>
                                    <li><strong>Email</strong><a href="mailto:hello@lopenlab.com">hello@lopenlab.com</a></li>
                                    <li><strong>Facebook</strong><a href="https://www.facebook.com/LOpenLabforKids/">L’Open Lab For Kids</a></li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <Footer lng={post.frontmatter.lng} />
        </main>
    );
}

export const pageQuery = graphql`
    query PageContact($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                metaDescription
                subTitle
                lng
                contactBoxTitle
            }
        }
    }
`;