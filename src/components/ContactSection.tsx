import styles from "../pages/Home.module.css";

function ContactSection() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactBox}>
        <p className={styles.eyebrow}>Get in touch</p>
        <h2 className={styles.sectionHeading}>Ready to take the first step?</h2>
        {/* <p className={styles.contactSub}>
          Book a free 20-minute introductory call — no commitment, just a gentle
          conversation to see if we're a good fit.
        </p> */}
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.formRow}>
            <input className={styles.input} type="text" placeholder="Your name" required />
            <input
              className={styles.input}
              type="email"
              placeholder="Email address"
              required
            />
          </div>
          <textarea
            className={styles.textarea}
            placeholder="Briefly, what brings you here? (optional)"
            rows={4}
          />
          <button type="submit" className={styles.btnPrimary}>
            Send message
          </button>
        </form>
        <p className={styles.contactNote}>
          Or call / WhatsApp: <strong>+44 7700 900 123</strong>
        </p>
      </div>
    </section>
  );
}

export default ContactSection;
