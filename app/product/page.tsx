"use client"
import Counter from "@/components/Counter"
import { Button } from "@/components/ui/button"
import { ProductType } from "@/types/productType"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useState, use } from "react"
import { useCartStore } from "@/store/cartStore"
import type { Item } from "@/store/cartStore"

const Product = ({ searchParams }: { searchParams: Promise<ProductType> }) => {
  const { addItemToCart, items } = useCartStore()
  const router = useRouter()

  const params = use(searchParams)
  const {
    id,
    title,
    price,
    discountPercentage,
    description,
    category,
    brand,
    rating,
    reviews,
    thumbnail,
  } = params

  const jsonString = decodeURIComponent(reviews.toString())
  const array = JSON.parse(jsonString)

  const [quantityItems, setQuantityItems] = useState(1)

  const increment = () => {
    const actualQuantity = Number(quantityItems) + 1
    setQuantityItems(actualQuantity)
  }

  const decrement = () => {
    const actualQuantity = +quantityItems > 1 ? Number(quantityItems) - 1 : 1
    setQuantityItems(actualQuantity)
  }
  const handleCart = (item: Item) => {
    if (items.some((i) => i.id === item.id)) return
    const newItem = { ...item }
    addItemToCart(newItem)
    router.push("/categories?categories=all")
    setQuantityItems(1)
  }

  return (
    <div className='min-h-[calc(100vh-4rem)] grid grid-cols-2 max-lg:grid-cols-1 items-center justify-start p-8 gap-2 '>
      <div className='flex flex-col items-center justify-center'>
        <Image src={thumbnail} alt={title} width={400} height={400} />
        <p className='text-sm text-gray-500 mt-2'>Product ID: {id}</p>
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p className='text-lg'>
          <span className='text-gray-500 mr-2'>Description:</span>
          <br />
          {description}
        </p>
        <p className='text-lg'>
          <span className='text-gray-500 mr-2'>Category:</span>
          {category}
        </p>
        <p className='text-lg'>
          <span className='text-gray-500 mr-2'>Brand:</span>
          {brand}
        </p>
        <p className='text-lg'>
          <span className='text-gray-500 mr-2'>Rating:</span>
          {rating}
        </p>
        <p className='text-lg flex items-center'>
          <span className='text-gray-500 mr-2'>Price reduction:</span>{" "}
          {discountPercentage}%
        </p>
        <div className='flex items-center gap-4'>
          <p className='text-xl text-primary line-through '> $ {price}</p>
          <p className='text-xl  '>
            {" "}
            $ {(price - (price * discountPercentage) / 100).toFixed(2)}
          </p>
        </div>
        <Counter
          quantityItems={quantityItems}
          increment={increment}
          decrement={decrement}
        />
        {array && Array.isArray(array) && array.length > 0 ? (
          <div className=' flex flex-col gap-2 '>
            <h2 className='text-lg font-bold'>Reviews:</h2>
            <div className='h-[120px] flex flex-col gap-1 overflow-y-auto scrollbar'>
              {array.map(
                (
                  review: {
                    reviewerName: string
                    reviewerEmail: string
                    comment: string
                    rating: number
                    date: Date
                  },
                  index: number
                ) => (
                  <div
                    key={index}
                    className='flex flex-col gap-1 border-b border-primary'
                  >
                    <p className=' flex items-center'>
                      <span className='text-gray-500 mr-2'>Reviewer name:</span>{" "}
                      {review.reviewerName}
                    </p>
                    <p className=' flex items-center'>
                      <span className='text-gray-500 mr-2'>
                        Reviewer email:
                      </span>{" "}
                      {review.reviewerEmail}
                    </p>
                    <p className=' flex items-center'>
                      <span className='text-gray-500 mr-2'>Comment:</span>{" "}
                      {review.comment}
                    </p>
                    <p className=' flex items-center'>
                      <span className='text-gray-500 mr-2'>Rating:</span>{" "}
                      {review.rating}
                    </p>
                    <p className=' flex items-center'>
                      <span className='text-gray-500 mr-2'>Date:</span>{" "}
                      {review.date.toLocaleString().split("T")[0]}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        ) : (
          <p className='text-lg'>No reviews yet</p>
        )}
        <Button
          onClick={() =>
            handleCart({
              id: Number(id) || 0,
              title: title || "",
              price: price - (price * discountPercentage) / 100 || 0,
              quantity: quantityItems || 1,
              image: thumbnail || "",
            })
          }
          className='w-fit mt-4'
        >
          Add to Cart
        </Button>
      </div>
    </div>
  )
}

export default Product
