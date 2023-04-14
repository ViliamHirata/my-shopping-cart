import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout';

import appearance from "@/styles/appearance.module.css"
import frame from "@/styles/frame.module.css"


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>My Ecommerce</title>
      </Head>
      <main className={frame.main}>
        
        <h1>test</h1>
        <p>paragraph</p>
      </main>
    </Layout>
  )
}
