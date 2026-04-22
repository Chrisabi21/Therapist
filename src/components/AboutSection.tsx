import styles from "../pages/Home.module.css";

function AboutSection() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutImgCol}>
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80&auto=format&fit=crop"
          alt="Calm, welcoming therapy room"
        />
      </div>
      <div className={styles.aboutText}>
        <p className={styles.eyebrow}>About me</p>
        <h2 className={styles.sectionHeading}>
          Therapy rooted in warmth,
          <br />
          science & deep listening.
        </h2>
        <p>
          I'm Claire, a BACP-accredited psychotherapist with over 15 years of
          experience supporting individuals and couples through life's most
          challenging moments. My approach blends evidence-based methods — including
          CBT, EMDR, and attachment-based therapy — with genuine human connection.
        </p>
        <p style={{ marginTop: "1rem" }}>
          I believe every person deserves a space free from judgement, where real
          change becomes possible. Sessions are held in my calm South London
          practice, or online via secure video call.
        </p>
        <a
          href="#contact"
          className={styles.btnPrimary}
          style={{ marginTop: "2rem", display: "inline-block" }}
        >
          Work with me
        </a>
      </div>
    </section>
  );
}

export default AboutSection;
