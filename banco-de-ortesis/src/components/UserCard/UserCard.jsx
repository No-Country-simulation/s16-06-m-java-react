import React from 'react'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import { MdOutlineCheckCircle, MdOutlineLocationOn } from 'react-icons/md'
import UserTag from '../UserTag'

export default function UserCard() {
    
    return (
        <div className='flex w-full flex-col gap-5 border-t-2 py-5 '>
            <div className='flex w-full items-center max-h-20 justify-between'>
                <UserTag userName={'Gonzalo'} userLastName={'Saavedra'} />
                <div className='flex flex-col h-full'>
                    <span className='text-base font-semibold'>Gonzalo Saavedra</span>
                    <div className='flex text-sm'>
                        <MdOutlineLocationOn className='w-5 h-5' />
                        <span>Ubicación</span>
                    </div>
                    <span className='text-sm'>Obra social</span>
                </div>
                <div className='flex flex-col h-full'>
                    <IoMdCloseCircleOutline className='w-7 h-7 hover:cursor-pointer' />
                    <MdOutlineCheckCircle className='w-7 h-7 hover:cursor-pointer' />
                </div>
            </div>
        </div>
    )
}
