import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import logo from './LopenLabLOGO.png';

const Navigation = ({ lng }) => (
    <nav className="c-navigation">
        <div className="wrapper wrapper--padded u-relative">
            <div className="c-navigation__logo">
                <img src={logo} alt="L'Open Lab" />
            </div>
        </div>
        <a className="c-navigation__lng" href={`/${lng}`}>{lng}</a>
    </nav>
);

Navigation.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default Navigation;
