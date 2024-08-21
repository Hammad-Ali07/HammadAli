import Link from 'next/link'
import React from 'react'
import { SiFacebook, SiFiverr, SiGithub, SiInstagram, SiLinkedin, SiUpwork, SiYoutube } from 'react-icons/si'

const Footer = () => {
  return (
    <div>
          <section className="relative text-gray-600 body-font custom-background-animation bg-fixed bg-cover bg-center bg-no-repeat">

    <footer>
      <div className="container px-5 py-8 mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center">
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
            Hammad Portfolio
          </span>
          <p className="text-sm sm:text-base md:text-xl text-blue-900 mt-2 md:mt-0 md:ml-4 md:border-l-2 border-gray-500 md:pl-4">
            © 2024 Hammad Portfolio
          </p>
        </div>
        <div className="flex mt-6 md:mt-0 space-x-6 md:space-x-8 py-4">
          <Link href="https://www.linkedin.com/in/hammad-ali-92165427b/" target='_blank'>
            <SiLinkedin className="text-3xl sm:text-5xl md:text-5xl text-[#0077B5] hover:scale-110 hover:opacity-80 transition-transform duration-300 ease-in-out" />
          </Link>
          <Link href="https://github.com/Hammad-Ali07" target='_blank'>
            <SiGithub className="text-3xl sm:text-5xl md:text-5xl text-[#2b3137] hover:scale-110 hover:opacity-80 transition-transform duration-300 ease-in-out" />
          </Link>
          <Link href="https://www.facebook.com/hammadali0789?mibextid=kFxxJD" target='_blank'>
            <SiFacebook className="text-3xl sm:text-5xl md:text-5xl text-[#1877F2] hover:scale-110 hover:opacity-80 transition-transform duration-300 ease-in-out" />
          </Link>
          <Link href="https://www.instagram.com/codingwithhammad?igsh=dWd5dnB6MXB3aGps " target='_blank'>
            <SiInstagram className="text-3xl sm:text-5xl md:text-5xl text-[#ee2a7b] hover:scale-110 hover:opacity-80 transition-transform duration-300 ease-in-out" />
          </Link>
          <Link href="https://www.upwork.com/freelancers/~01bfc6dfa59549df7c?mp_source=share" target='_blank'>
            <SiUpwork className="text-3xl sm:text-5xl md:text-5xl text-[#4dad45] hover:scale-110 hover:opacity-80 transition-transform duration-300 ease-in-out" />
          </Link>
          <Link href="https://www.youtube.com/@CodingwithHammad077" target='_blank'>
            <SiYoutube className="text-3xl sm:text-5xl md:text-5xl text-[#fb4141] hover:scale-110 hover:opacity-80 transition-transform duration-300 ease-in-out" />
          </Link>
          <Link href="https://www.fiverr.com/hammadrajpoo286?up_rollout=true" target='_blank'>
            <SiFiverr className="text-3xl sm:text-5xl md:text-6xl text-[#212221] hover:scale-110 hover:opacity-80 transition-transform duration-300 ease-in-out" />
          </Link>
        </div>
      </div>
    </footer>
    </section>
    </div>
  )
}

export default Footer
