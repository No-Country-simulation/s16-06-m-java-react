import React from 'react'
import UserDetailCard from '../components/UserCard/UserDetailCard'
import Button2 from '../components/Buttons/Button2'
import Button3 from '../components/Buttons/Button3'
import BackButton from '../components/Buttons/BackButton'

export default function ConfirmRequest() {

    return (
        <section className='flex flex-col w-full items-center gap-5 p-4 mb-40 text-blueSecond'>
            <div className='self-start'>
                <BackButton direction={'/home'} />
            </div>
            <h1 className="text-2xl self-start font-bold">Confirmar Solicitud</h1>
            <h2 className='text-xl self-start'>Usuario Confirmado</h2>
            <UserDetailCard />
            <h3>¿Pudiste entregar tu artículo?</h3>
            <div className='flex items-center justify-center w-full gap-4 px-3'>
                <Button3 name={'No'} />
                <Button2 name={'Si'} />
            </div>
        </section>
    )
}
