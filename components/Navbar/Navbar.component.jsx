import styles from './Navbar.module.scss';

export const Navbar = () => {

    return (
        <div className={styles.navbarContainer}>
            <button className={`${styles.navButton} ${styles.rotate}`}>
                <p className={styles.buttonText}>about</p>
            </button>
            <button className={`${styles.navButton} ${styles.rotate}`}>
                <p className={styles.buttonText}>code</p>
            </button>
            <button className={`${styles.navButton} ${styles.rotate}`}>
                <p className={styles.buttonText}>contact</p>
            </button>
            <button className={`${styles.navButton} ${styles.rotate}`}>
                <p className={styles.buttonText}>more</p>
            </button>
        </div>
    )
}