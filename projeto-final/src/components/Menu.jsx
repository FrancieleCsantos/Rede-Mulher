import { Link } from 'react-router-dom'
import LogoNav from '../assets/logo.nav.png'
import Image from '../components/Image'

import styles from '../styles/components/menu.module.css'

const Menu = () => {
  return (
    <nav className={styles.menuContainer}>
       <Image img={LogoNav} />
      <li>
        <Link className={styles.menuLink} to="/">Home</Link>
      </li>
      <li>
        <Link className={styles.menuLink} to="/sobre">Quem somos</Link>
      </li>
      <li>
        <Link className={styles.menuLink} to="/portfolio">Aqui você encontra ajuda</Link>
      </li>
    </nav>
  )
}

export default Menu;
