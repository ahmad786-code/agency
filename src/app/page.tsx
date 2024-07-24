
import { AccordionDemo } from "@/components/AccordionDemo";
import Footer from "@/components/Footer";
import { SvgDisplay } from "@/components/SvgDisplay";

import { LampDemo } from "@/components/ui/lamp";

 
import Image from "next/image";

export default function Home() {
  return (
    <>

      <header>
        <nav className="flex justify-between  pl-12  pr-12">
          <img src="/logo.png" alt="Logo" className="w-16 object-contain h-auto" />
          <button className="bg-[#ffe5ec] py-1 px-8 text-[#fb6f92] rounded-2xl mt-12 mb-16 cursor-pointer" >Social</button>
        </nav>

        <h1
          
          className="mt-8 bg-gradient-to-br from-white  to-white  py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          PixieMGMT
        </h1>
        <LampDemo />
        
      </header>

      <main>
       
        <section className="py-24">
          <div className="flex items-center justify-center">
            <AccordionDemo />
          </div>
         
        </section>
        

        <section className="py-24">

          <form className="text-center">
            <div className="input-group">
              <input type="text" placeholder="Name *" />
              <input type="text" placeholder="Email *" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Phone" />
              <input type="text" placeholder="OnlyFans" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Instagram" />
              <input type="text" placeholder="TikTok" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Twitter" />
              <input type="text" placeholder="Message" />
            </div>
            <button className="bg-[#ffe5ec] py-1 px-8 text-[#fb6f92] rounded-2xl mt-12 mb-16 cursor-pointer" >Send</button>
          </form>



        </section>
      </main>

      <Footer />
     
    </>

  );
}
