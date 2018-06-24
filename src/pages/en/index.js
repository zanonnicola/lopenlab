import React from 'react';
import Heading from '../../components/heading';
import Banner from '../../components/banner';
import CallOut from '../../components/callOut';
import Card from '../../components/card';
import Footer from '../../components/footer';
import site from '../../data/site';

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
                <div className="row center-xs">
                    {Object.keys(site.en).map((section, i) =>
                        <div key={`${section}-${i}`} className="col-xs-12 col-sm-6 col-md-4" style={{ marginBottom: '40px' }}>
                            <Card
                                title={site['en'][section].title}
                                color={site['en'][section].color}
                                pagePath={section}
                                text={site['en'][section].intro}
                            />
                        </div>
                    )}
                </div>
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
