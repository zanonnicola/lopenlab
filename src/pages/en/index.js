import React from 'react';
import Heading from '../../components/heading';
import Banner from '../../components/banner';
import Footer from '../../components/footer';

const IndexPage = () => (
    <main role="main">
        <div className="wrapper__content wrapper--padded">
            <Heading
                rank={3}
                text="Welcome to L’Open Lab for Kids"
            />
            <article className="temp-page-content">
                <p>We think learning by doing makes more sense. We want kids to develop their creativity and have fun, while learning English… naturally. We want to provide kids with content of high quality that can help them grow and develop.</p>
                <p>Our workshops are carried out entirely in English. They are open to kids who already speak English as much to kids and parents who don’t.</p>
                <p>Our workshops are adapted to babies, toddlers and children aged between 1 and 11. They take place in the morning, after school, on Wednesday, on Saturday and during school holiday.</p>
                <p>For more information on the new school year timetable and find out more about L’Open Lab for Kids, don’t hesitate to contact us directly. All the information will soon be available online.</p>
            </article>
            <Heading
                rank={3}
                text="Our contact details"
            />
            <article className="temp-page-content">
                <p className="temp-page__contact"><strong>Mail:</strong> <a href="mailto:kids@lopenlab.com">kids@lopenlab.com</a></p>
                <p className="temp-page__contact"><strong>Tel:</strong> +33 6 86 02 22 50</p>
                <p className="temp-page__contact"><strong>Facebook:</strong> <a href="https://www.facebook.com/LOpenLabforKids/">L'Open Lab for Kids</a></p>
            </article>
        </div>
        <Banner lng="en" />
        <Footer lng="en" />
    </main>
)

export default IndexPage;
