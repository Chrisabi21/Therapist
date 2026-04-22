import styles from "../pages/Home.module.css";

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.navInner}>
        <a href="#hero" className={styles.navLogo}>
          Dr. Claire Ellis
        </a>
        <nav className={styles.navLinks}>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#faq">FAQ</a>
          <a href="#contact" className={styles.navCta}>
            Book a session
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
