import React from 'react';
import PropTypes from 'prop-types';
import style from './index.module.css';

const Overlay = ({ lng, show }) => {
    const showHideClassName = show ? `${style.overlay} ${style.show}` : style.overlay;
    return (
        <aside className={showHideClassName}>
            <div className="wrapper wrapper--padded">
                {lng}
            </div>
        </aside>
    )
};

Overlay.propTypes = {
    lng: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired
}

export default Overlay;
