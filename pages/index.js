import Image from "next/image"
import cat1 from "../public/images/cat-1.gif"
import cat2 from "../public/images/cat-2.gif"
import cat3 from "../public/images/cat-3.gif"

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen'>
      <h1 className='text-3xl'>The Cat App</h1>
      <div className='relative w-32 h-32 m-4 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4'>
        <Image
          objectFit='cover'
          src={cat1}
          alt='Picture of Cat1'
          layout='fill'
          priority
        />
      </div> 
      <div className='relative w-32 h-32 m-4 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4'>
        <Image
          objectFit='cover'
          src={cat2}
          alt='Picture of Cat1'
          layout='fill'
          priority
        />
      </div> 
      <div className='relative w-32 h-32 m-4 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4'>
        <Image
          objectFit='cover'
          src={cat3}
          alt='Picture of Cat1'
          layout='fill'
          priority
        />
      </div>  
    </div>
  )
}