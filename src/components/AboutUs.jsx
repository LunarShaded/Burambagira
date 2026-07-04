import styles from './AboutUs.module.css'

export default function AboutUs() {
    return (
        <section className={styles.aboutUsSection}>
            <h1 className={styles.title}>About Burambagira School</h1>

            <div className={styles.aboutUsContent}>
                <div className={styles.item}>
                    <h3>Our Vision</h3>
                    <p>
                        Burambagira School was founded with a vision to make
                        quality education accessible to children in our
                        community. We are committed to creating an environment
                        where students feel valued, encouraged, and motivated
                        to achieve their goals.
                    </p>
                </div>

                <div className={styles.item}>
                    <h3>Our Community</h3>
                    <p>
                        Our school serves children from diverse backgrounds and
                        provides opportunities for academic growth, personal
                        development, and character building. We believe that
                        education is one of the most powerful tools for
                        transforming lives and strengthening communities.
                    </p>
                </div>
            </div>

            <div className={styles.card}>
                <h2>What We Believe</h2>
                <p>
                    At Burambagira School, we focus not only on academic
                    success but also on respect, responsibility, teamwork, and
                    compassion. Our goal is to help every student become a
                    confident learner and a positive member of society.
                </p>
            </div>
        </section>
    )
}