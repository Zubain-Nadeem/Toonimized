import React from 'react'
import LogoImage from "../assets/images/header-images/Header-logo.png"
import CartImage from "../assets/images/header-images/cart.png"

const Header = () => {
    return (
        <div>
            <header className=' w-[100%] h-[75px] flex items-center'>
                <section className='w-[53%] h-[75px] px-9 flex items-center bg-linear-to-r from-[#9EC55F] to-[#C5C032] justify-between'>
                    <img src={LogoImage} alt="Logo images" className='h-8' />

                    <nav className='flex list-none  gap-[45px] text-xl font-semibold text-[#42442B]'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Artists</a></li>
                        <li><a href="#">FAQ</a></li>
                    </nav>
                </section>


                <section className='w-[47%] h-[75px] bg-[#030303] text-white flex items-center justify-center gap-11'>
                    <img src={CartImage} alt="cart image" className='h-9' />
                    <button className='bg-[#FFA600] px-4 py-2 cursor-pointer rounded-3xl'>GET STARTED</button>
                </section>

            </header>
        </div>
    )
}

export default Header
