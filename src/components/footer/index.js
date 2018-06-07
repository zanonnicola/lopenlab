import React from 'react';
import PropTypes from 'prop-types';
import style from './index.module.css';
import fb from './facebook.svg';

const Footer = ({ lng }) => (
    <footer className={style.footer}>
        <div className="wrapper wrapper--padded">
            <div className={style.flex}>
                <div className={style.info}>
                    <h5>{lng === 'fr' ? 'Contact' : 'Contact details'}</h5>
                    <p>
                        <strong>E-mail :</strong> <a href="mailto:hello@lopenlab.com">hello@lopenlab.com</a><br />
                        <strong>Tel :</strong> <a href="tel:+33686022250">+33 6 86 02 22 50</a>
                    </p>
                    <p><a style={{ display: 'inline-block' }} href="https://www.google.com/maps/place/Vacouva/@47.2146419,-1.5433538,17z/data=!3m1!4b1!4m5!3m4!1s0x4805eeb8399276c5:0xe54ac076a5ce2080!8m2!3d47.2146419!4d-1.5411651">43 quai de Malakoff<br />Nantes - France</a></p>
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
