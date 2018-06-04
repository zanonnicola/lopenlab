import React from 'react';
import PropTypes from 'prop-types';
import style from './index.module.css';

const Container = ({ children }) => {
    return (
        <article className={style.article}>
            {children}
        </article>
    );
};
Container.propTypes = {
    children: PropTypes.func.isRequired,
};

export default Container;
