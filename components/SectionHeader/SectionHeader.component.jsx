import styles from './SectionHeader.module.scss';

export const SectionHeader = ({ header, number }) => {
	return (
		<div className={`${styles.headerContainer}`} >
			<h1 className={`${styles.numberHeader} `}>
				{ number }
			</h1>
			<h1 className={`${styles.sectionHeader} ${styles.outlineTextBlack}`}>
				{ header }
			</h1>
		</div>
  )
}