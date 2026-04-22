import styles from "../pages/Home.module.css";

function TrustBarSection() {
  return (
    <div className={styles.trustBar}>
      {["BACP Accredited", "15+ Years Experience", "In-Person & Online", "London & UK-wide"].map(
        (t) => (
          <span key={t} className={styles.trustItem}>
            <span className={styles.trustDot}>✦</span> {t}
          </span>
        )
      )}
    </div>
  );
}

export default TrustBarSection;
