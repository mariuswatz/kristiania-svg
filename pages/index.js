import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SVGData from '../public/components/svg-data/svg-data.jsx'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SVG template parser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Parsing a design template from SVG</h1>

        <SVGData />
      </main>
    </div>
  )
}
