import styles from './WorkExperience.module.scss';

export const WorkExperience = ( { company, position, startDate, endDate, children }) => {
  return (
    <div className={styles.experienceContainer}>
      <div className={styles.expHeading}>
        <div className={styles.flexRow}>
          <p className={styles.companyName}>{company}</p>
          <p className={styles.position}>{position}</p>
        </div>
        <div className={styles.quickRow}>
          <p className={styles.startDate}>{startDate}</p>
          <p className={styles.endDate}>{endDate}</p>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.bulletPointsContainer}>
        <ul className={styles.jobInfoContainer}>
          {children}
        </ul>
      </div>
    </div>
  )
}