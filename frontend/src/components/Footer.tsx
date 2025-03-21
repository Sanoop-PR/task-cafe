import Logo from '../assets/Logo.png'
import { GiRotaryPhone } from "react-icons/gi";
import { MdOutlineMail } from "react-icons/md";
import { TbBrandFacebook } from "react-icons/tb";
import { LuTwitter } from "react-icons/lu";
import { FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

function Footer() {
  return (
    <>
      <main className='bg-black px-10 pb-10 pt-20 grid grid-cols-1 sm:grid-cols-3 gap-4'>
        <section className='border border-white rounded-xl flex justify-center items-center flex-col p-6'>
          <h1 className='font-bold text-blue-500 mb-2'>CONNECT WITH US</h1>
          <p className=' text-gray-400 flex gap-4 items-center'><GiRotaryPhone fill='#926c15' /> +91 9567843340</p>
          <p className=' text-gray-400 flex gap-4 items-center'><MdOutlineMail fill='#926c15' /> info@deepnetsoft.com</p>
        </section>
        <section className='border border-white rounded-xl flex justify-center items-center flex-col p-6 relative max-sm:order-first max-sm:pt-10'>
          <img src={Logo} alt="logo" className='absolute h-16 -top-1/4 left-1/2 -translate-x-1/2 z-50 bg-black' />
          <p className=' text-3xl text-white'><span className=' text-blue-500'>DEEP</span> NET <span className='text-gray-400'>SOFT</span></p>
          <div className='text-white flex gap-2 text-xs'>
            <TbBrandFacebook />
            <LuTwitter />
            <FiYoutube />
            <FaInstagram />
          </div>
        </section>
        <section className='border border-white rounded-xl flex justify-center items-center flex-col p-6'>
          <h2 className='font-bold text-blue-500 mb-2'>FIND US</h2>
          <div className='flex gap-5 w-2/3'>
            <MdOutlineLocationOn fill='#926c15' size={25} />
            <p className='text-gray-300 text-sm'>
              First floor, Geo infopark, Infopark EXPY, Kakkanad
            </p>
          </div>
        </section>
      </main>
      <main className='py-3 px-10 bg-[#161616] text-gray-300 flex sm:flex-row flex-col justify-center sm:justify-between text-sm'>
        <p>© 2024 Deepnetsoft Solutions. All rights reserved.</p>
        <p>Terms & Conditions</p>
      </main>
    </>
  )
}

export default Footer