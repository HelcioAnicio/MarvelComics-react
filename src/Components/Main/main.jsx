import React, { useEffect, useState } from "react";
// import { ButtonSearch } from "../ButtonSearch/buttonSearch";
import { FaSearch } from "react-icons/fa";

export function Main({ resultSearch }) {
  const authentication = `apikey=8e30179e891ae0ca9d101872b0217c7e&hash=232cc1a3d5ad13b80cf2ce6d224bb2f4&ts=1`;
  const [charactersRandom, setCharactersRandom] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [charactersSearched, setCharactersSearched] = useState([]);
  const [showRandomCharacters, setShowRandomCharacters] = useState(true);
  const [showSearchedCharacters, setShowSearchedCharacters] = useState(true);

  // const getApiEvents = async () => {
  //   const apiUrlEvents = `https://gateway.marvel.com/v1/public/events?limit=8&${authentication}`;
  //   const response = await fetch(apiUrlEvents);
  //   const data = await response.json();
  //   console.log(data);
  //   return data;
  // };
  // getApiEvents();

  const getApiRandom = async () => {
    const maxCharacters = 1500;
    const offset = Math.floor(Math.random() * maxCharacters + 1);
    const apiUrlRandom = `https://gateway.marvel.com/v1/public/characters?limit=8&offset=${offset}&${authentication}`;
    const response = await fetch(apiUrlRandom);
    const data = await response.json();
    console.log(data);
    return data;
  };
  useEffect(() => {
    async function fetchRandomCharacters() {
      const characterDataRandom = await getApiRandom();
      setCharactersRandom(characterDataRandom.data.results);
    }
    fetchRandomCharacters();
  }, []);

  // GET API BY CLICK ON BUTTON
  const getApiSearched = async (searchValue) => {
    const apiUrlSearched = `https://gateway.marvel.com/v1/public/characters?limit=50&nameStartsWith=${searchValue}&${authentication}`;
    const response = await fetch(apiUrlSearched);
    const data = await response.json();
    return data;
  };
  // SHOW CHARACTER AFTER REQUEST ON API
  const showCharactersSearched = async (searchValue) => {
    const data = await getApiSearched(searchValue);
    // console.log(data);
    return data;
  };
  //Set each character using useEffect
  async function fetchCharactersSearched(searchValue) {
    const characterDataSearched = await showCharactersSearched(searchValue);
    console.log(characterDataSearched);
    setCharactersSearched(characterDataSearched.data.results);
  }
  useEffect(() => {
    if (searchValue !== "") {
      fetchCharactersSearched(searchValue);
      setShowRandomCharacters(false);
      setShowSearchedCharacters(true);
    } else {
      setShowRandomCharacters(true);
      setShowSearchedCharacters(false);
    }
  }, [searchValue]);

  // EVENT CLICK
  const handleClick = () => {
    fetchCharactersSearched(searchValue);
  };

  // INPUT VALUE
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <main className='bg-white max-h-content'>
        {/* <ButtonSearch /> */}
        <section className='flex flex-wrap items-center justify-center px-3 mb-4 md:justify-between'>
          <h1 className='text-center py-3 text-2xl flex-1 basis-72 max-w-md'>
            Everything about Marvel's comics
          </h1>
          <div className='flex justify-between flex-1 basis-72 max-w-md'>
            <input
              type='search'
              name='search'
              value={searchValue}
              onChange={handleChange}
              placeholder='Search for what you want'
              className='w-full max-w-xs outline-none border-b-2 border-b-gray-600 px-2 rounded-sm placeholder:text-gray-600'
            />
            <button
              type='button'
              onClick={handleClick}
              className='w-10 h-9 bg-transparent'>
              <FaSearch className='inline-block text-md' />
            </button>
          </div>
        </section>

        {showSearchedCharacters && (
          <section className='h-full flex flex-wrap gap-4 px-3'>
            {charactersSearched.map((character) => (
              <div
                key={character.id}
                className='flex-[1_1_100px] max-w-[150px] flex flex-col items-center justify-between pb-6 border shadow-md'>
                <figure className='w-full'>
                  <img
                    className='w-full'
                    src={`${character.thumbnail.path}/standard_fantastic.jpg`}
                    alt='Image of character'
                  />
                </figure>
                <div className='text-center mt-2 mb-5'>
                  <h4 className='py-2 m-auto text-base'>{character.name}</h4>
                  {/* <p className="py-2 px-2">
                  {character.description !== ""
                    ? character.description
                    : "Marvel didn't provide information"}
                </p> */}
                </div>
                <button
                  type='button'
                  className='rounded text-xs px-4 py-1 border text-black hover:bg-slate-700 hover:text-white hover:border-0 transition-all ease-linear duration-500 hover:shadow-lg'>
                  More details
                </button>
              </div>
            ))}
          </section>
        )}

        {showRandomCharacters && (
          <section className='h-full flex flex-wrap gap-4'>
            {charactersRandom.map((character) => (
              <div
                key={character.id}
                className='flex-[1_1_100px] max-w-[130px] flex flex-col items-center justify-between pb-6 border shadow-md'>
                <figure className='w-full'>
                  <img
                    className='w-full'
                    src={`${character.thumbnail.path}/standard_fantastic.jpg`}
                    alt='Image of character'
                  />
                </figure>
                <div className='text-center mt-2 mb-5'>
                  <h4 className='py-2 m-auto text-base'>{character.name}</h4>
                  {/* <p className="py-2 px-2">
                    {character.description !== ""
                      ? character.description
                      : "Marvel didn't provide information"}
                  </p> */}
                </div>
                <button
                  type='button'
                  className='rounded text-xs px-4 py-1 border text-black hover:bg-slate-700 hover:text-white hover:border-0 transition-all ease-linear duration-500 hover:shadow-lg'>
                  More details
                </button>
              </div>
            ))}
          </section>
        )}
      </main>
    </>
  );
}
