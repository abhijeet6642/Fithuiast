"use client"
import React from 'react'
import logo from '@/app/assets/ss2-removebg-preview.png'
import { IoIosBody } from 'react-icons/io'
import './Navbar.css'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <nav>
      <Image src={logo} alt='Logo'/>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/profile"><IoIosBody/></Link>
      return <button onClick={() => loginWithRedirect()}>Sign In</button>

    </nav>
  )
}

export default Navbar