import React from 'react';
import { withPrefix } from "gatsby-link";
import Heading from '../../components/heading';
import Banner from '../../components/banner';
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
                <p>We believe that learning by doing makes more sense. We want kids to develop their creativity and have fun, while learning English… naturally. We want to provide children with content of high quality that can help them grow and develop.</p>
                <p>Our workshops are tailored to babies, toddlers and children aged between 1 and 11. They are carried out in small groups and with children of similar ages. Entirely in English, they are open to English-speaking kids as well as to those who don’t speak English yet.</p>
                <p>Our workshops take place in the morning, after school, on Wednesdays, on Saturdays and during the school holidays in two friendly and welcoming places:</p>
                <ul>
                    <li>Happy Place by <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/vacouva">Vacouva</a>, a place dedicated to creativity and fun, located right behind the station on <a target="_blank" rel="noopener noreferrer" href="https://www.google.fr/maps?q=43+quai+de+malakoff+nantes&rlz=1C1JZAP_enFR710FR711&um=1&ie=UTF-8&sa=X&ved=0ahUKEwjhsaSG1_TbAhUIthQKHazfDtgQ_AUICigB">43 quai de Malakoff</a></li>
                    <li><strong>L’Open Lab for Kids’</strong> own very Lab, a place entirely designed for children, located in the middle of a garden. A perfect environment for kids to feel comfortable and express themselves with ease in English</li>
                </ul>
                <p>The new school year timetable is available to download. Don’t hesitate to get in touch with us if you’re interested in enrolling your child(dren) but can’t find a suitable slot. We really want to put together a timetable that can work with you and your family.</p>
                <p>
                    <Cta text="Our timetable" url={withPrefix('/assets/lOpen_Lab_for_Kids_Programme.pdf')} margin="35px 0 0 0" />
                </p>
            </article>
        </div>

        <Banner lng="en" />

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
        <Footer lng="en" />
    </main>
)

export default IndexPage;
