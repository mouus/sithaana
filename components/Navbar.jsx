'use client'
import Link from 'next/link'
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';


 function Navbar() {
  let cart = 1
  const {isAuthenticated} =  useKindeBrowserClient()
  const auth = isAuthenticated

  return (
    <div className='sticky top-0 z-10 shadow-xl shadow-gray-900/20'>
      <div className='flex p-4 bg-blue-600 items-center justify-between'>
        <div className='ml-5'>
          <Link href={"#"} className='text-white font-extrabold text-3xl'>SITHAANA HARDWARE </Link>
        </div>
        <div className='bg-red-500 py-2 px-3 rounded-full'>
          <Link href={'/deals'}>
            <h2 className='text-white font-bold'>Best Deals</h2>
          </Link>
        </div>
        <div className='w-[400px] flex  relative items-center'>
          <input className='w-full rounded-full py-3 px-2 placeholder:text-blue-900 text-sm' type="text" placeholder='Search Everything At Sithaana Hardware Store' />
          <FaSearch className=' absolute right-4 text-blue-400 pointer-events-none' />
        </div>
        <div className='flex text-white items-center gap-2 mr-8'>
          {auth ?
            (<LogoutLink className='font-semibold border-b-2  p-1 text-xs'>Log out</LogoutLink>)
            : (<LoginLink className='flex items-center gap-2'>
              <IoPersonSharp />
              <div>
                <p>Sign In</p>
                <p className='font-bold'>Account</p>
              </div>
            </LoginLink>)}
          <div className='ml-10'>
            <Link href={'/checkout'}>
              <div className='flex relative'>
                <RiShoppingCartLine className='text-4xl' />
                {
                  (cart > 0 ? <span className='absolute top-0 right-0 text-xs px-[3px] bg-red-500 rounded-full'>1</span> : <></>)
                }

              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='bg-blue-100  flex py-2 items-center justify-around text-blue-950 text-sm'>
        <Link href={'#'}>Kitchen</Link>
        <Link href={'#'}>Bathroom</Link>
        <Link href={'#'}>Hardware</Link>
        <Link href={'#'}>Fishing</Link>
        <Link href={'#'}>Home Improvement</Link>
        <Link href={'#'}>Electrical</Link>
        <Link href={'#'}>Lighting</Link>
        <Link href={'#'}>Power Tools</Link>
        <Link href={'#'}>Painting & Coatings</Link>
        <Link href={'#'}>Professional Cleaning</Link>
        <Link href={'#'}>Tiles</Link>
      </div>
    </div>
  )
}

export default Navbar