import styles from './LeftHeader.module.scss';

export const LeftHeader = ({ header, backgroundBlack=true }) => {
  return (
    <div className={`${styles.leftHeaderContainer} ${ backgroundBlack? styles.blackBackground : styles.whiteBackground }`}>
      <h4 className={`${backgroundBlack? styles.outlineTextWhite : styles.outlineTextBlack} ${styles.rotate}`}>{header}</h4>
    </div>
  );
}