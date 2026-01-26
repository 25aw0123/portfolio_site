import { Link } from 'react-router-dom'
import { useState } from 'react'
import styles from './Header.module.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
        <button
          type="button"
          className={`${styles.hamburgerButton} ${isOpen ? styles.hamburgerOpen : ''}`}
          onClick={toggleMenu}
          aria-label="メニュー切り替え"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>

      <nav className={`${styles.hamburgerNav} ${isOpen ? styles.navOpen : ''}`}>
        <ul className={styles.navLinks}>
          <li onClick={toggleMenu}>
            <Link to="/">
              <span className={styles.jaText}>ホーム</span>
              <span className={styles.enText}>home</span>
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/about">
              <span className={styles.jaText}>私のこと</span>
              <span className={styles.enText}>about</span>
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/about">
              <span className={styles.jaText}>お問い合わせ</span>
              <span className={styles.enText}>contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header