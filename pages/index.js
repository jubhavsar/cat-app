import Image from "next/image"
import cat1 from "../public/images/cat1.gif"
import cat2 from "../public/images/cat2.gif"
import cat3 from "../public/images/cat3.gif"

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen'>
      <h1 className='text-3xl'>The Cat App</h1>
    </div>
  )
}