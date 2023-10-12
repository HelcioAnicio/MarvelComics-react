import React from 'react';
import LogoMarvel from '../../assets/logo.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import { FaRegTimesCircle } from "react-icons/fa";

export function Header () {
    return (
        <>
            <header className='flex items-center justify-between px-4'>
                <img src={LogoMarvel} alt="Logo Marvel" className='w-20'/>
                <button type="button" className="bg-transparent">
                    <GiHamburgerMenu className='text-4xl text-black'  />
                </button>
                <nav className="absolute bg-slate-900 text-white w-full h-full top-0 right-0 flex items-center justify-center">
                    <ul className="mx-atuo w-1/2 h-1/2 flex flex-col justify-between items-center relative pt-20">
                        <li className='absolute top-0 right-0'>  
                            <button type="button">
                                <FaRegTimesCircle className='text-3xl'/>
                            </button>
                        </li>
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