import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Heading from '../heading';
import style from './index.module.css';
import clip from './workshop_path.svg';

const Card = ({ pagePath, text, title, color }) => (
    <Link className={style.card} to={`${pagePath}`}>
        <img src={clip} className={style.clip} />
        <div className={style.card__content}>
            <Heading
                rank={4}
                text={title}
                extraStyle={{
                    color: color,
                    fontFamily: 'Muli'
                }}
            />
            <p>{text}</p>
        </div>
    </Link>
);

Card.propTypes = {
    pagePath: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default Card;
