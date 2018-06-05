import React from 'react';
import style from './index.module.css';
import fb from './facebook.svg';

const Footer = () => (
    <footer className={style.footer}>
        <div className="wrapper wrapper--padded">
            <div className={style.flex}>
                <div className={style.info}>
                    <h5>Où nous trouver</h5>
                    <p>
                        <strong>Mail :</strong> <a href="mailto:hello@kids.lopenlab.com">hello@kids.lopenlab.com</a><br />
                        <strong>Tel :</strong> +33 6 86 02 22 50
                    </p>
                    <p>Paris<br />France</p>
                </div>
                <div className={[style.info, style.mLeft].join(' ')}>
                    <h5>Social</h5>
                    <a href="https://www.facebook.com/LOpenLabforKids/">
                        <img src={fb} className={style.icon} />
                    </a>
                </div>
            </div>
            <p className={style.copyright}>&copy; 2018 - L'Open Lab</p>
        </div>
    </footer>
);

export default Footer;
