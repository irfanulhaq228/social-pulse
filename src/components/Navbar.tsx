"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const router = useRouter();
  return (
    <div className='px-3 py-2 rounded-xl flex items-center justify-between' style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
        <div>
            <p className='text-[25px] italic font-bold text-white'>Social Pulse</p>
        </div>
        <div>
            <a className='px-5 py-2 rounded font-bold text-white cursor-pointer' style={{backgroundColor: "rgba(255, 255, 255, 0.3)"}} onClick={() => router.push("/sign-in")}>Login</a>
        </div>
    </div>
  )
}

export default Navbar