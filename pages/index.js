import { Button } from '@chakra-ui/button'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import HomeCompIndex from '../comps/home/ui'
import Navbar from '../comps/Layout/navbar/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeCompIndex/>
        
      </main>


    </div>
  )
}