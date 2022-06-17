import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faYoutube, faTwitter, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons' 
import "@fortawesome/fontawesome-svg-core/styles.css";
import styles from '../styles/Socials.module.css'

/**
 * Displays social media links
 */
export default function Socials() {
    
    const icons = [faLinkedinIn, faYoutube, faTwitter, faInstagram, faDiscord]
    
    return <ul className={styles.icons}>
        {icons.map(i => <li className="fa-layers fa-fw"> 
        <a><FontAwesomeIcon icon={i}/></a> </li>)}
      </ul>
  }
