import React from 'react';
import PropTypes from 'prop-types';
import style from './index.module.css';
import { lightenDarkenColor } from '../../helpers';
import clip from './clip-path.svg';

const Hero = ({ title, subtitle, image, isHomePage, color }) => {
    const bg = isHomePage ? {} : { backgroundColor: lightenDarkenColor(color, 44) };
    return (
        <header className={style.hero} style={bg}>
            {isHomePage ? (
                <img src={image} className={style.bg} alt="L'Open Lab" />
            ) : (
                    <img src={clip} className={style.clip} alt="L'Open Lab" />
                )}
            <div className="wrapper wrapper--padded">
                <h1 className={style.hero__h1}>{title}</h1>
                <h2 className={style.hero__h2}>{subtitle}</h2>
            </div>
        </header>
    );
}

Hero.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    isHomePage: PropTypes.bool.isRequired,
    color: PropTypes.string,
    image: PropTypes.string
}

export default Hero;
