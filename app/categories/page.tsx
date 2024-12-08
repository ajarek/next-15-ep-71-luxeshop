import Image from "next/image"
import Link from "next/link"
import React from "react"
import type { ProductType } from "@/types/productType"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { MoveDown } from "lucide-react"

const Categories = async ({
  searchParams,
}: {
  searchParams: Promise<{ categories: string }>
}) => {
  const { categories } = await searchParams
  const data = await fetch("https://dummyjson.com/products")
  const products = await data.json()
  const productsByCategory = products.products.filter(
    (product: ProductType) =>
      product.category === categories || categories === "all"
  )
  return (
    <div className='min-h-[calc(100vh-4rem)] flex flex-col items-center justify-start p-4 '>
      <h1 className='text-2xl font-bold mb-4'>Categories: {categories}</h1>
      <div className='w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 '>
        {productsByCategory.length > 0 ? (
          productsByCategory.map((product: ProductType) => (
            <Card
              key={product.id}
              className='relative rounded-lg shadow-md p-4 flex flex-col items-center'
            >
              <Link
                href={`/product?id=${product.id}&title=${
                  product.title
                }&discountPercentage=${product.discountPercentage}&price=${
                  product.price
                }&thumbnail=${product.thumbnail}&description=${
                  product.description
                }&category=${product.category}&brand=${product.brand}&rating=${
                  product.rating
                }&reviews=${encodeURIComponent(
                  JSON.stringify(product.reviews)
                )}`}
              >
                <CardHeader>
                  <Image
                    src={product.thumbnail}
                    alt={product.title.slice(0.10)}
                    width={200}
                    height={200}
                  />
                  <div className='absolute top-2 right-2 bg-primary rounded-full p-2'>
                    <p className='text-lg flex items-center'>
                      <MoveDown />
                      {product.discountPercentage}%
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <h2 className='text-lg font-semibold'>{product.title}</h2>
                  <div className='flex items-center gap-4'>
                    <p className='text-xl text-primary line-through '>
                      {" "}
                      $ {product.price}
                    </p>
                    <p className='text-xl  '>
                      {" "}
                      ${" "}
                      {(
                        product.price -
                        (product.price * product.discountPercentage) / 100
                      ).toFixed(2)}
                    </p>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))
        ) : (
          <div className='col-span-4 mt-8 flex flex-col items-center'>
            <h1 className=' text-center text-2xl text-red-500 font-bold '>
              No products found in this category!
            </h1>
            <Link
              href='/'
              className=' text-center text-primary mt-8 border border-primary rounded-lg p-2 hover:bg-primary hover:text-white'
            >
              Go back to home
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Categories
