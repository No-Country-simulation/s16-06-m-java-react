import React from 'react'
import { MdOutlineStar } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";

export default function ProductCard({product}) {
  if(!product) return null;

  const {name, description, category, img} = product;
  return (
    <div className='flex items-center w-full gap-2 bg-transparent border-solid border border-greenAccent rounded-xl h-32'>
      <img className='h-full w-40 object-cover rounded-xl border border-solid border-greenAccent' src={img!= '' ? img : '/img/product.png'} alt={category} />
      <div className='flex-grow flex flex-col text-blueSecond items-center justify-center text-start gap-2 p-1 text-wrap'>
        <h3 className='self-start text-lg font-semibold'>{name}</h3>
        <p className='text-sm w-full'>{description}</p>
        <div className='flex w-full justify-between items-center text-sm pr-2'>
          <span className='flex items-center gap-1'>Usuario 5 <MdOutlineStar className='inline w-5 h-5' /></span>
          <IoMdHeartEmpty className='w-5 h-5' />
        </div>
      </div>
    </div>
  )
}
