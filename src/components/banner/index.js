import React from 'react';
import PropTypes from 'prop-types';
import style from './index.module.css';
import Cta from '../cta';

const Banner = ({ lng }) => (
    <section className={style.banner}>
        <div className={style.wrapper}>
            {lng === 'fr' ?
                (
                    <React.Fragment>
                        <p>Retrouvez-nous également le samedi 23 juin chez Happy Place by Vacouva (Gare Sud, 43 quai de Malakoff), de 15h à 18h pour une après-midi découverte, en famille. Les places sont limitées, pensez bien à vous inscrire par mail. </p>
                        <p><strong>Nous espérons vous y voir nombreux !</strong></p>
                        <Cta text="S'inscrire" url="https://www.facebook.com/LOpenLabforKids/" margin="35px 0 0 0" />
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <p>We’ll be at Happy Place by Vacouva (Gare Sud, 43 quai de Malakoff) on Saturday, 23rd June for an afternoon of discoveries for the whole family. We can only accomodate a certain number of people, so please make sure you register for the event.</p>
                        <p><strong>We look forward to meeting you there!</strong></p>
                        <Cta text="Sign up" url="https://www.facebook.com/LOpenLabforKids/" margin="35px 0 0 0" />
                    </React.Fragment>
                )}
        </div>
    </section>
);

Banner.propTypes = {
    lng: PropTypes.string.isRequired
}

export default Banner;
