import styles from "../pages/Home.module.css";

const SERVICES = [
  {
    icon: "◌",
    title: "Individual Therapy",
    desc: "One-on-one sessions tailored to your unique needs, helping you navigate anxiety, depression, grief, and life transitions.",
  },
  {
    icon: "◎",
    title: "Couples Counselling",
    desc: "A safe space to rebuild trust, improve communication, and strengthen your relationship together.",
  },
  {
    icon: "◍",
    title: "Trauma & EMDR",
    desc: "Evidence-based trauma processing to help you release what's holding you back and move forward with freedom.",
  },
  {
    icon: "○",
    title: "Mindfulness & CBT",
    desc: "Practical tools drawn from Cognitive Behavioural Therapy and mindfulness to reshape unhelpful thought patterns.",
  },
] as const;

function ServicesSection() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.sectionHead}>
        <p className={styles.eyebrow}>How I can help</p>
        <h2 className={styles.sectionHeading}>Areas of support</h2>
      </div>
      <div className={styles.serviceGrid}>
        {SERVICES.map(({ icon, title, desc }) => (
          <div key={title} className={styles.serviceCard}>
            <span className={styles.serviceIcon}>{icon}</span>
            <h3 className={styles.serviceTitle}>{title}</h3>
            <p className={styles.serviceDesc}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
