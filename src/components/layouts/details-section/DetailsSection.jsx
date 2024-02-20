import React from 'react'
import BookDetailImg from '../../../assets/books-images/sherlock-holmes.jpg'

const DetailsSection = () => {
  return (
    <section className='py-20'>
      <div className='w-11/12 m-auto'>
        <div className='flex flex-col justify-start md:flex-row items-center gap-8 lg:items-start'>
          <div className='w-2/4 md:w-full lg:w-4/5 xl:w-2/5 flex justify-center'>
            <img src={BookDetailImg} alt="book" className='h-4/5 md: xl:h-2/4 border bottom-1 border-slate-400'  />
          </div>
          <div className='flex flex-col gap-4'>
            <h2 className='text-4xl font-bold'>The Case-Book of Sherlock Holmes Book </h2>
            <p className='text-[#fb995d] font-semibold text-xl'>Arthur Conan Doyle</p>
            <p className='text-base'>The Case-Book of Sherlock Holmes is the final set of twelve (out of a total of fifty-six) Sherlock Holmes short stories by British writer Arthur Conan Doyle first published in the Strand Magazine between October 1921 and April 1927.</p>
            <p><strong>Language:</strong> English</p>
            <p><strong>Book Length:</strong> 300</p>
            <h3 className='text-xl font-bold text-[#ff904c] pt-4'>&#8377;129</h3>

            <a href="#" className='inline-block py-4 px-8 w-2/5 sm:w-2/4 md:w-2/5 lg:w-[30%] xl:w-1/5 rounded-lg text-white bg-slate-800 hover:bg-slate-700 transition duration-150 ease-in'>🛒 Add To Cart</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailsSection