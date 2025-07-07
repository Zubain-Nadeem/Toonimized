import React, { useState } from 'react'
import Simpson1 from "../assets/images/Choosebox/left-side-imag/Simpson-1.png"
import Simpson2 from "../assets/images/Choosebox/left-side-imag/Simpson-2.png"
import Simpson3 from "../assets/images/Choosebox/left-side-imag/Simpson-3.png"
import Simpson4 from "../assets/images/Choosebox/left-side-imag/Simpson-4.png"
import Simpson5 from "../assets/images/Choosebox/left-side-imag/Simpson-5.png"
import Simpson6 from "../assets/images/Choosebox/left-side-imag/Simpson-6.png"
import TurnMeYellow from "../assets/images/Choosebox/right-side-image/turn-me-yellow.svg"
import TurnMeRick from "../assets/images/Choosebox/right-side-image/turn-me-rick.png"
import TurnMeGoku from "../assets/images/Choosebox/right-side-image/turn-me-goku.png"
import TurnMeCart from "../assets/images/Choosebox/right-side-image/turn-me-cartman.png"
import TurnMeFamily from "../assets/images/Choosebox/right-side-image/turn-me-family.png"
import TurnMeFuture from "../assets/images/Choosebox/right-side-image/turn-me-future.png"

const simpsonImages = [Simpson1, Simpson2, Simpson3, Simpson4, Simpson5, Simpson6];

const Choosebox = () => {
  const [mainImage, setMainImage] = useState(Simpson1);

  return (
    <div className='border-2 border-red-600 w-[100%] min-h-[100vh] bg-gradient-to-bl from-[#F2EC3B] to-[#A1F69A]'>
        <section className='w-[80%] min-h-[500px] border-2 border-green-700 mx-auto flex justify-between py-10'>
            <div className=' w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#EFEC3E] to-[#A0F69B] shadow-white shadow-lg flex justify-center items-center'>
                <img src={mainImage} alt="Simpson" className='h-[500px]'/>
            </div>

            <div className='border border-black w-[30%] p-2 flex flex-col items-center gap-3.5 cursor-pointer mt-8 '>
                <img src={TurnMeYellow} alt="Yellow image" className='hover:scale-[1.1] transition duration-300 ease-in-out' onClick={() => setMainImage(Simpson1)} />
                <img src={TurnMeRick} alt="Rick image" className='hover:scale-[1.1] transition duration-300 ease-in-out' onClick={() => setMainImage(Simpson2)} />
                <img src={TurnMeGoku} alt="Goku image" className='hover:scale-[1.1] transition duration-300 ease-in-out' onClick={() => setMainImage(Simpson3)} />
                <img src={TurnMeCart} alt="Cartman image" className='hover:scale-[1.1] transition duration-300 ease-in-out h-[180px]' onClick={() => setMainImage(Simpson4)} />
                <img src={TurnMeFamily} alt="Family image" className='hover:scale-[1.1] transition duration-300 ease-in-out' onClick={() => setMainImage(Simpson5)} />
                <img src={TurnMeFuture} alt="Future image" className='hover:scale-[1.1] transition duration-300 ease-in-out h-[180px]' onClick={() => setMainImage(Simpson6)} />
            </div>
        </section>
    </div>
  )
}

export default Choosebox
