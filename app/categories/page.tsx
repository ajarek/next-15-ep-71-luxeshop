import Image from "next/image"
import Link from "next/link"
import React from "react"
import type { ProductType } from "@/types/productType"
import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card"

const Categories = async ({ searchParams,}: {searchParams: Promise<{ categories: string }>}) => {

  const { categories } = await searchParams
  const data = await fetch("https://dummyjson.com/products")
  const products = await data.json()
  const productsByCategory = products.products.filter(
    (product: ProductType) => product.category === categories || categories === "all"

  )
  return (
    <div className='min-h-[calc(100vh-4rem)] flex flex-col items-center justify-start p-4 '>
      <h1 className='text-2xl font-bold mb-4'>
        Categories: {categories}
      </h1>
      <div className='w-full grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 '>
        {productsByCategory.length > 0 ? (
          productsByCategory.map((product: ProductType) => (
            <Card key={product.id} className=' rounded-lg shadow-md p-4 flex flex-col items-center'>
                <CardHeader>
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={200}
                height={200}
              />
              </CardHeader>
              <CardContent>
              <h2 className='text-lg font-semibold'>{product.title}</h2>
              <p className='text-xl'> $ {product.price}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className='col-span-4 mt-8 flex flex-col items-center'>
            <h1 className=' text-center text-2xl text-red-500 font-bold '>
              No products found in this category!
            </h1>
        <Link href='/' className=' text-center text-primary mt-8 border border-primary rounded-lg p-2 hover:bg-primary hover:text-white'>
              Go back to home
            </Link> 
            
          </div>
        )}
      </div>
    </div>
  )
}

export default Categories
