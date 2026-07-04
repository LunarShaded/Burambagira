import styles from './Header.module.css'


export default function Header(){
    return(
        <>
          <section className={styles.headerSection}>
            <div className={styles.headerTitle}>
                  <h3>Burambagira</h3>
                  <p>Secondary School</p>
            </div>

         <nav>

           <div className={styles.nav}>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Contact Us</a></li>
                </ul>
           </div>

        </nav>
          </section>
        </>
    )
}