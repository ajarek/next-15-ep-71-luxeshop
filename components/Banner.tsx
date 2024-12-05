import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <Link href='/categories?categories=all' className='relative rounded-lg'>
        <Image src="/banner.jpg" alt="banner" width={1200} height={454} />
    </Link>
  )
}

export default Banner