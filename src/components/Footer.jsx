import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h2>Burambagira School</h2>
                    <p>
                        Empowering young minds and creating opportunities
                        through quality education in Uganda.
                    </p>
                </div>

                <div className={styles.column}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Contact</h3>
                    <p>📍 Uganda</p>
                    <p>📞 +256 XXX XXX XXX</p>
                    <p>✉️ info@burambagira.org</p>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>
                    © {new Date().getFullYear()} Burambagira School. All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}