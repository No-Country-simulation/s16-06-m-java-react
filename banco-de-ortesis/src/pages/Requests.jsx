import React from 'react'
import { MdOutlineCheckCircle, MdOutlineLocationOn } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import UserCard from '../components/UserCard/UserCard';

export default function Requests() {
    return (
        <section className='flex flex-col w-full items-center gap-5 p-4 mb-40 text-blueSecond'>
            <h1 className="text-2xl self-start font-bold">Solicitudes</h1>

            <h2 className='text-xl self-start'>Usuarios Interesados</h2>
            {/* <div className='flex w-full flex-col gap-5 '>
                <div className='flex w-full items-center max-h-20 justify-between'>
                    <div>tag</div>
                    <div className='flex flex-col h-full'>
                        <span className='text-base font-semibold'>Gonzalo Saavedra</span>
                        <div className='flex text-sm'>
                            <MdOutlineLocationOn className='w-5 h-5' />
                            <span>Ubicación</span>
                        </div>
                        <span className='text-sm'>Obra social</span>
                    </div>
                    <div className='flex flex-col '>
                        <IoMdCloseCircleOutline className='w-7 h-7 ' />
                        <MdOutlineCheckCircle className='w-7 h-7' />
                    </div>
                </div>
            </div> */}
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />



        </section>
    )
}
