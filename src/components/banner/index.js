import React from 'react';
import style from './index.module.css';
import Cta from '../cta';

const Banner = () => (
    <section className={style.banner}>
        <div className={style.wrapper}>
            <p>Retrouvez-nous également le samedi 23 juin chez Happy Place by Vacouva (Gare Sud, 43 quai de Malakoff), de 15h à 18h pour une après-midi découverte, en famille. Les places sont limitées, pensez bien à vous inscrire par mail. </p>
            <p><strong>Nous espérons vous y voir nombreux !</strong></p>
            <Cta text="S'inscrire" url="https://www.facebook.com/LOpenLabforKids/" margin="35px 0 0 0" />
        </div>
    </section>
);

export default Banner;
