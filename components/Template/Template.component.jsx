import { Navbar } from '../Navbar/Navbar.component';
import styles from './Template.module.scss';

export const Template = ({ children }) => {
    return (
        <div className={styles.templateContainer}> 
            <Navbar/>
            <div className={styles.content}>
                { children }
            </div>
        </div>
    )
}