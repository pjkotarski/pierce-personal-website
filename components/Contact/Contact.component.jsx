import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
					I'm always open to hearing from people. Thanks!
				</p>
				<h4 className={`${styles.emailHeader} ${styles.bigText}`}>pjkotarski@gmail.com</h4>
				<div className={styles.linksContainer}>
					<button className={styles.linkButton}>
						<FontAwesomeIcon icon={faGithub}/>
					</button>
					<button className={styles.linkButton}>
						<FontAwesomeIcon icon={faLinkedin}/>
					</button>
					<button className={styles.linkButton}>
						<FontAwesomeIcon icon={faEnvelope}/>
					</button>
				</div>


			</div>
		</div>
	)
}