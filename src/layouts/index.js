import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withPrefix } from "gatsby-link";

import Header from '../components/header';
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
      <Header siteTitle={title} lng={lng} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
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
