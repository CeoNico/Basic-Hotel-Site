import React from 'react'

const Navbar = () => {
  return (
    <div className='h-20 flex'>
        <div className=' max-w-fit flex h-full items-center'>
            <h1 className='font-bold text-lg text-white pl-2 hover:text-blue-500 cursor-pointer'>Backend Excellence</h1>
        </div>
        <div className='ml-auto w-56 pr-4'>
            <ul className='flex items-center h-full justify-evenly'>
                <li className='font-light text-white text-lg hover:text-blue-400 cursor-pointer'>Home</li>
                <li className='font-light text-white text-lg hover:text-blue-400 cursor-pointer'>Contact</li>
                <li className='font-light text-white text-lg hover:text-blue-400 cursor-pointer'>About</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar