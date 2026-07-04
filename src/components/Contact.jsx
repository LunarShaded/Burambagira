import styles from './Contact.module.css'

export default function Contact() {
    return (
        <section className={styles.contactSection} id="contact">
            <h1 className={styles.title}>Contact Us</h1>

            <p className={styles.subtitle}>
                We would love to hear from you. Whether you are a parent,
                volunteer, supporter, or community member, feel free to get in touch.
            </p>

            <div className={styles.contactContainer}>
                <div className={styles.contactInfo}>
                    <h2>Get In Touch</h2>

                    <div className={styles.infoItem}>
                        <h4>📍 Address</h4>
                        <p>Burambagira School, Uganda</p>
                    </div>

                    <div className={styles.infoItem}>
                        <h4>📞 Phone</h4>
                        <p>+256 XXX XXX XXX</p>
                    </div>

                    <div className={styles.infoItem}>
                        <h4>✉️ Email</h4>
                        <p>info@burambagira.org</p>
                    </div>
                </div>

                <form className={styles.contactForm}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                    />

                    <textarea
                        placeholder="Your Message"
                        rows="6"
                        required
                    ></textarea>

                    <button type="submit">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}