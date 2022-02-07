import styles from './ProjectDescription.module.scss';

export const ProjectDescription = ( {descObj} ) => {
  return (
    <div className={`${styles.container} ${descObj.imgLeft ? styles.imageLeft : styles.imageRight}`}>
      { descObj.image && <div className={styles.quickFlex}>
        <img className={styles.image} src={descObj.image}></img>
      </div>}
      <div className={styles.content}>
        <p className={styles.descriptionTitle}>{descObj.title}</p>
        <p className={styles.description}>{descObj.description}</p>
        { descObj.link && <a className={styles.link} href={descObj.link}>Demo</a>}
      </div>
    </div>
  )
}