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
                        <p>Les inscriptions pour la rentrée scolaire 2018-2019 ont commencé. Contactez-nous dès maintenant pour inscrire vos enfants à un atelier. Nous ne pouvons accueillir qu’un nombre limité d’enfants par <strong>atelier</strong>.</p>
                        <Cta text="Nous contacter" url="mailto:hello@lopenlab.com?subject=Atelier" margin="35px 0 0 0" />
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <p>Enrollment for the next school year has started. Please get in touch with us ASAP if you want to sign up your child(dren) for one of our <strong>workshops</strong>. We only have a limited number of spaces available.</p>
                        <Cta text="Sign up" url="mailto:hello@lopenlab.com?subject=Workshops" margin="35px 0 0 0" />
                    </React.Fragment>
                )}
        </div>
    </section>
);

Banner.propTypes = {
    lng: PropTypes.string.isRequired
}

export default Banner;
