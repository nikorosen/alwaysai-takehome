import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Common layout to give pages Navbar and Footer
 * @param {children}
 */
export default function Layout({ children }) {
  
  /** Nav menu */
  let menu = {
    Product: ['Models', 'Apps & APIs', 'Edge Devices', 'Analytics', 'Docs', 'Dashboard'],
    Payoff: ['Transportation', 'Customer Analytics', 'Industrial'],
    People: ['About Us', 'Community', 'Partners', 'Careers'],
    Prism: ['The Business of CV', 'Tutorials', 'Blog', 'Press']
  }
  
  return (
    <>
        <Navbar menu={menu}/>
        <main>{children}</main>
        <Footer menu={menu}/>
    </>
  )
}