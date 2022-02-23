import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SectionHeader } from '../SectionHeader/SectionHeader.component';
import styles from './Contact.module.scss';

export const Contact = () => {
	return (
		<div className={styles.contactContainer} id="contact">
			<div className={styles.sectionStartDiv}/>
			<SectionHeader number='03.' header='CONTACT'/>
			<div className={styles.innerContent}>
				<p className={styles.message}>
					If you would like to say hi and get in contact, just drop me an email -- 
					I&apos;m always open to hearing from people. Thanks!
				</p>
				<h4 className={`${styles.emailHeader} ${styles.bigText}`}>pjkotarski@gmail.com</h4>
				<div className={styles.linksContainer}>
					<a className={styles.linkButton} href="https://github.com/pjkotarski" target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faGithub}/>
					</a>
					<a className={styles.linkButton} href="https://www.linkedin.com/in/pierce-kotarski/" target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faLinkedin}/>
					</a>
					<a className={`${styles.linkButton}`} href="/p-kotarski-resume.pdf" target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faFilePdf}/>
					</a>
				</div>


			</div>
		</div>
	)
}