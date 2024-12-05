import Image from "next/image"
import Link from "next/link"
import React from "react"
const nameCategories = [
  "accessories",
  "beauty",
  "electronic",
  "fashion",
  "groceries",
  "furniture",
  "health",
  "stationery",
]
const Categories = () => {
  return (
    <>
   
      <h1 className=" text-2xl font-bold mb-4">Categories</h1>
    <div className='grid grid-cols-8 max-lg:grid-cols-4 max-sm:grid-cols-2 gap-4'>
      {nameCategories.map((name) => (
        <Link href={`/categories?categories=${name}`} key={name} className='flex flex-col items-center gap-2 hover:text-primary'>
          <div className='flex flex-col items-center justify-center p-4 border-2 border-primary/50 rounded-full'>
            <Image src={`/${name}.png`} width={80} height={80} alt={name} />
          </div>
          <p className='text-center capitalize'>{name}</p>
        </Link>
      ))
      }
    </div>
    </>
  )
}

export default Categories
