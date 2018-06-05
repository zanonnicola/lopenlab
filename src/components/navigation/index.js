import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import style from './index.module.css';
import logo from './LopenLabLOGO.png';

const Navigation = ({ lng }) => (
    <nav className={style.navigation}>
        <div className="wrapper wrapper--padded u-relative">
            <div className={style.navigation__logo}>
                <img src={logo} alt="L'Open Lab" />
            </div>
        </div>
        <Link className={style.navigation__lng} to={lng === 'fr' ? '/' : `/en`}>{lng}</Link>
    </nav>
);

Navigation.propTypes = {
    lng: PropTypes.string.isRequired
}

export default Navigation;
