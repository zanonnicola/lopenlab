import React from 'react';
import PropTypes from 'prop-types';
import style from './index.module.css';
import logo from './LopenLabLOGO.png';

const Navigation = ({ lng }) => (
    <nav className={style.navigation}>
        <div className="wrapper wrapper--padded u-relative">
            <div className={style.navigation__logo}>
                <img src={logo} alt="L'Open Lab" />
            </div>
        </div>
        <a className={style.navigation__lng} href={`/${lng}`}>{lng}</a>
    </nav>
);

Navigation.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default Navigation;
