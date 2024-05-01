"use client"
import Image from "next/image";
import styles from "./page.module.css";
import HomeBanneer1 from '@/app/components/HomeBanner1/HomeBanner1'
import HomeBanner2 from '@/app/components/HomeBanner2/HomeBanner2'
import SignIn from '@/app/components/SignIn/App'


export default function Home() {
  return (
    <main className={styles.main}>
      

      <HomeBanneer1 />
      <HomeBanner2 />
      
      
      
    </main>
  )
}
