import styles from './SectionHeader.module.scss';

export const SectionHeader = ({ header, number, blackText = false }) => {
	return (
		<div className={`${ blackText ? styles.headerContainerBlack : styles.headerContainerWhite} ${styles.headerContainer}`} >
			<h1 className={`${styles.numberHeader} ${blackText ? styles.blackText : styles.whiteText}`}>
				{ number }
			</h1>
			<h1 className={`${styles.sectionHeader} ${!blackText ? styles.blackText : styles.whiteText} ${ blackText ? styles.outlineTextBlack : styles.outlineTextWhite}`}>
				{ header }
			</h1>
		</div>
  )
}