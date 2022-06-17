import styles from '../styles/Features.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import "@fortawesome/fontawesome-svg-core/styles.css";

/**
 * Section wrapper for FeatureTable
 */
export default function Features(props) {
    return <section className={styles.features}>
        <h2 id="features" className='heading'>Select your edition and build vision today</h2>
        <p className='subheading'>Try it for free. Then pay as you grow.</p>

        <FeatureTable records={props.records} />
    </section>
}

/**
 * Displays price assessment data
 * @param {records} : contains price assessment data, fetched from getStaticProps() in index.js and passed from Home component 
 */
function FeatureTable(props) {

    const records = props.records;

    return (

        <table className={styles['feature-table']}>
            <tbody>
                <tr>
                    <th className={styles['first-th']}>FEATURES</th>
                    <th>Standard</th>
                    <th>Premium</th>
                    <th>Enterprise</th>
                </tr>

                {records.map(r =>
                    <tr key={r[0]} className={ ['Users', 'Model Training', 'Storage'].includes(r[0]) ? styles['accent'] : ''}>
                        <td style={{ textAlign: 'start' }}>{r[0]}</td>
                        <td>{typeof r[1] === 'boolean' && r[1] ? <FontAwesomeIcon icon={faCheck} className={styles.icon} /> : r[1]}</td>
                        <td>{typeof r[2] === 'boolean' && r[2] ? <FontAwesomeIcon icon={faCheck} className={styles.icon} /> : r[2]}</td>
                        <td>{typeof r[3] === 'boolean' && r[3] ? <FontAwesomeIcon icon={faCheck} className={styles.icon} /> : r[3]}</td>
                    </tr>)
                }
            </tbody>
        </table>

    )
}

