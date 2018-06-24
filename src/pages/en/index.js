import React from 'react';
import { withPrefix } from "gatsby-link";
import Heading from '../../components/heading';
// import Banner from '../../components/banner';
import Footer from '../../components/footer';
import Cta from '../../components/cta';

const IndexPage = () => (
    <main role="main">
        <div className="wrapper__content wrapper--padded">
            <Heading
                rank={3}
                text="Welcome to L’Open Lab for Kids"
            />
            <article className="temp-page-content">
                <p>We think learning by doing makes more sense. We want kids to develop their creativity and have fun, while learning English… naturally. We want to provide kids with content of high quality that can help them grow and develop.</p>
                <p>Our workshops are adapted to babies, toddlers and children aged between 1 and 11. They take place in the morning, after school, on Wednesday, on Saturday and during school holiday.</p>
                <p>Our workshops are carried out entirely in English. They are open to English speaking kids as well as to those who don’t yet speak English.</p>
                <p>The new school year timetable is now available. You can download it by clicking the below link. More information will soon be available online. In the meantime, please don’t hesitate to contact us for more information, we’d love to hear from you!</p>
                <p>
                    <Cta text="Our timetable" url={withPrefix('/assets/lOpen_Lab_for_Kids_Programme.pdf')} margin="35px 0 0 0" />
                </p>
            </article>
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
        {/* <Banner lng="en" /> */}
        <Footer lng="en" />
    </main>
)

export default IndexPage;
