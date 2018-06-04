import React from 'react';
import PropTypes from 'prop-types';
import style from './index.module.css';

const Heading = ({
    rank = 2,
    children
}) => {
    const Tag = rank > 6 ? 'h6' : `h${rank}`;
    return (
        <Tag className={style[`h${rank}`]}>
            {children}
        </Tag>
    );
};
Heading.propTypes = {
    rank: PropTypes.oneOf([
        1,
        2,
        3,
        4,
        5,
        6
    ]).isRequired,
    children: PropTypes.func.isRequired,
};

export default Heading;
