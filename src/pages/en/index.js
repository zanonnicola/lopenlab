import React from 'react';
import Heading from '../../components/heading';
import Banner from '../../components/banner';
import CallOut from '../../components/callOut';
import Card from '../../components/Card';
import Footer from '../../components/footer';

const IndexPage = () => (
    <main role="main">
        <div className="wrapper__content wrapper--padded">
            <Heading
                rank={3}
                text="Welcome to L’Open Lab for Kids"
            />
            <article className="hero-content">
                <div className="flex">
                    <div className="flex-50">
                        <p><b className="bold-it">What if</b> our children could acquire English in the same way they learn their first language?</p>
                        <p style={{ marginBottom: 0 }}><b className="bold-it">What if</b> they could explore the language, absorb it on their own terms in a safe and engaging environment, while taking part in creative and interactive activities?</p>
                    </div>
                    <div className="flex-50">
                        <p>That is the idea behind <strong>L’Open Lab for Kids</strong>: fun and creative workshops where kids get to discover, create and experiment, all in English, in a nurturing environment.</p>
                    </div>
                </div>
            </article>
        </div>
        <CallOut lng="en" />
        <section className="section">
            <div className="wrapper wrapper--padded">
                <Heading
                    rank={3}
                    text="Take a look around!"
                />
                <Card
                    title="Workshop"
                    color="#60BDC1"
                    pagePath="en/workshop"
                    text="For children to get familiar with English through taking part in enriching activities from their youngest age"
                />
            </div>
        </section>
        <div className="wrapper__content wrapper--padded">
            <Heading
                rank={3}
                text="Our contact details"
            />
            <article className="temp-page-content">
                <p className="temp-page__contact"><strong>Mail:</strong> <a href="mailto:hello@lopenlab.com">hello@lopenlab.com</a></p>
                <p className="temp-page__contact"><strong>Tel:</strong> <a href="tel:+33686022250">+33 6 86 02 22 50</a></p>
                <p className="temp-page__contact"><strong>Follow us on Facebook:</strong> <a href="https://www.facebook.com/LOpenLabforKids/">L'Open Lab for Kids</a></p>
            </article>
        </div>
        <Banner lng="en" />
        <Footer lng="en" />
    </main>
)

export default IndexPage;
