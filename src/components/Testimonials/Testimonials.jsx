import React from 'react'

const Testimonials = () => {
  return (
    <div className='h-screen w-full bg-slate-600'>
        <div className='flex-col border-2 flex text-center p-3'>
            <h1 className='font-bold text-4xl text-white bg-black rounded-lg p-2 bg-opacity-30'>Nuestros Clientes </h1>

            <div className='border-2 rounded-lg mt-4'>
                <h2 className='font-light text-2xl'>John Doe</h2>
                <span className='text-sm font-semibold'>Cliente de Aguaray</span>
                <p className='text-2xl font-bold'>" Realmente un hotel muy hermoso. Gran lujo quedarse aqui " </p>
            </div>
            <div className='border-2 rounded-lg mt-4'>
                <h2 className='font-light text-2xl'>John Doe</h2>
                <span className='text-sm font-semibold'>Cliente de Aguaray</span>
                <p className='text-2xl font-bold'>" Realmente un hotel muy hermoso. Gran lujo quedarse aqui " </p>
            </div>
            <div className='border-2 rounded-lg mt-4'>
                <h2 className='font-light text-2xl'>John Doe</h2>
                <span className='text-sm font-semibold'>Cliente de Aguaray</span>
                <p className='text-2xl font-bold'>" Realmente un hotel muy hermoso. Gran lujo quedarse aqui " </p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials