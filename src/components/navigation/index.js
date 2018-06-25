import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import style from './index.module.css';
import logo from './LopenLabLOGO.png';

const lngMap = {
    fr: {
        workshop: {
            title: 'Atelier',
            url: '/atelier'
        },
        pedagogy: {
            title: 'Pédagogie',
            url: '/pedagogie'
        },
        team: {
            title: `L' Equipe`,
            url: '/equipe'
        },
        holidays: {
            title: 'Vacances',
            url: '/vacances'
        },
        contact: {
            title: 'Contact',
            url: '/contact'
        }
    },
    en: {
        workshop: {
            title: 'Workshop',
            url: '/en/workshop'
        },
        pedagogy: {
            title: 'Pedagogy',
            url: '/en/pedagogy'
        },
        team: {
            title: 'Team',
            url: '/en/team'
        },
        holidays: {
            title: 'Holidays',
            url: '/en/holidays'
        },
        contact: {
            title: 'Contact',
            url: '/en/contact-us'
        }
    }
}

const Navigation = ({ lng, colors }) => (
    <nav className={style.navigation}>
        <div className="wrapper wrapper--padded u-relative">
            <Link to={lng === 'fr' ? '/' : '/en'} className={style.navigation__logo}>
                <img src={logo} alt="L'Open Lab" />
            </Link>
        </div>
        <div className={style.navigation__list}>
            <Link
                className={style.navigation__listItem}
                activeStyle={{
                    color: colors.workshop
                }}
                to={lngMap[lng].workshop.url}
            >
                <span className={style.navigation__plus} style={{ color: colors.workshop }}>+</span> {lngMap[lng].workshop.title}
            </Link>
            <Link
                className={style.navigation__listItem}
                activeStyle={{
                    color: colors.pedagogy
                }}
                to={lngMap[lng].pedagogy.url}
            >
                <span className={style.navigation__plus} style={{ color: colors.pedagogy }}>+</span> {lngMap[lng].pedagogy.title}
            </Link>
            <Link
                className={style.navigation__listItem}
                activeStyle={{
                    color: colors.team
                }}
                activeClassName={style.active}
                to={lngMap[lng].team.url}
            >
                <span className={style.navigation__plus} style={{ color: colors.team }}>+</span> {lngMap[lng].team.title}
            </Link>
            <Link
                className={style.navigation__listItem}
                activeStyle={{
                    color: colors.holidays
                }}
                activeClassName={style.active}
                to={lngMap[lng].holidays.url}
            >
                <span className={style.navigation__plus} style={{ color: colors.holidays }}>+</span> {lngMap[lng].holidays.title}
            </Link>
            <Link
                className={style.navigation__listItem}
                activeStyle={{
                    color: colors.contact
                }}
                activeClassName={style.active}
                to={lngMap[lng].contact.url}
            >
                <span className={style.navigation__plus} style={{ color: colors.contact }}>+</span> {lngMap[lng].contact.title}
            </Link>
            <Link className={style.navigation__lng} to={lng === 'fr' ? '/en' : '/'}>{lng === 'fr' ? 'en' : `fr`}</Link>
        </div>
    </nav>
);

Navigation.propTypes = {
    lng: PropTypes.string.isRequired,
    colors: PropTypes.object
}

export default Navigation;
