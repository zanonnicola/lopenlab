import React from 'react';
import PropTypes from 'prop-types';
import style from './index.module.css';
import clip from './clip-path.svg';

const Hero = ({ title, subtitle }) => (
    <header className={style.hero}>
        <img src={clip} className={style.clip} />
        <div className="wrapper wrapper--padded">
            <h1 className={style.hero__h1}>{title}</h1>
            <h2 className={style.hero__h2}>{subtitle}</h2>
        </div>
    </header>
);

Hero.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default Hero;
