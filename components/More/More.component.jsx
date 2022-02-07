import { SectionHeader } from '../SectionHeader/SectionHeader.component';
import styles from './More.module.scss';

export const More = () => {
  return (
    <div className={styles.moreContainer} id="more">
      <div className={styles.innerContainer}>
        <SectionHeader number="04." header="MORE" blackText={true}/>
      </div>
    </div>
  )
}