import React from 'react';
import Heading from '../components/heading';
import Banner from '../components/banner';
import CallOut from '../components/callOut';
import Footer from '../components/footer';
import Card from '../components/card';

const IndexPage = () => (
  <main role="main">
    <div className="wrapper__content wrapper--padded">
      <Heading
        rank={3}
        text="Bienvenue à bord de L’Open Lab for Kids"
      />
      <article className="hero-content">
        <div className="flex">
          <div className="flex-50">
            <p><b className="bold-it">Et si</b> nos enfants découvraient l’anglais de manière naturelle et sans contrainte ?</p>
            <p style={{ marginBottom: 0 }}><b className="bold-it">S’ils pouvaient</b> prendre goût à la pratique d’une langue étrangère, en toute confiance et sans complexe, tout en développant leur créativité et en s’amusant ?</p>
          </div>
          <div className="flex-50">
            <p>C’est l’idée derrière <strong>L’Open Lab for Kids</strong> : des ateliers créatifs et ludiques où les enfants découvrent, créent et expérimentent en anglais dans une ambiance chaleureuse et familiale.</p>
          </div>
        </div>
      </article>
    </div>
    <CallOut lng="fr" />
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
        text="Nous contacter"
      />
      <article className="temp-page-content">
        <p className="temp-page__contact"><strong>Mail :</strong> <a href="mailto:hello@lopenlab.com">hello@lopenlab.com</a></p>
        <p className="temp-page__contact"><strong>Tel :</strong> <a href="tel:+33686022250">+33 6 86 02 22 50</a></p>
        <p className="temp-page__contact"><strong>Nous suivre sur Facebook :</strong> <a href="https://www.facebook.com/LOpenLabforKids/">L'Open Lab for Kids</a></p>
      </article>
    </div>
    <Banner lng="fr" />
    <Footer lng="fr" />
  </main>
)

export default IndexPage;
