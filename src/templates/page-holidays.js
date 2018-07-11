import React from "react";
import Helmet from "react-helmet";
import Heading from '../components/heading';
import Footer from '../components/footer';
import './css/holidays.css'; // make it pretty!

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
            <section className="holidays-form">
                <div className="wrapper wrapper--padded">
                    <form role="form" name="contact" method="POST" action="#" netlify-honeypot="bot-field" data-netlify="true">
                        <div className="from-flex">
                            <div className="hidden">
                                <input type="hidden" name="form-name" value="contact" />
                                <input type="hidden" name="bot-field" />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="inpName">Your name</label>
                                <input type="test" name="name" id="inpName" required />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="inpEmail">Email</label>
                                <input type="email" name="email" id="inpEmail" required />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="inpName2">Name(s) of your child(ren):</label>
                                <input type="test" name="childName" id="inpName2" />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="inpName3">Age(s) of your child(ren):</label>
                                <input type="test" name="childAge" id="inpName3" />
                            </div>
                        </div>
                        <div className="input-block">
                            <label htmlFor="inpArea">Your message *:</label>
                            <textarea name="message" id="inpArea" cols="30" rows="10" required></textarea>
                        </div>
                        <input type="submit" value={post.frontmatter.lng === 'fr' ? 'Envoyer' : 'Submit'} />
                    </form>
                    <p className="form-tec">* This is just a way for us to understand what you’re looking for, the dates and times that would be convenient for you and the name and age of your kid(s) to come. For example, 1st week of the school holiday period in the morning only. Thank you!</p>
                </div>
            </section>
            <Footer lng={post.frontmatter.lng} />
        </main>
    );
}

export const pageQuery = graphql`
    query PageHolidays($path: String!) {
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