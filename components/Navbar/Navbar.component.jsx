import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './Navbar.module.scss';

export const Navbar = () => {

	const [isOpen, setIsOpen] = useState(false);

	const navEmptyRef = useRef();

	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [scrollShow, setScrollShow] = useState(true);

	const [showPosition, setShowPosition] = useState(false);

	const handleScroll = () => {

    const scrollPos = document.body.scrollTop;
		const navBarPosition = navEmptyRef.current.offsetTop;
		const shouldScrollShow = (prevScrollPos > scrollPos && prevScrollPos - scrollPos > 0);
		
		setScrollShow(shouldScrollShow);
		setPrevScrollPos(scrollPos);
		setShowPosition(navBarPosition <= scrollPos);
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'unset';
		}
	}, [isOpen])

  useEffect(() => {
		document.body.addEventListener('scroll', handleScroll);
    return () => document.body.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, scrollShow, handleScroll]);

	const resolveShowPosition = () => {

		if (showPosition) {
			return styles.showNavbar;
		} else {
			return styles.hideNavbar;
		}
	}

	const resolveShowMenuBar = () => {
		if (showPosition) {
			return styles.showMenuBar;
		} else {
			return styles.hideMenuBar;
		}
	}

	const resolveShowScroll = () => {
		if (showPosition) {
			if (scrollShow) {
				return styles.placeNavbar;
			} else {
				return styles.offsetNavbar;
			}
		} else {
			return styles.offsetNavbar;
		}
	}

	return (
		<>
			<div ref={navEmptyRef}/>
			<div className={`${styles.navbarContainer} ${ resolveShowPosition() } ${ resolveShowScroll() }`}>
			
				<Link href="#home">
					<a className={`${styles.logoContainer} ${showPosition ? styles.logoBlack : styles.logoWhite }`}>
						pk
					</a>
				</Link>

				<button className={`${styles.menuButton} ${ resolveShowMenuBar() }`} onClick={() => setIsOpen(true)}>
						<FontAwesomeIcon icon={faBars}/>
				</button>

				<div className={`${styles.navContent} ${ isOpen ? styles.navContentOpen : styles.navContentClosed }`}>

					<button className={styles.closeButton} onClick={() => setIsOpen(false)}>
						<FontAwesomeIcon icon={faTimes}/>
					</button>

					<div className={styles.navLinks}>
						<Link href="#about">
							<a className={`${styles.navLink}`} onClick={() => { setIsOpen(false); setScrollShow(false)}}>
								<p className={styles.buttonText}>about</p>
							</a>
						</Link>
						<Link href="#code">
							<a className={`${styles.navLink}`} onClick={() => setIsOpen(false)}>
								<p className={styles.buttonText}>code</p>
							</a>
						</Link>
						<Link href="#contact">
							<a className={`${styles.navLink}`} onClick={() => setIsOpen(false)}>
								<p className={styles.buttonText}>contact</p>
							</a>
						</Link>
						<Link href="#more">
							<a className={`${styles.navLink}`} onClick={() => setIsOpen(false)}>
								<p className={styles.buttonText}>more</p>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}