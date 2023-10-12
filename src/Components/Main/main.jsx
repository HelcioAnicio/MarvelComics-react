import React from "react";
import { FaSearch } from 'react-icons/fa'

export function Main() {
    return (
        <>
            <main>
                <h1 className="text-white bg-black">Everithing about Marvel comics</h1>
                <section>
                    <button type="button" className="border border-black w-1/1"> 
                        <FaSearch className="text-white bg-black p-2 text-4xl"/>
                        <input type="search" name="search" placeholder="Search for what you want" className='w-4/5 max-w-xs border border-black'/>
                    </button>
                </section>
            </main>
        </>
    )
}