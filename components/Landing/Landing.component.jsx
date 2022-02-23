import { faGithub, faLinkedin, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { DownArrow } from '../DownArrow/DownArrow.component';
import styles from './Landing.module.scss';

export const Landing = ({ showMore }) => {

	return (
		<div className={styles.landingContainer} id="home">
			<div className={`${styles.profileLinksContainer} ${styles.quickFlex}`}>
				<div className={styles.linksInnerContainer}>
					<div>
						<a className={styles.linkCont} href="https://github.com/pjkotarski" target="_blank" rel="noreferrer">
							<FontAwesomeIcon className={styles.linkButton} icon={faGithub}/>
						</a>
					</div>
					<div>
						<a className={styles.linkCont} href="https://www.linkedin.com/in/pierce-kotarski/" target="_blank" rel="noreferrer">
							<FontAwesomeIcon className={styles.linkButton} icon={faLinkedin}/>
						</a>
					</div>
					<Link href="#contact">
						<a className={styles.linkCont}>
							<FontAwesomeIcon className={styles.linkButton} icon={faEnvelope}/>
						</a>
					</Link>
					{ showMore && <Link href="#more">
						<a className={styles.linkCont}>
							<FontAwesomeIcon className={styles.linkButton} icon={faSpotify}/>
						</a>
					</Link>}
				</div>
			</div>
			<div className={styles.leftContainer}>
				<div className={styles.innerText}>
					<div className={styles.quickFlex}>
						<div>
							<h1 className={styles.nameHeading}>Hello, I&apos;m Pierce.</h1>
							<p className={styles.blurb}>
								I&apos;m a Full Stack Software Engineer who specializes on the frontend. I love solving complex problems
								everyday, and would love to show you some of the things I have been working on. 
							</p>
						</div>
					</div>
				</div>
				<DownArrow/>
			</div>
			<div className={styles.rightContainer}>
				<Link href="#about">
					<a className={styles.sectionLink}>
						<h2 className={styles.textStroke}>About</h2>
					</a>
				</Link>
				<Link href="#code">
					<button className={styles.sectionLink}>
						<h2 className={styles.textStroke}>Code</h2>
					</button>
				</Link>
				<Link href="#contact">
					<button className={styles.sectionLink}>
						<h2 className={styles.textStroke}>Contact</h2>
					</button>
				</Link>
				{ showMore && <Link href="#more">
					<a className={styles.funStuff}>(and some fun stuff)</a>
				</Link>}
			</div>
		</div>
	)
}   