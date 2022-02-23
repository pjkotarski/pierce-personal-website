import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import styles from './DownArrow.module.scss';

export const DownArrow = () => {
  return (
    <Link href="#about">
      <a className={styles.downArrowContainer}>
        <FontAwesomeIcon icon={faLongArrowAltDown} className={styles.downIcon}/>
        <h3 className={`${styles.scrollText}`}>scroll down</h3>
        <FontAwesomeIcon icon={faLongArrowAltDown} className={`${styles.downIcon}`}/>
      </a>
    </Link>
  );
}