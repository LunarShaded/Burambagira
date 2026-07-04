import styles from './Hero.module.css'

export default function Hero(){
    return(
        <>
         <section className={styles.heroSection}>
            <div className={styles.heroContent}>
          
                <div className={styles.heroTitle}>
                   <h1>Welcome to Burambagira School</h1>
                   <p>Empowering Young Minds, Building Brighter Futures</p>
                </div>

                <div className={styles.heroMainContent}>
                    <p>Welcome to Burambagira School, a place where education opens doors to opportunity and hope.<br/>
                       Located in Uganda, our school is dedicated to providing children with a safe, supportive, <br/>
                       and inspiring environment where they can learn, grow, and succeed.</p>

                    <p>We believe that every child has unique talents and potential. Through quality education, dedicated teachers,<br/>
                       and strong community values, we help our students build the knowledge, confidence, and skills needed for a <br/>
                       brighter future.</p>

                    <div className={styles.bottomTitle}>
                        <p>Together, we are shaping the next generation of leaders, innovators, and changemakers.</p>
                    </div>
                </div>
            </div>
         </section>
        </>
    )
}