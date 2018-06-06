import React from 'react';
import PropTypes from 'prop-types';
import style from './index.module.css';
import fb from './facebook.svg';

const Footer = ({ lng }) => (
    <footer className={style.footer}>
        <div className="wrapper wrapper--padded">
            <div className={style.flex}>
                <div className={style.info}>
                    <h5>{lng === 'fr' ? 'Où nous trouver' : 'Contact details'}</h5>
                    <p>
                        <strong>E-mail :</strong> <a href="mailto:hello@lopenlab.com">hello@lopenlab.com</a><br />
                        <strong>Tel :</strong> +33 6 86 02 22 50
                    </p>
                    <p>Nantes<br />France</p>
                </div>
                <div className={[style.info, style.mLeft].join(' ')}>
                    <h5>{lng === 'fr' ? 'Réseaux sociaux' : 'Social'}</h5>
                    <a href="https://www.facebook.com/LOpenLabforKids/">
                        <img src={fb} className={style.icon} />
                    </a>
                </div>
            </div>
            <p className={style.copyright}>&copy; 2018 - L'Open Lab</p>
        </div>
    </footer>
);

Footer.propTypes = {
    lng: PropTypes.string.isRequired
}

export default Footer;
