import React from 'react';
import s from './Navbar.module.sass';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href="#">
          Profile
        </a>
      </div>
      <div className={s.item}>
        <a href="#">
          Messeges
        </a>
      </div>
      <div className={s.item}>
        <a href="#">
          My Music
        </a>
      </div>
      <div className={s.item}>
        <a href="#">
          News
        </a>
      </div>
      <div className={s.item}>
        <a href="#">
          Settings
        </a>
      </div>
    </nav>
  )
}

export default Navbar;