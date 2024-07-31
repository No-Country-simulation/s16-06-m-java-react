import React from 'react'
import UserTag from '../UserTag';
import { MdOutlineLocationOn } from 'react-icons/md';
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";


export default function UserDetailCard() {
    const socialWorkNumber = null;
    const disabilityCertificateNumber = null;
  return (
    <div className='flex w-full flex-col gap-5 border-t-2 py-5 '>
    <div className='flex w-full gap-6'>
        <UserTag userName={'Pepe'} userLastName={'Juan'} />
        <div className='flex flex-col h-full gap-2'>
            <span className='text-lg font-semibold'>Pepe Juan</span>
            <div className='flex text-base'>
                <MdOutlineLocationOn className='w-5 h-5' />
                <span>españa</span>
            </div>
            <div className='flex text-base'>
                <MdOutlineMailOutline />
                <span>pepejuan@gmail.com</span>
            </div>
            <div className='flex text-base'>
                <MdOutlineLocalPhone />
                <span>35155577991</span>
            </div>
            {!socialWorkNumber ?
                <span className='text-sm'>Cuenta con Obra social</span>
                :
                <></>
            }
            {!disabilityCertificateNumber ?
                <span className='text-sm'>Cuenta con Certificado Unico de Discapacidad</span>
                :
                <></>
            }
        </div>
    </div>
</div>
  )
}
