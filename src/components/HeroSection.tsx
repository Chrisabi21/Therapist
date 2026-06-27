import styles from "../pages/Home.module.css";
import heroImage from "../assets/images/Mum.png";

function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroText}>
        {/* <p className={styles.eyebrow}>Chartered Psychotherapist · BACP Accredited</p> */}
        <h1 className={styles.heroHeading}>
          A place to feel
          <br />
          <em>heard, held & whole.</em>
        </h1>
        <p className={styles.heroParagraph}>
          Life can feel overwhelming. Whether you're carrying anxiety, grief,
          relationship pain, or simply the weight of being human — therapy offers a
          quiet space to explore it all, at your own pace.
        </p>
        <div className={styles.heroActions}>
          <a href="#contact" className={styles.btnPrimary}>
            Book a session
          </a>
          <a href="#about" className={styles.btnGhost}>
            Learn more ↓
          </a>
        </div>
      </div>

      <div className={styles.heroImageCol}>
        <div className={styles.heroImgWrap}>
          <img
            src={heroImage}
            alt="Dr. Claire Ellis, psychotherapist"
            className={styles.heroImg}
          />
        </div>
        <div className={styles.heroBadge}>
          <span className={styles.heroBadgeDot} />
          Accepting new clients
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
