import Head from 'next/head'
import styles from './layout.module.css'
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
        <Navbar/>
        <main className={styles.main}>{children}</main>
        <Footer/>
    </>
  )
}