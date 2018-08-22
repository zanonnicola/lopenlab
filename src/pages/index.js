import React from 'react';
import { withPrefix } from "gatsby-link";
import Heading from '../components/heading';
import Banner from '../components/banner';
import Footer from '../components/footer';
import Cta from '../components/cta';

const IndexPage = () => (
  <main role="main">
    <div className="wrapper__content wrapper--padded">
      <Heading
        rank={3}
        text="Bienvenue à bord de L’Open Lab for Kids"
      />
      <article className="temp-page-content">
        <p>Notre objectif est de donner du sens à l’apprentissage à travers des activités créatives et ludiques, de favoriser la pratique naturelle d’une langue étrangère et plus globalement de proposer un contenu éducatif riche qui contribue au développement des enfants.</p>
        <p>Nos ateliers sont adaptés aux bébés, petits et enfants âgés entre 1 et 11 ans. Ils sont organisés en petits groupes et selon l’âge des enfants. Entièrement en anglais, les ateliers s’adressent aussi bien aux enfants bilingues qu’aux enfants et parents n’ayant aucune ou peu de connaissance de l’anglais.</p>
        <p>Les ateliers ont lieu en matinée pour les plus jeunes, après l’école, le mercredi, le samedi et pendant les vacances scolaires dans deux lieux chaleureux à Nantes :</p>
        <ul>
          <li>Happy Place by <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/vacouva">Vacouva</a>, un lieu dédié à la créativité et aux loisirs situé quartier Gare Sud au <a target="_blank" rel="noopener noreferrer" href="https://www.google.fr/maps?q=43+quai+de+malakoff+nantes&rlz=1C1JZAP_enFR710FR711&um=1&ie=UTF-8&sa=X&ved=0ahUKEwjhsaSG1_TbAhUIthQKHazfDtgQ_AUICigB">43 quai de Malakoff</a></li>
          <li>Un véritable Atelier au cœur d’un jardin situé dans le quartier Rond-point de Paris : un cadre protégé et magique pour les enfants</li>
        </ul>
        <p>Le planning de la rentrée prochaine est disponible en téléchargement ci-dessous. N’hésitez pas à nous faire part de vos remarques sur les horaires et formats des ateliers ; nous souhaitons vraiment proposer un planning qui colle au plus près des réalités des familles !</p>
        <p>
          <Cta text="Télécharger le programme" url="#0" margin="35px 0 0 0" />
        </p>
      </article>
    </div>

    <Banner lng="fr" />

    <div className="wrapper__content wrapper--padded">
      <Heading
        rank={3}
        text="L'Open Lab for Kids"
      />
      <article className="temp-page-content">
        <p className="temp-page__contact"><strong>Mail :</strong> <a href="mailto:hello@lopenlab.com">hello@lopenlab.com</a></p>
        <p className="temp-page__contact"><strong>Tel :</strong> <a href="tel:+33686022250">+33 6 86 02 22 50</a></p>
        <p className="temp-page__contact"><strong>Nous suivre sur Facebook :</strong> <a href="https://www.facebook.com/LOpenLabforKids/">L'Open Lab for Kids</a></p>
      </article>
    </div>
    {/* <Banner lng="fr" /> */}
    <Footer lng="fr" />
  </main>
)

export default IndexPage;
