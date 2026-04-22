import styles from "../pages/Home.module.css";

const TESTIMONIALS = [
  {
    quote:
      "Working with Dr. Ellis genuinely changed the way I see myself. I finally feel like I have the tools to handle whatever comes my way.",
    name: "Sarah M.",
    detail: "Individual therapy client",
  },
  {
    quote:
      "I was sceptical about therapy at first, but the warmth and professionalism here made it feel completely natural. Life-changing.",
    name: "James K.",
    detail: "Couples counselling client",
  },
  {
    quote:
      "The EMDR sessions helped me process things I'd buried for years. I'm so grateful I took that first step.",
    name: "Priya D.",
    detail: "Trauma therapy client",
  },
] as const;

function TestimonialsSection() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.sectionHead}>
        <p className={styles.eyebrow}>Kind words</p>
        <h2 className={styles.sectionHeading}>What clients say</h2>
      </div>
      <div className={styles.testimonialGrid}>
        {TESTIMONIALS.map(({ quote, name, detail }) => (
          <blockquote key={name} className={styles.testimonial}>
            <p className={styles.testimonialQuote}>"{quote}"</p>
            <footer className={styles.testimonialAuthor}>
              <strong>{name}</strong>
              <span>{detail}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
