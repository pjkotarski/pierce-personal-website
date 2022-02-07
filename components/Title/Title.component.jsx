import { faDollarSign, faFootballBall } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Title.module.scss';

export const Title = ({ className='' }) => {

    return (
        <a className={`${styles.titleContainer} ${className}`} href="http://ff-auction.com/demo">
                <div className={styles.titleIcon}>
                    <FontAwesomeIcon className={styles.dollarSign} icon={faDollarSign}/>
                </div>
                <h3 className={styles.title}>Auction</h3>
                <div className={styles.titleIcon}>
                    <FontAwesomeIcon className={styles.football} icon={faFootballBall}/>
                </div>
            </a>
    )
}