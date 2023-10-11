import React from 'react';
import LogoMarvel from '../../assets/logo.png'
import {GiHamburgerMenu} from 'react-icons/gi'

export function Header () {
    return (
        <>
            <header className='flex items-center justify-between px-4'>
                <img src={LogoMarvel} alt="Logo Marvel" className='w-20'/>
                <button type="button" className="bg-transparent">
                    <GiHamburgerMenu className='text-4xl p-1 rounded text-black'  />
                </button>
                <nav className="absolute bg-slate-900 text-white w-full h-full top-0 right-0 flex items-center justify-center">
                    <ul className="w-1/2 h-1/2 border-white border-solid border-2 flex flex-wrap gap-10 justify-center content-evenly">
                        <li>Home</li>
                        <li>Characters</li>
                        <li>Comics</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>   
        </>
    )
}