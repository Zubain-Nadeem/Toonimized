import React from 'react'
import Step1 from "../assets/images/How work/download.png"
import Step2 from "../assets/images/How work/download (1).png"
import Step3 from "../assets/images/How work/download (2).png"
import Step4 from "../assets/images/How work/download (3).png"
import Step5 from "../assets/images/How work/family.a94526ff.png"

const steps = [
  {
    img: Step1,
    number: 1,
    title: 'Single, or...? ',
    desc: 'Choose number of people and pets to be drawn',
  },
  {
    img: Step2,
    number: 2,
    title: 'Body Type',
    desc: 'Choose body type and specific features',
  },
  {
    img: Step3,
    number: 3,
    title: 'Notes',
    desc: 'Leave some notes, for the kick-ass details!',
  },
  {
    img: Step4,
    number: 4,
    title: 'Final Product',
    desc: 'Choose rather your creation is printed on one or more products or sent to you as a PNG',
  },
  {
    img: Step5,
    number: 5,
    title: 'Unlimited Revision Rounds',
    desc: 'Our english speaking team pays attention to every tiny detail until the final drawing speaks for itself.',
  },
];

const HowWork = () => {
  return (
    <div className="w-full min-h-[100vh] bg-white py-12 flex flex-col items-center">
      <div className="w-full flex flex-col items-center mb-8">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-2 text-center">How it works?</h1>
        <p className="text-lg md:text-xl font-medium text-center mb-2">Working with our team means 100% customer satisfaction.<br/>Our english speaking team pays attention to every tiny detail until the final drawing speaks for itself.</p>
        <h2 className="text-2xl md:text-3xl font-bold text-center mt-2 mb-4">Unlimited Revision Rounds</h2>
      </div>
      <div className="relative w-full flex justify-center">
        {/* Central vertical line or image */}
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 z-10">
          {/* Steps */}
          <div className="flex flex-col items-center text-center">
            <img src={Step1} alt="step 1" className="w-28 h-28 rounded-full mb-2" />
            <span className="text-3xl font-bold">1</span>
            <h3 className="text-xl font-bold mt-2">Single, or...?</h3>
            <p className="text-base mt-1">Choose number of people and pets to be drawn</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={Step2} alt="step 2" className="w-28 h-28 rounded-full mb-2" />
            <span className="text-3xl font-bold">2</span>
            <h3 className="text-xl font-bold mt-2">Body Type</h3>
            <p className="text-base mt-1">Choose body type and specific features</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={Step3} alt="step 3" className="w-28 h-28 rounded-full mb-2" />
            <span className="text-3xl font-bold">3</span>
            <h3 className="text-xl font-bold mt-2">Notes</h3>
            <p className="text-base mt-1">Leave some notes, for the kick-ass details!</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={Step4} alt="step 4" className="w-28 h-28 rounded-full mb-2" />
            <span className="text-3xl font-bold">4</span>
            <h3 className="text-xl font-bold mt-2">Final Product</h3>
            <p className="text-base mt-1">Choose rather your creation is printed on one or more products or sent to you as a PNG</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={Step5} alt="step 5" className="w-28 h-28 rounded-full mb-2" />
            <span className="text-3xl font-bold">5</span>
            <h3 className="text-xl font-bold mt-2">Unlimited Revision Rounds</h3>
            <p className="text-base mt-1">Our english speaking team pays attention to every tiny detail until the final drawing speaks for itself.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowWork
