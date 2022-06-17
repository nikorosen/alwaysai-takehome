import styles from '../styles/Tiers.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import "@fortawesome/fontawesome-svg-core/styles.css";

/**
 * Section wrapper for pricing tier information
 */
export default function Tiers() {

    /** Static tier data */
    const tiers = {
        standard: {
            title: 'Standard',
            desc: `Ideal for small businesses and startups`,
            features: ['2 Full-Access Users', 'alwaysAI CLI', '75+ Starter Apps', '100+ Pre-Trained Models', '2 Full-Access Users']
        },

        premium: {
            title: 'Premium',
            desc: `Ideal for businesses that want to 
            take their computer vision apps 
            to the next level`,
            features: ['5 Full-Access Users', 'alwaysAI CLI', '75+ Starter Apps', '100+ Pre-Trained Models', '5 Full-Access Users']
        },

        enterprise: {
            title: 'Enterprise',
            desc: `Ideal for enterprise customers 
            who want to deploy computer 
            vision applications at scale`,
            features: ['Unlimited Users', 'alwaysAI CLI', '75+ Starter Apps', '100+ Pre-Trained Models', 'Unlimited Users']
        }
    }

    return (
        <section className={styles.tiers}>
            <h1 className='heading'>Simple, transparent pricing</h1>
            <p className='subheading'>No surprise fees.</p>

            <div className={styles['container']}>
                {Object.keys(tiers).map(i => <Card key={tiers[i].title} tier={tiers[i]} />)}
            </div>

        </section>
    )
}

/**
 * Card component to display specific tier information
 * @param {tier} : a specific tier, passed from Tiers component
 */
function Card(props) {
    return (
        <div className={`${styles['card']} ${styles[props.tier.title.toLowerCase()]}`}>
            <h3>{props.tier.title}</h3>
            <p>{props.tier.desc}</p>

            <ul>
                {props.tier.features.map(i => <li key={props.tier + ' ' + i}><FontAwesomeIcon icon={faCheckCircle} className={styles.icon} /> {i}</li>)}
            </ul>

            <a href="#features" className={styles['btn']}/>
        </div>
    )
}