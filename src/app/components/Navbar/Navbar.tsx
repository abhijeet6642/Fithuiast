"use client"
import React from 'react'
import logo from '@/app/assets/ss2-removebg-preview.png'
import { IoIosBody } from 'react-icons/io'
import './Navbar.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <Image src={logo} alt='Logo'/>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/profile"><IoIosBody/></Link>
      <button>Sign Out</button>

    </nav>
  )
}

export default Navbar