'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import Link from 'next/link';
import { HiMenuAlt1, HiOutlineX } from "react-icons/hi";

function Header() {
  const [toggle, setToggle] = useState(false)
  const menuList = [
    {
      id: 1,
      name: 'About',
      link:"#AboutMe"
    },
    {
      id: 2,
      name: 'Skills',
      link:"#skills"
    },
    {
      id: 3,
      name: 'Portfolio',
      link:"https://aniketsutrawe.vercel.app/"
    },
  ]
  return (
    <div className='flex p-5 items-center justify-between'>
      <Image src='/Images/logo.png'
        width={140} height={5} />
      <ul className=' ml-5 hidden md:flex lg:flex'>
        {menuList.map((item) => (
          <a className='hover:bg-blue-600
              px-3 py-1 pb-2 rounded-full mr-2
              hover:text-white cursor-pointer
             ' href={item.link}>{item.name}</a>
        ))}
      </ul>
      <div className='md:hidden lg:hidden'>
        {!toggle ? <HiMenuAlt1 className='cursor-pointer text-[20px]'
          onClick={() => setToggle(!toggle)} />
          : <HiOutlineX className='cursor-pointer text-[20px]' onClick={() => setToggle(!toggle)} />}
        {toggle ? <ul className='flex absolute bg-slate-200 p-2 rounded-md items-center ml-[-80px] flex-col md:hidden lg:hidden gap-2'>
          {menuList.map((item) => (
            <Link href={item.link} className='hover:bg-blue-600 px-3 pb-1 rounded-full mr-2 hover:text-white cursor-pointer'>
              {item.name}
            </Link>
          ))}
        </ul> : null}
      </div>


    </div>
  )
}

export default Header