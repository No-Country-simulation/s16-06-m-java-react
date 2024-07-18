import React from 'react'
import { MdOutlineStar } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";

export default function ProductCard({product}) {
  if(!product) return null;

  const {name, description, category, img} = product;
  return (
    <div className='flex items-center w-full gap-2 bg-stone-300 rounded-xl h-32'>
      <img className='h-full w-40 object-cover rounded-xl' src={img!= '' ? img : '/img/product.png'} alt={category} />
      <div className='flex-grow flex flex-col text-black items-center justify-center text-start gap-2 p-2 text-wrap'>
        <h3 className='self-start text-lg'>{name}</h3>
        <p className='text-sm w-full'>{description}</p>
        <div className='flex w-full justify-between items-center text-sm'>
          <span>Usuario 5 <MdOutlineStar className='inline w-5 h-5' /></span>
          <IoMdHeartEmpty className='w-5 h-5' />
        </div>
      </div>
    </div>
  )
}
