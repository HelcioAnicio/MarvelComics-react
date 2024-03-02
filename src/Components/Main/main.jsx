import React, {useEffect, useState} from "react";
import {ButtonSearch} from "../ButtonSearch/buttonSearch";
import {CharacterSearched} from "../CharacterSearched/characterSearched";

export function Main({resultSearch}) {
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

  // REQUEST API RANDOM
  const getApiRandom = async () => {
    const maxCharacters = 1500;
    const offset = Math.floor(Math.random() * maxCharacters + 1);
    const apiUrlRandom = `https://gateway.marvel.com/v1/public/characters?limit=4&offset=${offset}&${authentication}`;
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

  //
  //
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

  //SET EACH CHARACTER USING USE EFFECT
  const fetchCharactersSearched = async (searchValue) => {
    const characterDataSearched = await showCharactersSearched(searchValue);
    console.log(characterDataSearched);
    setCharactersSearched(characterDataSearched.data.results);
  };
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

  // BUTTON CLICK
  const handleClick = () => {
    fetchCharactersSearched(searchValue);
    setShowRandomCharacters(false);
    setShowSearchedCharacters(true);
  };
  // INPUT VALUE
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <main className='bg-white max-h-content'>
        <ButtonSearch
          value={searchValue}
          onChange={handleChange}
          onClick={handleClick}
        />

        <CharacterSearched
          showCharactersSearched={showCharactersSearched}
          charactersSearched={charactersSearched}
        />

        {showRandomCharacters && (
          <section className='w-full h-max max-w-96 flex gap-2 border border-slate-950'>
            {charactersRandom.map((character) => (
              <div
                key={character.id}
                className={`relative max-h-60 max-w-[300px] flex flex-col flex-[0_1_30px] items-center justify-between pb-6 border shadow-md grayscale opacity-80 hover:grayscale-0 hover:opacity-100 hover:flex-1 transition-all ease-linear duration-1000 animated-card delay-${
                  character.id + 1
                }`}
                style={{animationDelay: `${character.id * 1}s`}}>
                <figure className='w-full max-w-44 max-w-xs'>
                  <img
                    className='w-full'
                    src={`${character.thumbnail.path}/standard_fantastic.jpg`}
                    alt='Image of character'
                  />
                </figure>
                <div className='text-center mt-2 mb-5'>
                  <h4 className='py-2 m-auto text-xs'>{character.name}</h4>
                  {/* <p className="py-2 px-2">
                    {character.description !== ""
                      ? character.description
                      : "Marvel didn't provide information"}
                  </p> */}
                </div>
                <button
                  type='button'
                  className='rounded text-xs px-2 py-1 border text-black hover:bg-slate-700 hover:text-white hover:border-0 transition-all ease-linear duration-500 hover:shadow-lg'>
                  More
                </button>
              </div>
            ))}
          </section>
        )}
      </main>
    </>
  );
}
