'use client'

import Image from "next/image"
import Link from "next/link"

 

const Footer = () => {
  return (
    <footer>
        
            <nav className="flex flex-col justify-center items-center pr-12 pb-12">
                <h3 className="text-white text-2xl font-medium mb-5">Follow On</h3>
                <ul className="flex flex-col gap-2">
                    <li className="text-[#ffe5ec] text-xl "  >
                        <Link href="#">Instagram</Link>
                    </li>
                    <li className="text-[#ffe5ec] text-xl" >
                        <Link href="#">Twitter</Link>
                    </li>
                    <li className="text-[#ffe5ec] text-xl" >
                        <Link href="#">Email</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex justify-center gap-12 items-center  py-4 pl-24">
             <img src="/logo.png" alt="Logo" className="  w-16 h-auto"  />
             <p className="text-white text-sm font-medium mt-16">Copyright © 2024 Pixie MGMT</p>
            </div>
       
    </footer>
  )
}

export default Footer