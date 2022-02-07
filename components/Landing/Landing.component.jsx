import { faGithub, faLinkedin, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { DownArrow } from '../DownArrow/DownArrow.component';
import styles from './Landing.module.scss';

export const Landing = () => {

	return (
		<div className={styles.landingContainer}>
			<div className={`${styles.profileLinksContainer} ${styles.quickFlex}`}>
				<div className={styles.linksInnerContainer}>
					<button className={styles.linkButton}>
						<FontAwesomeIcon icon={faGithub}/>
					</button>
					<button className={styles.linkButton}>
						<FontAwesomeIcon icon={faLinkedin}/>
					</button>
					<button className={styles.linkButton}>
						<FontAwesomeIcon icon={faEnvelope}/>
					</button>
					<button className={styles.linkButton}>
						<FontAwesomeIcon icon={faSpotify}/>
					</button>
				</div>
			</div>
			<div className={styles.quickRow}>
				<div className={styles.leftContainer}>
					<div className={styles.innerText}>
						<div className={styles.quickFlex}>
							<div>
								<h1 className={styles.nameHeading}>Hello, I'm Pierce.</h1>
								<p className={styles.blurb}>
									I'm a Full Stack Software Engineer who specializes on the frontend. I love solving complex problems
									everyday, and would love to show you some of the things I have been working on. 
								</p>
							</div>
						</div>
					</div>
					<DownArrow/>
				</div>
				<div className={styles.rightContainer}>
					<button className={styles.sectionLink}>
						<h2 className={styles.textStroke}>About</h2>
					</button>
					<button className={styles.sectionLink}>
						<h2 className={styles.textStroke}>Code</h2>
					</button>
					<button className={styles.sectionLink}>
						<h2 className={styles.textStroke}>Contact</h2>
					</button>
					<Link href="/#more">
						<a className={styles.funStuff}>(and some fun stuff)</a>
					</Link>
				</div>
			</div>
		</div>
	)
}   