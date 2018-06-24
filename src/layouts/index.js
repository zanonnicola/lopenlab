import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withPrefix } from "gatsby-link";
import { getSectionColor, getPathData } from '../helpers';
import Hero from '../components/hero';
import Naviagtion from '../components/navigation';
import siteData from '../data/site';
import './flexboxgrid.css';
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

  let isHomePage = false;
  if (location.pathname === '/' || location.pathname === '/en' || location.pathname === '/en/') {
    isHomePage = true;
  }

  const sectionColors = {
    workshop: '#60BDC1',
    pedagogy: '#FCC817',
    team: '#0E4658',
    holidays: '#FC6681',
    contact: '#BDE6F6',
    atelier: '#60BDC1',
    pedagogie: '#FCC817',
    equipe: '#0E4658',
    vacances: '#FC6681',
  };

  return (
    <div>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: `${description}` }
        ]}
      >
        <meta name="google-site-verification" content="uVknAbcTUdiYPuPcXjt00iSmnv-YDRH2H-Rqdz6xy4g" />
        <meta name="robots" content="noindex" />
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
        title={getPathData(siteData, lng, location.pathname, isHomePage)['title']}
        subtitle={getPathData(siteData, lng, location.pathname, isHomePage)['heroSubtitle']}
        image={withPrefix('/assets/openlab.jpg')}
        color={getSectionColor(sectionColors, location.pathname)}
        isHomePage={isHomePage}
      />
      <Naviagtion lng={lng} colors={sectionColors} />
      {children()}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.any,
  location: PropTypes.any
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
