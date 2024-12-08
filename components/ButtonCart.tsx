"use client"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { useCartStore } from "@/store/cartStore"
import { buttonVariants } from "@/components/ui/button"
const ButtonCart = () => {
  const { items } = useCartStore()

  return (
    <Link
      href='/cart'
      className={
        `relative flex items-center justify-center text-red-500` +
        buttonVariants({ variant: "default", size: "icon" })
      }
      aria-label='Cart'
    >
      <ShoppingBag size={24} className='' />
      <span className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-xs bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center'>
        {items.reduce((acc, item) => acc + item.quantity, 0)}
      </span>
    </Link>
  )
}

export default ButtonCart
