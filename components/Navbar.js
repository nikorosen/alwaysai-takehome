import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

/**
 * Persistent navbar that holds nav links and cta buttons
 * @param {menu}: nav menu defined in Layout.js component
 */
export default function Navbar(props) {

    return <div className={styles.navbar}>
        <Link href=''><Image src="/logo.svg" height='30em' width='100em'></Image></Link>

        <ul className={styles.menu}>
            {Object.keys(props.menu).map( key => <li><Link href=''>{key}</Link></li>)}
        </ul>

        <span className={styles['btn-group']}>
            <Link href=''><span className={styles['btn']}>Schedule a Demo</span></Link>
            <Link href=''><span className={styles['btn-alt']}>Sign Up</span></Link>
        </span>

    </div>
}