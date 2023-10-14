import React from "react";
import { FaSearch } from 'react-icons/fa'

export function Main() {
    return (
        <>
            <main className="h-full bg-white">
                <section className="h-28 border flex flex-wrap items-center justify-between">
                    <h1 className="w-full max-w-xs border text-center py-3">Everything about Marvel's comics</h1>
                    <button type="button" className="w-full max-w-xs h-10"> 
                        <input type="search" name="search" placeholder="Search for what you want" className='w-4/5 max-w-xs border-b-black p-2'/>
                        <FaSearch className="text-1xl inline-block"/>
                    </button>
                </section>

                <section className="h-max-content bg-slate-500">
                    <div className="h-60">
                        <figure>
                            <img src="" alt="" />
                        </figure>
                        <div>
                            <h4>Nome do personagem</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}