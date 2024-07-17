import React from 'react'
import { Link } from 'react-router-dom'

import { SlHome } from "react-icons/sl";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineDns } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

export default function MobileNav() {
  return (
    <div className='fixed bottom-0 flex w-full text-base  bg-stone-300 justify-evenly items-center'>

      <Link to={'/'} className='flex text-black flex-col items-center justify-center'>
        <SlHome className='w-6 h-6' />
        Home
      </Link>
      <Link to={'/'} className='flex text-black flex-col items-center justify-center'>
        <IoMdHeartEmpty className='w-6 h-6' />
        Favoritos
      </Link>
      <div className='flex justify-center items-center -translate-y-8 w-16 h-16 rounded-full bg-stone-200'>
      <AiOutlinePlus className='h-7 w-7' />
      </div>
      <Link to={'/'} className='flex text-black flex-col items-center justify-center'>
        <MdOutlineDns className='w-6 h-6' />
        Publicados
      </Link>
      <Link to={'/profile'} className='flex text-black flex-col items-center justify-center'>
        <FaRegUser className='w-6 h-6' />
        Perfil
      </Link>


    </div>
  )
}
