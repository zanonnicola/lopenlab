import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withPrefix } from "gatsby-link";

import Hero from '../components/hero';
import Naviagtion from '../components/navigation';
import './index.css';

const Layout = ({ children, data, location }) => {
  let lng = 'fr';
  let title = data.site.siteMetadata.title_fr;
  let description = data.site.siteMetadata.description_fr;
  if (location.pathname === '/en') {
    title = data.site.siteMetadata.title_en;
    description = data.site.siteMetadata.description_en;
    lng = 'en';
  }

  const contentMap = {
    fr: {
      title: "Apprendre, créer, s’amuser… et en anglais !",
      subtitle: "A partir du 1er septembre 2018 à Nantes : des ateliers en anglais, créatifs et ludiques, parfaitement adaptés aux enfants de 1 à 11 ans."
    },
    en: {
      title: "Learning, creating, having fun!",
      subtitle: "From the start of the new school year in September 2018: fun and creative workshops for babies & children aged from 1 to 11."
    }
  }

  return (
    <div>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: `${description}` }
        ]}
      >
        <link rel="preload" href={withPrefix('/assets/merriweather-v19-latin-700.woff2')} as="font" type="font/woff2" crossOrigin />
        <link rel="preload" href={withPrefix('/assets/muli-v11-latin-regular.woff2')} as="font" type="font/woff2" crossOrigin />
      </Helmet>
      <Hero
        title={contentMap[lng].title}
        subtitle={contentMap[lng].subtitle}
      />
      <Naviagtion lng={lng === 'fr' ? 'en' : 'fr'} />
      {children()}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.any
}

export default Layout

export const query = graphql`
  query SiteTitleQueryFr {
    site {
      siteMetadata {
        title_fr
        description_fr
        title_en
        description_en
      }
    }
  }
`
