import React from 'react'
import LineImage from "../assets/images/hero-images/line_wvsvdz.png"
import Hero1 from "../assets/images/hero-images/Hero-image-1.png"
import Hero2 from "../assets/images/hero-images/Hero-image-2.png"

const Hero = () => {
  return (
    <div className=' w-full flex'>

      <section className=' w-[60%] bg-gradient-to-bl from-[#F2EC3B] to-[#A1F69A] flex flex-col justify-center items-center'>
        <div className=' w-[70%] p-6 flex flex-col justify-center items-start gap-6'>
          <h1 className='text-8xl font-bold'>Cartoonize</h1>
          <h2 className='text-8xl font-bold'>Yourself</h2>
          <img src={LineImage} alt="Line image" className='h-3' />
          <div className='flex flex-col gap-2.5'>
            <p className='text-2xl font-bold'>No generated animations!</p>
            <p className='text-2xl font-bold'>Enjoy an artist’s personalized work of you!</p>
          </div>
        </div>
      </section>

      <section>
        <div
          style={{ backgroundImage: `url(${Hero2})` }}
          className='h-[680px] bg-cover bg-center'
        >
          <img src={Hero1} alt="hero=1" className='bg-cover bg-center h-[700px] z-50' />
        </div>
      </section>

    </div>
  )
}

export default Hero
