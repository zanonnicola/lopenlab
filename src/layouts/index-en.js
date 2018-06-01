import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
    <div>
        <Helmet
            title={data.site.siteMetadata.title_en}
            meta={[
                { name: 'description', content: `${data.site.siteMetadata.description_en}` }
            ]}
        />
        <Header siteTitle={data.site.siteMetadata.title_en} />
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

Layout.propTypes = {
    children: PropTypes.func,
    data: PropTypes.any
}

export default Layout

export const query = graphql`
  query SiteTitleQueryEn {
    site {
      siteMetadata {
        title_en
        description_en
      }
    }
  }
`
