import React from 'react'

export default function ProductCard() {
  return (
    <div className='flex w-full gap-5 bg-silver rounded-xl'>
      <img src="/img/product.png" alt="product" />
      <div className='flex flex-col items-center justify-center text-start gap-2 p-2'>
        <h3 className='text-lg'>Nombre del Producto</h3>
        <p className='text-sm w-full'>Breve descripcion del producto listado...</p>
        <div className='flex w-full justify-between text-sm'>
          <span>Usuario 5*</span>
          <span>favicon</span>
        </div>
      </div>
    </div>
  )
}
