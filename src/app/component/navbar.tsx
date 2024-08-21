import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineCloudDownload } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='bg-relative text-gray-600 body-font custom-background-animation bg-fixed bg-cover bg-center bg-no-repeat z-50 sticky top-0'>
          <section className="relative text-gray-600 body-font custom-background-animation bg-fixed bg-cover bg-center bg-no-repeat">

        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col  items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className=" mt-4 ml-0 text-4xl text-blue-800">Hammad Portfolio</span>
    </a>
    <nav className="text-gray-950  mt-4 md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 hover:text-blue-600">Home</Link>
      <Link href="#About" className="mr-5 hover:text-blue-600">About</Link>
      <Link href="#skills" className="mr-5 hover:text-blue-600">Skills</Link>
      <Link href="#project" className="mr-5 hover:text-blue-600">Projects</Link>
      <Link href="#Contact" className="mr-5 hover:text-blue-600">contact</Link>

    </nav>
    <a href="/assests/cv/1.pdf">
    <button className="inline-flex items-center text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base mt-4">
        Download Cv 
        <AiOutlineCloudDownload className='text-xl ml-2'/>

    </button>
    </a>
  </div>
</header>
</section>
    </div>
  )
}

export default Navbar;