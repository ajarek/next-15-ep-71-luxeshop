import { ModeToggle } from "@/components/ModeToggle"
import { Button } from "@/components/ui/button"
import { KeyRound, ShoppingBag } from "lucide-react"
import Image from "next/image"

const Navbar = () => {
  return (
    <div className='h-16 flex justify-between items-center border-b-2 px-4'>
      <div className='flex items-center gap-4'>
        <Image
          src='/Luxe_Logo.png'
          alt='Vercel Logo'
          className='dark:invert'
          width={60}

          height={60}
          priority
        />
        <h1 className="text-2xl  italic text-primary ">Luxury Shop</h1>
      </div>
      <div className="flex items-center gap-4">
        <Button size={'icon'} className="relative"><ShoppingBag/><span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-xs bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center">4</span></Button>
        <Button size={'icon'}><KeyRound /></Button>
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar
