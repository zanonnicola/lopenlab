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
  if (location.pathname.includes('en')) {
    title = data.site.siteMetadata.title_en;
    description = data.site.siteMetadata.description_en;
    lng = 'en';
  }

  const sectionColors = {
    workshop: '#60BDC1',
    pedagogy: '#FCC817',
    team: '#0E4658',
    holidays: '#FC6681',
    contact: '#BDE6F6'
  };

  const contentMap = {
    fr: {
      title: "Apprendre, créer, s’amuser… et en anglais !",
      subtitle: "A partir du 1er septembre 2018 à Nantes : des ateliers en anglais, créatifs et ludiques, parfaitement adaptés aux enfants de 1 à 11 ans."
    },
    en: {
      title: "Learning, creating, having fun!",
      subtitle: "From the start of the new school year in September 2018: fun and creative workshops for toddlers & children aged from 1 to 11."
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
        <link rel="apple-touch-icon" sizes="180x180" href={withPrefix('/assets/apple-touch-icon.png')} />
        <link rel="icon" type="image/png" sizes="32x32" href={withPrefix('/assets/favicon-32x32.png')} />
        <link rel="icon" type="image/png" sizes="16x16" href={withPrefix('/assets/favicon-16x16.png')} />
        <link rel="icon" href={withPrefix('/assets/favicon.ico')} type="image/x-icon" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <Hero
        title={contentMap[lng].title}
        subtitle={contentMap[lng].subtitle}
      />
      <Naviagtion lng={lng} colors={sectionColors} />
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
