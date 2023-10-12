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
                    <ul className="w-1/2 h-1/2 border-white border-solid border-2 flex-col flex-wrap justify-between items-center">
                        <li className='text-right'> 
                            <button type="button">
                                <FaRegTimesCircle className='text-3xl mb-5'/>
                            </button>
                        </li>
                        <li className='inline-block border border-w'>Home</li>
                        <li className='inline-block border border-w'>Characters</li>
                        <li className='inline-block border border-w'>Comics</li>
                        <li className='inline-block border border-w'>Contact</li>
                    </ul>
                </nav>
            </header>   
        </>
    )
}