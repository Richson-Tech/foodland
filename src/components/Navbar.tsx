import React from 'react'
import Menu from './Menu'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='h-12 text-red-500 flex items-center justify-between'>
      {/* LOGO  */}
      <div>
        <Link href="/">FOODLAND</Link>
      </div>
      {/* mobile menu */}

      <div>
        <Menu/>
      </div>
    </div>
  )
}

export default Navbar