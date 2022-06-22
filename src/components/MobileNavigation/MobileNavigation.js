import "./MobilieNavigation.css"

import {NavLink, Link } from "react-router-dom";
import { useState } from "react";

function MobilieNavigation(props) {
    // const [isOpen, setIsOpen] = useState(isMobileMemuOpen)

    const linkActiveClass = ({ isActive }) => {
        return `navigation__link ${isActive && 'navigation__link_active_mob'}`;
    }

    const hadleCloseMobilieNavigation = () => {
        props.isChecked = false;
        // setIsOpen(!isOpen)
    }

    return(
        <section className="mobilieNavigation">
            <div className="mobilieNavigation__popup">
                <div className="mobilieNavigation__wrapper">
                    <NavLink to="/" className={linkActiveClass} onClick={hadleCloseMobilieNavigation}>Главная</NavLink>
                    <NavLink to="/movies" className={linkActiveClass} onClick={hadleCloseMobilieNavigation}>Фильмы</NavLink>
                    <NavLink to="/saved-movies" className={linkActiveClass} onClick={hadleCloseMobilieNavigation}>Сохраненные Фильмы</NavLink>
                </div>
                <Link className="navigation__profile mobilieNavigation__profile" to="/profile">Аккаунт<div className="navigation__icon-user" onClick={hadleCloseMobilieNavigation}></div></Link>
            </div>
            
        </section>
    )
}

export default MobilieNavigation;