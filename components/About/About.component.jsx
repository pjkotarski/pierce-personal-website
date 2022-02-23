import { IconBlock } from '../IconBlock/IconBlock.component';
import { Subheader } from '../Subheader/Subheader.component';
import { SectionHeader } from '../SectionHeader/SectionHeader.component';
import { WorkExperience } from '../WorkExperience/WorkExperience.component';
import styles from './About.module.scss';

export const About = () => {

	const fullTimeExperience = [
		"Built and maintained multiple consumer-facing web applications and reusable UI component libraries using Angular (Typescript), including VISA's web authentication portal.",
		"Leveraged Vue.js to build a web-components library of easily shareable UI components hosted on a CDN.",
		"Spearheaded redesign and introduction of new features in user-facing application; resulted in reduction of page load times by up to 20%.",
		"Lead effort to configure JavaScript bridges and deep links to VISA’s auth portal for integration with phone apps.",
		"Designed a dynamic and authorable content management system for one of VISA’s applications leveraging AEM.",
		"Developed Java microservices using SpringBoot and introduced key new features such as password recovery via SMS."
	];

	const internExperience = [
		"Created an internal dashboard to manage toggleable dynamic content across various VISA international sites.",
		"Headed effort to design Angular application with reusable and self-contained components and styles.",
		"Designed MySQL relational database structure and wrote Java SpringBoot microservice APIs.",
		"Project resulted in a working internal dashboard that led to a reduction in deployments across VISA sites."
	];

	const skills = [
		{
			imgSrc: 'typescript.png',
			name: 'TypeScript'
		},
		{
			imgSrc: 'javascript.png',
			name: 'Javascript'
		},
		{
			imgSrc: 'react.png',
			name: 'React'
		},
		{
			imgSrc: 'nextjs.png',
			name: 'Next.js'
		},
		{
			imgSrc: 'vue.svg.png',
			name: 'Vue'
		},
		{
			imgSrc: 'nodejs.png',
			name: 'Node.js'
		},
		{
			imgSrc: 'angular.svg',
			name: 'Angular'
		},
		{
			imgSrc: 'java.png',
			name: 'Java'
		},
		{
			imgSrc: 'spring.png',
			name: 'Spring Boot'
		},
		{
			imgSrc: 'swift.png',
			name: 'Swfit'
		},
		{
			imgSrc: 'mongo.png',
			name: 'MongoDB'
		}
	]

	return (
		<div className={styles.aboutContainer} id="about">
			<div className={styles.sectionStartDiv}></div>
			<SectionHeader number='01.' header='ABOUT'/>
			<div className={styles.aboutContent}>
				<div className={styles.textAndPhotoCont}>
					<p className={styles.aboutMeText}>
						Hi! I&apos;m Pierce Kotarski, and I&apos;m a full-stack software engineer (who specializes in frontend)
						 based out of Austin, Texas.
						<br/><br/>
						My passion is learning, and I strive to bring that passion to my life as a software engineer every day
						by challening myself to learn new things. If you asked me what I am most interested in at the moment, 
						I would probably start talking your ear off about monorepos and the challenges of making easily reusable
						components. 
						<br/><br/>
						Come take a look at the things I&apos;ve been building recently.
					</p>
					<img className={styles.image} src='/images/headshot.png' height='400px'/>
				</div>
				<div className={styles.expSection}>
					<Subheader header="experience"/>
					<div className={styles.workExperienceContainer}>
						<WorkExperience company="VISA" position="Fullstack Software Engineer" startDate="Oct 2020" endDate="Present">
							{ fullTimeExperience.map((bullet, ind) => <li className={styles.bullets} key={ind}>{bullet}</li>) }
						</WorkExperience>
				
						<WorkExperience company="VISA" position="Software Engineering Intern" startDate="May 2019" endDate="Aug 2019">
						{ internExperience.map((bullet, ind) => <li className={styles.bullets} key={ind}>{bullet}</li>) }
						</WorkExperience>
					</div>
				</div>
				<br/>
				<br/>
				<br/>

				<div className={styles.skillsSection}>
					<Subheader header="skills"/>
					<div className={styles.skills}>
						{  skills.map((skill, ind) => <IconBlock imgSrc={`/images/skills-icons/${skill.imgSrc}`} name={skill.name} key={ind}/>)}
					</div>
				</div>

			</div>
		</div>
	)
}