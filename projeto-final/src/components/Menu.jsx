
import React from 'react';
import { Link } from 'react-router-dom';
import LogoNav from '../assets/logo.nav.png';
import Image from '../components/Image';
import styles from '../styles/components/menu.module.css';

const Menu = () => {
  return (
    <nav className={styles.menuContainer}>
      <Image img={LogoNav} />
      <ul>
        <li>
          <Link className={styles.menuLink} to="/">Home</Link>
        </li>
        <li>
          <Link className={styles.menuLink} to="/sobre">Quem somos</Link>
        </li>
        <li>
          <Link className={styles.menuLink} to="/Ajuda">Aqui você encontra ajuda</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
