import React from 'react'

const Services = () => {
  return (
    <div className='h-screen bg-slate-500 w-screen container'>
        <div className='border-2 h-96 grid grid-rows-3'>
            <div className='border-2 border-black'>
                <div className='border-2 border-red-700 flex items-center h-full'>{/*Add a background image here */}
                    <h3 className='text-3xl'>Ver nuestro bar</h3>
                    {/*Place an Arrow Icon Here */}
                </div>
            </div>
            <div className='border-2 border-black'>
            <div className='border-2 border-red-700 flex items-center h-full'>{/*Add a background image here */}
                    <h3 className='text-3xl'>Ver nuestra pileta</h3>
                    {/*Place an Arrow Icon Here */}
                </div>
            </div>
            <div className='border-2 border-black'>
            <div className='border-2 border-red-700 flex items-center h-full'> {/*Add a background image here */}
                    <h3 className='text-3xl'>Ver nuestra cocina</h3>
                    {/*Place an Arrow Icon Here */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services