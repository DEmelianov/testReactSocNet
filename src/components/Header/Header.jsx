import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://static.wikia.nocookie.net/brawlhalla_gamepedia/images/0/00/Avatar_Silly_Face.png" alt=""/>
      <div className={s.loginBlock}>
        {
          !props.isAuth
            ? <NavLink to="/login">
              Login
            </NavLink>
            : <div>
              {props.login}
              <button
                onClick={props.logout}
              >
                logout
              </button>
            </div>
        }
      </div>
    </header>
  )
}

export default Header