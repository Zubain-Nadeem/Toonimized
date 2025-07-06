import React from 'react'
import leftImage from "../assets/images/Transform-images/transform-right/Transform-left-side-image.png"
import TurckImage from "../assets/images/Transform-images/left/truck_i8zefe.png"
import TickImage from "../assets/images/Transform-images/left/tick_uttxfe.png"
import DollarImage from "../assets/images/Transform-images/left/dollar_fistyv.png"
import CupImage from "../assets/images/Transform-images/left/cup_qxxjsf.png"
import PaintImage from "../assets/images/Transform-images/left/paint_p1uu9k.png"
import PenImgage from "../assets/images/Transform-images/left/pen_zoev8o.png"
const Transform = () => {
    return (
        <div className='bg-[#1C1C1C] w-[100%] h-[100vh] py-6 flex justify-center items-center'>
            <div className='w-[80%] mx-auto flex text-white pt-8'>
                <section className=' h-[500px]'>
                    <div className=' w-[500px] h-[500px] relative rounded-full bg-gradient-to-bl from-[#F2EC3B] to-[#A1F69A] '>
                        <img src={leftImage} alt="Left side image" className='absolute top-40 left-5' />
                    </div>
                </section>

                <section className=' flex flex-col gap-2.5 items-end text-right'>
                    <h1 className='text-8xl font-bold'>Let’s transform
                        you into art</h1>
                    <h2 className='text-2xl font-bold'>Get yourself a hand-drawn character!</h2>
                    <p className='text-lg font-semibold'>What if autenticity isn’t dead? Those emblematic cartoons are famous for many reasons and people love
                        them for what they represent, but what if we can offer you one more reason to enjoy them? The perfect gift
                        for friends, family or yourself - a striking avatar, or just a bit of fun, let our skilled artists feed your curiosity and
                        show you how anyone may look as a character for one of this animations.</p>

                    <section className='flex gap-7 mt-6'>
                        <div className=''>
                            <div className='w-[100px] h-[100px] flex justify-center items-center rounded-full bg-gradient-to-bl from-[#F2EC3B] to-[#A1F69A]'>
                                <img src={PenImgage} alt="pen image" className='bg-[#E1FFF0] px-3 py-2 rounded-full' />
                            </div>
                            <div className='  text-center'>
                               <h2 className='text-[#F2EC3B] text-3xl font-bold'>4295+</h2>
                                <p className='text-[#979A35] text-lg'>Drawing</p>
                            </div>
                        </div>

                         <div className=''>
                            <div className='w-[100px] h-[100px] flex justify-center items-center rounded-full bg-gradient-to-bl from-[#F2EC3B] to-[#A1F69A]'>
                                <img src={PaintImage} alt="paint image" className='bg-[#E1FFF0] px-3 py-2 rounded-full' />
                            </div>
                            <div className='  text-center'>
                                <h2 className='text-[#F2EC3B] text-3xl font-bold'>27+</h2>
                                <p className='text-[#979A35] text-lg'>Incredabile</p>
                            </div>
                        </div>

                         <div className=''>
                            <div className='w-[100px] h-[100px] flex justify-center items-center rounded-full bg-gradient-to-bl from-[#F2EC3B] to-[#A1F69A]'>
                                <img src={CupImage} alt="cup image" className='bg-[#E1FFF0] px-3 py-2 rounded-full' />
                            </div>
                            <div className='  text-center'>
                                <h2 className='text-[#F2EC3B] text-3xl font-bold'>97%</h2>
                                <p className='text-[#979A35] text-lg'>Customer</p>
                                <p className='text-[#F2EC3B]'>Satisfaction</p>
                            </div>
                        </div>

                         <div className=''>
                            <div className='w-[100px] h-[100px] flex justify-center items-center rounded-full bg-gradient-to-bl from-[#F2EC3B] to-[#A1F69A]'>
                                <img src={DollarImage} alt="dollar image" className='bg-[#E1FFF0] px-3 py-2 rounded-full' />
                            </div>
                            <div className='  text-center'>
                                <h2 className='text-[#F2EC3B] text-3xl font-bold'>100%</h2>
                                <p className='text-[#979A35] text-lg'>Money Back</p>
                                <p className='text-[#F2EC3B]'>Grantnee</p>
                            </div>
                        </div>


                         <div className=''>
                            <div className='w-[100px] h-[100px] flex justify-center items-center rounded-full bg-gradient-to-bl from-[#F2EC3B] to-[#A1F69A]'>
                                <img src={TickImage} alt="tick image" className='bg-[#E1FFF0] px-3 py-2 rounded-full' />
                            </div>
                            <div className='  text-center flex flex-col items-center'>
                                <img src={TickImage} alt="tickimage" className='h-9 my-0.5' />
                                <p className='text-[#979A35] text-lg'>Unlimited</p>
                                <p className='text-[#F2EC3B]'>Revesion</p>
                            </div>
                        </div>


                         <div className=''>
                            <div className='w-[100px] h-[100px] flex justify-center items-center rounded-full bg-gradient-to-bl from-[#F2EC3B] to-[#A1F69A]'>
                                <img src={TurckImage} alt="truck image" className='bg-[#E1FFF0] px-3 py-2 rounded-full' />
                            </div>
                            <div className='  text-center'>
                                <h2 className='text-[#F2EC3B] text-3xl font-bold'>4-7</h2>
                                <p className='text-[#979A35] text-lg'>Delivery Days</p>
                                <p className='text-[#F2EC3B]'>Time</p>
                            </div>
                        </div>

                    </section>

                </section>
            </div>
        </div>
    )
}

export default Transform
