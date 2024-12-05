import { ProductType } from '@/types/productType'
import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card"
import Image from 'next/image'

const FlashSales = async() => {
    const data = await fetch("https://dummyjson.com/products")
    const products = await data.json()
    const productsFlash = products.products.filter(
      (product: ProductType) => product.id <=4
    )
  return (
    <div className='min-h-[calc(100vh-4rem)] flex flex-col items-center justify-start p-4 '>
        <h1 className='text-2xl font-bold mb-4'>Flash Sales</h1>
        <div className='w-full grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 '>
        { productsFlash.map((product: ProductType) => (
            <Card key={product.id} className='relative rounded-lg shadow-md p-4 flex flex-col items-center'>
                <CardHeader>
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={200}
                height={200}
              />
              <div className='absolute top-2 right-2 bg-primary rounded-full p-2'>
              <p className='text-lg '>{product.discountPercentage}%</p>
              </div>
              </CardHeader>
              <CardContent>
              <h2 className='text-lg font-semibold'>{product.title}</h2>
              <div className='flex items-center gap-4'>
              <p className='text-xl text-primary line-through '> $ {product.price}</p>
              <p className='text-xl  '> $ {(product.price-(product.price*product.discountPercentage/100)).toFixed(2)}</p>

              </div>
              </CardContent>
            </Card>
          ))
         }
        </div>
    </div>
  )
}

export default FlashSales