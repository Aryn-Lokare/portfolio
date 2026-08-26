import React from 'react'
import Image from 'next/image'

export const HeroSection = () => {
  return (
    <>
      {/* Mobile Hero (below lg) */}
      <div className="flex lg:hidden flex-col gap-6 w-full px-6 sm:px-12 md:px-20">
        <div className="mt-16 sm:mt-24 md:mt-32">
          <span className="block w-fit font-sans text-[#222222] font-medium tracking-[-1.5px] sm:tracking-[-2px] text-[48px] sm:text-[72px] md:text-[96px]">Software</span>
          <span className="block w-fit font-sans font-medium text-[#222222] text-[48px] sm:text-[72px] md:text-[96px] tracking-[-1.5px] sm:tracking-[-2px]">Developer</span>
        </div>
        <div className="w-full sm:w-[380px] p-2">
          <span className='text-[16px] sm:text-[18px] font-light font-sans text-[#222222] tracking-[-0.3px] leading-relaxed'>
            I build things from zero — turning ideas into products that actually work.
          </span>
        </div>
      </div>

      {/* Desktop Hero (lg and above) — exact original layout */}
      <div className="hidden lg:flex justify-between items-center gap-4">
        <div className="text-5xl font-bold font-sans text-[#222222] w-225 h-150">
          <div className="mt-75">
            <span className="ml-40 w-fit font-sans text-[#222222] font-medium tracking-[-2.50px] text-[156px]">Software</span><br />
            <span className="ml-40 w-fit font-sans font-medium text-[#222222] text-[156px] tracking-[-2.50px]">Developer</span>
          </div>
        </div>
        <div className="mr-50 mt-129 p-2 w-150">
          <span className='text-[20px] font-light font-sans text-[#222222] tracking-[-0.3px] leading-relaxed'>
            I build things from zero — turning ideas into products that actually work.
          </span>
        </div>
      </div>
    </>
  )
}