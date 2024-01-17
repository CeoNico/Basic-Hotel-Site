import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <main className='h-screen w-screen bg-hero bg-cover'>
        <div className='container h-fit grid grid-cols-1'>
            <div className=' text-center p-10'>
                <h1 className='text-white font-bold text-5xl'>Bienvenidos a tu hotel...</h1>
                <p className='text-white font-light text-lg mt-2'>El hotel votado 5 estrellas por google reviews!</p>
            </div>
            <div className='flex flex-col text-center items-center p-4 '>
                <label className='font-light text-white text-xl'>Reserva una fecha</label>
                <input placeholder='Busca una fecha' type='date' className='bg-transparent rounded-xl p-3 outline outline-2 hover:outline-4 outline-slate-200 mt-4'></input>
            </div>
            <div className='flex flex-col items-center text-center p-4'>
                <h2 className='font-semibold text-white text-sm'>Mira mas sobre nuestro establecimiento aqui!</h2>
                <button className='bg-black border-white text-sm text-white border-2 rounded-lg m-2 p-1 w-24'>Click me!</button>
            </div>
        </div>
        
    </main>
  )
}

export default Hero