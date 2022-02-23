import styles from './Subheader.module.scss';

export const Subheader = ({ header }) => {
  return (
    <div className={`${styles.subheaderContainer}`}>
      <h4 className={`${styles.header} ${styles.bigText}`}>{header}</h4>
    </div>
  );
}