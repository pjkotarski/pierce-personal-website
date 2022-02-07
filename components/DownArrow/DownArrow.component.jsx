import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './DownArrow.module.scss';

export const DownArrow = () => {
  return (
    <div className={styles.downArrowContainer}>
      <FontAwesomeIcon icon={faLongArrowAltDown} className={styles.downIcon}/>
      <h3 className={`${styles.scrollText}`}>scroll down</h3>
      <FontAwesomeIcon icon={faLongArrowAltDown} className={`${styles.downIcon}`}/>
    </div>
  );
}