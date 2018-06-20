import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import style from './index.module.css';

const CallOut = ({ lng }) => (
    <section className={style.CallOut}>
        <div className={style.wrapper}>
            {lng === 'fr' ?
                (
                    <React.Fragment>
                        <p className={style.text}>A partir du 1er septembre 2018 à Nantes : des ateliers en anglais, <b style={{ color: "#60BDC1" }}>créatifs</b> et <b style={{ color: "#FDC60D" }}>ludiques</b>, parfaitement adaptés aux enfants de 1 à 11 ans.</p>
                        <Link className={style.cta} to="/atelier">
                            Découvrez
                            <svg xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.714 2L10.036 19.679 2 11.643" stroke="#FC6681" strokeWidth="4" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <p className={style.text}>From the start of the new school year in September 2018: <b style={{ color: "#60BDC1" }}>fun</b> and <b style={{ color: "#FDC60D" }}>creative</b> workshops for babies & children aged from 0 to 11.</p>
                        <Link className={style.cta} to="/en/workshop">
                            Discover Now
                            <svg xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.714 2L10.036 19.679 2 11.643" stroke="#FC6681" strokeWidth="4" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </React.Fragment>
                )}
        </div>
    </section>
);

CallOut.propTypes = {
    lng: PropTypes.string.isRequired
}

export default CallOut;
