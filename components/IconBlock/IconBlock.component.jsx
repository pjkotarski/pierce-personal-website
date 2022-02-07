import styles from './IconBlock.module.scss';

export const IconBlock = ({ imgSrc, name}) => {
  return (
    <div className={styles.iconHolder}>
      <img src={imgSrc} className={styles.img}></img>
      <h5 className={styles.nameText}>{name}</h5>
    </div>
  );
}