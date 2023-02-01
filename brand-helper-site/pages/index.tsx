import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import BrandHelper from '@/components/brandHelper'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Brand Helper Site | Marketing with helpf rom AI</title>
        <meta name="description" content="Generated brand pitches for you product" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <BrandHelper />

    </>
  )
}
