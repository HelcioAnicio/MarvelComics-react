import React from 'react';
import LogoMarvel from '../../assets/logo.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import { FaRegTimesCircle } from "react-icons/fa";

export function Header () {
    return (
        <>
            <header className='flex items-center justify-between px-4 bg-slate-700'>
                <img src={LogoMarvel} alt="Logo Marvel" className='w-20'/>
                <div>
                    <input type="search" name="search" className='hidden'/>
                    <button type="button" className="bg-transparent cursor-pointer">
                        <GiHamburgerMenu className='text-4xl text-white'/>
                    </button>
                </div>

                <nav className="absolute bg-slate-900 text-white w-full h-full top-0 right-0 hidden items-center justify-center">
                    <ul className="mx-atuo w-1/2 h-1/2 flex flex-col justify-between items-center relative pt-20">
                        <li className='absolute top-0 right-0'>  
                            <button type="button">
                                <FaRegTimesCircle className='text-3xl'/>
                            </button>
                        </li>
                        <li className='relative trasition ease-linear duration-300 hover:opacity-80 hover:border-b border-white hover:scale-110 '><a href="../Pages/Home/home.jsx">Home</a></li>
                        <li className='relative trasition ease-linear duration-300 hover:opacity-80 hover:border-b border-white hover:scale-110 '><a href="../Pages/Characters/characters.jsx">Characters</a></li>
                        <li className='relative trasition ease-linear duration-300 hover:opacity-80 hover:border-b border-white hover:scale-110 '><a href="../Pages/Comics/comics.jsx">Comics</a></li>
                        <li className='relative trasition ease-linear duration-300 hover:opacity-80 hover:border-b border-white hover:scale-110 '><a href="../Pages/Contact/contact.jsx">Contact</a></li>
                    </ul>
                </nav>
            </header>   
        </>
    )
}