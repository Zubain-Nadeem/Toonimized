import React from 'react'
import leftImage from "../assets/images/Transform-images/transform-right/Transform-left-side-image.png"
import TurckImage from "../assets/images/Transform-images/left/truck_i8zefe.png"
const Transform = () => {
    return (
        <div className='bg-[#1C1C1C] w-[100%] h-[100vh] py-6 flex justify-center items-center'>
            <div className='w-[80%] mx-auto flex text-white'>
                <section className='border border-green-400 w-[40%] h-[500px]'>
                    <div className='border border-yellow-400 w-[500px] h-[500px] relative rounded-full bg-gradient-to-bl from-[#F2EC3B] to-[#A1F69A] '>
                        <img src={leftImage} alt="Left side image" className='absolute top-40 left-5' />
                    </div>
                </section>

                <section className='border border-pink-400 flex flex-col gap-2.5 items-end text-right'>
                    <h1 className='text-8xl font-bold'>Let’s transform
                        you into art</h1>
                    <h2 className='text-2xl font-bold'>Get yourself a hand-drawn character!</h2>
                    <p className='text-lg font-semibold'>What if autenticity isn’t dead? Those emblematic cartoons are famous for many reasons and people love
                        them for what they represent, but what if we can offer you one more reason to enjoy them? The perfect gift
                        for friends, family or yourself - a striking avatar, or just a bit of fun, let our skilled artists feed your curiosity and
                        show you how anyone may look as a character for one of this animations.</p>

                    <section></section>

                </section>
            </div>
        </div>
    )
}

export default Transform
