import React from 'react'

const TopHeader = () => {
    return (
        <div className=' py-[4px] border-b border-[#ffffff25]'>
            <div className="mx-auto max-w-7xl md:px-0 px-4">
               <div className="flex justify-between items-center">
                 <p className='text-[12px] text-white'> <b>Welcome to Emarket !</b> Wrap new offers / gift every single day on Weekends – New Coupon code: Happy2025 </p>
                <div className="">
                    <div className="">
                        <p className='bg-[#ff3b1f] font-medium py-[5px] text-white rounded-[3px] border border-[#b32b17] uppercase text-[12px] px-[15px]'>Become a seller</p>
                    </div>

                </div>
               </div>
            </div>
        </div>
    )
}

export default TopHeader