import Link from 'next/link';
import React from 'react'
import { siteName } from '../../config';

const Logo = () => {
  return (
    <Link href="/" className='font-bold'>
      {siteName}
    </Link>
  )
}

export default Logo;
