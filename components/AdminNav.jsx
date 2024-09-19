'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function AdminNav() {
    const pathname = usePathname()
  return (
    <div>
        <div className='flex  bg-slate-800 justify-center text-white '>
            <Link className={pathname === '/admin' ? 'py-4 px-4 bg-slate-100 text-black': 'py-4 px-4 '} href={'/admin'}>Dashboard</Link>
            <Link className={pathname === '/admin/products' ? 'py-4 px-4 bg-slate-100 text-black': 'py-4 px-4 '}  href={'/admin/products'}>Products</Link>
            <Link className={pathname === '/admin/users' ? 'py-4 px-4 bg-slate-100 text-black': 'py-4 px-4 '}  href={'/admin/users'}>Customers</Link>
            <Link className={pathname === '/admin/orders' ? 'py-4 px-4 bg-slate-100 text-black': 'py-4 px-4 '}  href={'/admin/orders'}>Sales</Link>
        </div>
    </div>
  )
}

export default AdminNav