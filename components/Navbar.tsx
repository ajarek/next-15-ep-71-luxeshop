import { ModeToggle } from "@/components/ModeToggle"
import Image from "next/image"
import Link from "next/link"
import ButtonCart from "./ButtonCart"
import Logout from "./Logout"
import { auth } from '@/app/api/auth/auth'

const Navbar =async () => {
  const session = await auth()
  // const { user } = (session as any) || {}
  return (
    <div className='h-16 flex justify-between items-center border-b-2 px-8 max-sm:px-2'>
      <Link href='/' className='flex items-center gap-4'>
        <Image
          src='/logo.webp'
          alt='Vercel Logo'
          className='dark:invert rounded-full'
          width={40}

          height={40}
          priority
        />
        <h1 className="text-2xl  italic text-primary ">Luxury Shop</h1>
      </Link>
      <div className="flex items-center gap-4">
       <ButtonCart/>
       <Logout session={session} />
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar
