import React from 'react';
import PropTypes from 'prop-types';
import style from './index.module.css';

const MemberCard = ({ data }) => (
    <div className={style.card}>
        {data.title}
    </div>
);

MemberCard.propTypes = {
    data: PropTypes.any.isRequired
}

export default MemberCard;
