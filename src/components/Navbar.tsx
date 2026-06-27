import styles from "../pages/Home.module.css";
import logo from "../assets/images/AA_logo.png";

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.navInner}>
        <a href="#hero" className={styles.navLogo}>
          <img src={logo} alt="Adelola Abiodun" className="w-8 h-8 sm:w-9 sm:h-9 object-contain shrink-0" /> Adelola Abiodun
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
