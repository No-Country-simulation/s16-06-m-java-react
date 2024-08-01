import React from 'react'
import UserTag from '../UserTag';
import { MdOutlineLocationOn } from 'react-icons/md';
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";


export default function UserDetailCard({user}) {
    if(!user) return null;
    const {name, lastName, email, phoneNumber, province, socialWorkNumber, disabilityCertificateNumber} = user;
  return (
    <div className='flex w-full flex-col gap-5 border-t-2 py-5 '>
    <div className='flex w-full gap-6'>
        <UserTag userName={'Pepe'} userLastName={'Juan'} />
        <div className='flex flex-col h-full gap-2'>
            <span className='text-lg font-semibold'>{name} {lastName}</span>
            <div className='flex items-center gap-1 text-base'>
                <MdOutlineLocationOn className='w-5 h-5' />
                <span>{province}</span>
            </div>
            <div className='flex items-center gap-1 text-base'>
                <MdOutlineMailOutline />
                <span>{email}</span>
            </div>
            <div className='flex items-center gap-1 text-base'>
                <MdOutlineLocalPhone />
                <span>{phoneNumber}</span>
            </div>
            {socialWorkNumber ?
                <span className='text-sm'>Cuenta con Obra social</span>
                :
                <></>
            }
            {disabilityCertificateNumber ?
                <span className='text-sm'>Cuenta con Certificado Unico de Discapacidad</span>
                :
                <></>
            }
        </div>
    </div>
</div>
  )
}
