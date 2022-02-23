import { ProjectDescription } from '../ProjectDescription/ProjectDescription.component';
import { SectionHeader } from '../SectionHeader/SectionHeader.component';
import { Title } from '../Title/Title.component';
import styles from './Code.module.scss';

export const Code = () => {
	
	return (
		<div className={styles.codeContainer} id="code">
			<div className={styles.sectionStartDiv}/>
			<SectionHeader number='02.' header='CODE'/>
			<div className={styles.innerContent}>
				<p className={styles.pText}>
					I'm always pushing myself to build new stuff in the time that I can find outside of work. I find it's the best 
					way to learn about new technologies that I don't get the opportunity to work with in my day to day job. 
					<br/>
					<br/>
					Here's just a few things I've been working on -- along with some of the challanges and features that came with each. 
				</p>
			</div>

			<div className={styles.ffContainer}>
				
				<Title className={styles.bottomBorder}/>

				<p className={styles.text}>
					A fantasy football league I'm in does a public auction for our weekly waiver wire players, but ESPN only offers a silent auction
					through their platform. Therefore, I built this app, and I'm proud to say that we used it for a few auctions before the season ended. 
				</p>

				<img className={styles.desktopImage} src='/images/ff-auction/auction-main.png'></img>

				<p className={styles.text}>
					The concept of the application itself is fairly simple. A user can login through OAuth (Google) and connect with 
					their ESPN fantasy football league by provididing a few cookies. They can then participate in a weekly public auction with 
					other users from their league who have also joined. Each user is able to see the others bids and respond in real time. 

					<br/><br/> 

					Actual implementation of the app proved to be far more coplicated but really interesting. Feel free to read about some
					of these main issues and solutions below.  and even try out the demo of the 
					application <a className={styles.extLink} target="_blank" href="http://ff-auction.com/demo">here.</a> 
			</p>


				{ projectDescriptions.map((description, ind) => {
					return <ProjectDescription descObj={description} key={ind}/>
				})}
			</div>
		</div>
	)
}


const projectDescriptions = [
	{
		title: 'Fast Load Times',
		description: 'In order to make the UI as fast as possible, I chose to implement SWR (stale while rerendering) on top of NextJS. Whenever a user makes an api call, the cached results of their last identical api call are shown immediatley, while the new api results are loaded and then used to rehydrate the page. This results in a much faster and more seamless user experience.',
		image: '',
		imgLeft: false
	},
	{
		title: 'Responsive Styles',
		description: "I built this application with mobile in mind first, therefore all pages are compltely responsive. More specifically, the auction page is built modularly, which makes the responsive designs far more intuitive for the user switching between differnet layouts. ",
		image: '/images/ff-auction/auction-mobile.png',
		imgLeft: true
	},
	{
		title: 'OAuth',
		description: "I used Google's OAuth to implement login. This makes it possible to have all the benefits of saved user accounts without any of the headache of security.",
		image: '/images/ff-auction/auction-oauth.png',
		imgLeft: false
	},
	{
		title: 'Try it out',
		description: 'Test out the application on the demo page below -- all you need to do is enter your name.',
		image: '',
		link: 'https://ff-auction.com/demo',
		imgLeft: true
	},
]