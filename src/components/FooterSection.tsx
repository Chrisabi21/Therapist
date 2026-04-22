import styles from "../pages/Home.module.css";

function FooterSection() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Adelola Abiodun</p>
      <p>Registered in Nigeria · Privacy Policy</p>
    </footer>
  );
}

export default FooterSection;
