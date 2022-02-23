import { Navbar } from '../Navbar/Navbar.component';
import styles from './Template.module.scss';

export const Template = ({ children, showMore }) => {
    return (
        <div className={styles.templateContainer}> 
            <Navbar showMore={showMore}/>
            <div className={styles.content}>
                { children }
            </div>
        </div>
    )
}