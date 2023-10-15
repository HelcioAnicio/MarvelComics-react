import React, { useEffect, useState } from "react";
import { FaSearch } from 'react-icons/fa'
import imageCharacter from '../../assets/logo.png'

export function Main() {
    const [characters, setCharacters] = useState([])
    const authentication = `apikey=8e30179e891ae0ca9d101872b0217c7e&hash=232cc1a3d5ad13b80cf2ce6d224bb2f4&ts=1`

    const getApiRandom = async() => {
        const maxCharacters = 1500
        const offset = Math.floor((Math.random() * maxCharacters) +1)

        const apiUrlSearched = `https://gateway.marvel.com/v1/public/characters?limit=8&offset=${offset}&${authentication}`
        const response = await fetch(apiUrlSearched)
        const data = await response.json()
        console.log(data)
        return data.data.results
    }

    useEffect(() => {
        async function fetchRandomCharacters() {
            const characterData = await getApiRandom()
            setCharacters(characterData)
        }

        fetchRandomCharacters()
    }, [])

    return (
        <>
            <main className="bg-white max-h-content">
                <section className="flex flex-wrap items-center justify-between">
                    <h1 className="w-full max-w-xs text-center py-3">Everything about Marvel's comics</h1>
                    <button type="button" className="w-full max-w-xs h-10"> 
                        <input type="search" name="search" placeholder="Search for what you want" className='w-4/5 max-w-xs outline-none border-b-2 border-b-gray-600 px-2 rounded-sm placeholder:text-gray-600'/>
                        <FaSearch className="text-1xl inline-block"/>
                    </button>
                </section>

                <section className="h-full flex flex-wrap gap-4">
                    {characters.map((character)=> (
                        <div key={character.id} className="flex-[1_1_150px] max-w-[280px] flex flex-col items-center justify-between pb-6 border">
                            <figure className="w-full">
                                <img className="w-full" src={`${character.thumbnail.path}/standard_fantastic.jpg`} alt="Image of character"  />
                            </figure>
                            <div className="text-center mt-2 mb-5">
                                <h4 className="py-2 w-60 m-auto text-2xl">{character.name}</h4>
                                <p className="py-2 px-2">{ character.description !== '' ? character.description : "Marvel didn't provide information" }</p>
                            </div>
                            <button type="button" className="rounded px-4 py-1 border text-black hover:bg-slate-700 hover:text-white hover:border-0 transition-all ease-linear duration-500 hover:shadow-lg">More information</button>
                        </div>                    
                    ))}                    

                </section>
            </main>
        </>
    )
}