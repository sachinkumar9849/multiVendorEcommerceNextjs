import Image from 'next/image'
import React from 'react'

const FreeDelivery = () => {
  return (
    <>

      <ul className='border border-[#ebebeb] px-5 py-7 rounded-sm mt-10'>
        <li className='flex items-center border-b border-[#ebebeb] pb-[20px]'>
          <Image width={33} height={33} src="/free.png" alt='img' />
          <div className="ml-3">
            <p className='text-[#222] text-[14px] leading-[20px] uppercase mb-0'>Free Delivery </p>
            <p className='text-[#999] leading-[20px]'>On Order Over Rs 49.86</p>

          </div>

        </li>
        <li className='flex items-center border-b border-[#ebebeb] py-[20px]'>
          <Image width={33} height={33} src="/pro.webp" alt='img' />
          <div className="ml-3">
            <p className='text-[#222] text-[14px] leading-[20px] uppercase mb-0'>order protecttion </p>
            <p className='text-[#999] leading-[20px]'>Secured Information</p>

          </div>

        </li>

        <li className='flex items-center border-b border-[#ebebeb] py-[20px]'>
          <Image width={33} height={33} src="/gift.png" alt='img' />
          <div className="ml-3">
            <p className='text-[#222] text-[14px] leading-[20px] uppercase mb-0'>promotion gift </p>
            <p className='text-[#999] leading-[20px]'>Special Offers!</p>

          </div>

        </li>

        <li className='flex items-center  pt-[20px]'>
          <Image width={33} height={33} src="/money.svg" alt='img' />
          <div className="ml-3">
            <p className='text-[#222] text-[14px] leading-[20px] uppercase mb-0'>money back </p>
            <p className='text-[#999] leading-[20px]'>Return over 30 Days</p>

          </div>

        </li>


      </ul>
    </>
  )
}

export default FreeDelivery