import React from 'react';
import Heading from '../components/heading';
import Banner from '../components/banner';

const IndexPage = () => (
  <main role="main">
    <div className="wrapper__content wrapper--padded">
      <Heading rank={3}>
        Bienvenue à bord de l’Open Lab for Kids !
      </Heading>
      <article className="temp-page-content">
        <p>Notre objectif est de donner du sens à l’apprentissage à travers des activités créatives et ludiques, de favoriser la pratique naturelle d’une langue étrangère et plus globalement de proposer un contenu éducatif riche qui contribue au développement des enfants.</p>
        <p>Entièrement en anglais, nos ateliers s’adressent aussi bien aux enfants bilingues qu’aux enfants et parents n’ayant aucune ou peu de connaissance de l’anglais.</p>
        <p>Nos ateliers sont adaptés aux bébés, petits et enfants âgés entre 1 et 11 ans. Ils ont lieu en matinée, après l’école, le mercredi, le samedi et pendant les vacances scolaires.</p>
        <p>Pour plus d’infos sur le planning de la rentrée prochaine et en savoir plus sur L’Open Lab for Kids, n’hésitez pas à nous contacter directement. Toutes les infos seront prochainement disponibles en ligne.</p>
      </article>
      <Heading rank={3}>
        Nous contacter
      </Heading>
      <article className="temp-page-content">
        <p className="temp-page__contact"><strong>Mail:</strong> <a href="mailto:hello@kids.lopenlab.com">hello@kids.lopenlab.com</a></p>
        <p className="temp-page__contact"><strong>Tel:</strong> +33 6 86 02 22 50</p>
      </article>
    </div>
    <Banner />
  </main>
)

export default IndexPage;
