import React from 'react'

export default function PopUpAlert({children}) {
  return (
    <div className='flex flex-col items-center justify-center w-80 h-60 rounded-b-3xl border drop-shadow-lg'>
        {children}
    </div>
  )
}
