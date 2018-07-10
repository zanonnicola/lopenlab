import React from 'react';
import PropTypes from 'prop-types';
import style from './index.module.css';

const MemberCard = ({ data }) => (
    <div className={style.card}>
        <div className={style.card__content}>
            <h4>{data.name}</h4>
            <h5>{data.title}</h5>
            <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
        </div>
        <div className={style.card__diploma} dangerouslySetInnerHTML={{ __html: data.diploma }}>
        </div>
    </div>
);

MemberCard.propTypes = {
    data: PropTypes.any.isRequired
}

export default MemberCard;
