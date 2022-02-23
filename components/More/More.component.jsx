import { SectionHeader } from '../SectionHeader/SectionHeader.component';
import styles from './More.module.scss';

export const More = ({ spotify_data }) => {

  const arr = [1,2,3,4,5,6,7,8,9,10];

  return (
    <div className={styles.moreContainer} id="more">
      <div className={styles.sectionStartDiv}/>
      <SectionHeader number="04." header="MORE"/>
      <div className={styles.innerContainer}>
        
        <div className={styles.musicSection}>
          <div className={styles.musicContainer}>
            {spotify_data.map((artist, ind) => 
              <div className={styles.artistContainer} key={ind}>
                <img className={styles.artistImage}src={artist.imgUrl}/>
                <p className={styles.artistName}>{artist.name}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}