import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Tiers from '../components/Tiers';
import Features from '../components/Features';

/**
 * Home page
 * @param {priceAssessmentTable}: price assessment data
 */
export default function Home({ priceAssessmentTable }) {
    
  return (<>
    <Layout>
      <Head>
        <title>AlwaysAI TakeHome</title>
        <meta name="description" content="Take home project for alwaysAI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>

        <Tiers/>
        <Features records={priceAssessmentTable}/>
        
      </main>
    </Layout></>
  )
}

export async function getStaticProps() {
    
  /** Price assessment data */
  const priceAssessmentTable = [
    ['Access to EdgeIQ API Library',true,true,true],
    ['alwaysAI CLI',true,true,true],
    ['alwaysAI 75+ Starter Apps',true,true,true],
    ['alwaysAI Object Detection',true,true,true],
    ['alwaysAI Pose Estimation',true,true,true],
    ['alwaysAI Semantic Segmentation',true,true,true],
    ['alwaysAI Classification',true,true,true],
    ['alwaysAI Model Catalog (100+ pre-trained Models)',true,true,true],
    ['Upload of Private Models in 7 different frameworks',true,true,true],
    ['Desktop Installer & Application',true,true,true],
    ['Users','2 Full-Access Users','5 Full-Access Users','Unlimited'],
    ['Model Training','60 hours monthly','200 hours monthly','500 hours monthly'],
    ['Storage','100 gb storage','300 gb storage','1 TB+'],
    ['Deployments (included in Year 1)','10 deployments','50 deployments','150 deployments'],
    ['Annotation','Dedicated CVAT instance','Dedicated CVAT instance','Dedicated CVAT + Annotation Services'],
    ['alwaysAI Analytics',"CSV export supported, export into BI Tool","CSV export supported, export into BI Tool",'Custom Dashboard'],
    ['alwaysAI TensorRT Conversion','Custom development required','Custom development required',true],
    ['Production Mode',true,true,true],
    ['Offline Devices',true,true,true],
    ['Application Auto-Start',true,true,true],
    ['Premium Support',true,true,true],
    ['Dedicated Technical Account Manager',true,true,true],
    ['Strategic Hardware Expertise/Planning',true,true,true],
    ['Yearly Platform Subscription Fee',"$4,000 (paid annually)","$6,000 (paid annually)","$10,000 (paid annually)"],
    ['Professional Services (Discounted)','$175/hour','$175/hour','$175/hour'],
  ]

  return {
      props: {
        priceAssessmentTable,
      },
  };
}
