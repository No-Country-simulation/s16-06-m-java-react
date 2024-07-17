import React from 'react'
import { MdOutlineStar } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";

export default function ProductCard() {
  return (
    <div className='flex w-full gap-5 bg-stone-300 rounded-xl'>
      <img src="/img/product.png" alt="product" />
      <div className='flex flex-col items-center justify-center text-start gap-2 p-4'>
        <h3 className='self-start text-lg'>Nombre del Producto</h3>
        <p className='text-sm w-full'>Breve descripcion del producto listado...</p>
        <div className='flex w-full justify-between items-center text-sm'>
          <span>Usuario 5 <MdOutlineStar className='inline w-5 h-5' /></span>
          <IoMdHeartEmpty className='w-5 h-5' />
        </div>
      </div>
    </div>
  )
}
