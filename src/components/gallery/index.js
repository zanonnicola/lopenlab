import React from 'react'
import PropTypes from 'prop-types'
import Heading from '../heading'

const Gallery = ({ galleryData, lng }) => {
  return (
    <React.Fragment>
      {galleryData && (
        <section className="global-gallery" id="holiday-gallery">
          <div className="wrapper wrapper--padded">
            <Heading
              rank={1}
              text={lng === 'fr' ? 'Nos ateliers en photos' : 'Gallery'}
              extraStyle={{ marginBottom: '50px' }}
            />
            <div className="global-gallery-photos">
              {galleryData.map((galleryImage, i) => (
                <div
                  key={`${galleryImage.image.childImageSharp.id.substring(
                    0,
                    4
                  )}-${i}`}
                >
                  <img
                    src={galleryImage.image.childImageSharp.sizes.src}
                    alt="Gallery"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  )
}

Gallery.propTypes = {
  galleryData: PropTypes.object.isRequired,
  lng: PropTypes.string.isRequired,
}

export default Gallery
