import React from 'react'

const SearchInputForm = () => {
  return (
    <div className='flex pl-2 bg-white rounded-lg mt-5 shadow-black-500/50'>
        <input type="text" className='flex-1 outline-none text-black text-base' placeholder='Search Books.....' />
        <button className='text-white bg-[#fb995d] py-1 px-2 rounded-r-md transition duration-150 ease-in hover:bg-[#fa7727]'>🔍 Search</button>
    </div>
  )
}

export default SearchInputForm