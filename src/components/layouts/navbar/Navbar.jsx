import React from 'react'

const Navbar = () => {
  return (
    <section className='absolute top-0 w-full z-[1] py-4'>
        <div className='w-11/12 m-auto flex justify-between items-center '>
            <a href="#" className='text-2xl font-bold text-white'>Book<span className='text-[#fb995d]'>World</span></a>

            <nav className=''>
                <a href="#" className='text-white text-xl pl-5 transition duration-150 ease-in hover:text-[#fb995d]'>Home</a>
                <a href="#" className='text-white text-xl pl-5 transition duration-150 ease-in hover:text-[#fb995d]'>Books</a> 
            </nav>
        </div>
    </section>
  )
}

export default Navbar