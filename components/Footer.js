import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import Socials from './Socials.js'

/**
 * Persistent footer that holds social links, copyright and sitemap
 * @param {menu}: nav menu defined in Layout.js component
 */
export default function Footer(props) {

    return <footer className={styles.footer}>
        <div className={styles['footer-body']}>
            <div className={styles.socials}>
                <Image alt="logo" src="/logo.svg" height='30em' width='100em'></Image>
                <p>alwaysAI is a software company located in San
                    Diego, CA. We make computer vision come alive
                    on the edge - where work and life happen.</p>
                <Socials /></div>
                <SiteMap menu={props.menu}/>
        </div>
        <div className={styles.copyright}><span>@ 2021 alwaysAI, Inc.</span><span><a>Privacy Policy</a> | <a>Terms of Use</a></span></div>
    </footer>
}

/**
 * SiteMap Component for navigation
 * @param {menu}: nav menu defined in Layout.js component
 */
function SiteMap(props) {

    return <ul className={styles.sitemap}>
    {Object.keys(props.menu).map(key =>
        <li key={key}>
            <ul>
                <li key={key + ' title'}style={{ color: 'black' }}><b>{key}</b></li>
                {props.menu[key].map(i => <li key={i}><Link href=''>{i}</Link></li>)}
            </ul>
        </li>
    )}
</ul>
}