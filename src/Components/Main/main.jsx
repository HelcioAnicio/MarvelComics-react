import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export function Main() {
  const authentication = `apikey=8e30179e891ae0ca9d101872b0217c7e&hash=232cc1a3d5ad13b80cf2ce6d224bb2f4&ts=1`;
  const [charactersRandom, setCharactersRandom] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [characterSearched, setCharactersSearched] = useState([]);

  const getApiRandom = async () => {
    const maxCharacters = 1500;
    const offset = Math.floor(Math.random() * maxCharacters + 1);
    const apiUrlRandom = `https://gateway.marvel.com/v1/public/characters?limit=8&offset=${offset}&${authentication}`;
    const response = await fetch(apiUrlRandom);
    const data = await response.json();
    console.log(data);
    return data.data.results;
  };

  useEffect(() => {
    async function fetchRandomCharacters() {
      const characterData = await getApiRandom();
      setCharactersRandom(characterData);
    }
    fetchRandomCharacters();
  }, []);

  // GET API BY CLICK ON BUTTON
  const getApiSearched = async (searchValue) => {
    const apiUrlSearched = `https://gateway.marvel.com/v1/public/characters?limit=20&nameStartsWith=${searchValue}&${authentication}`;
    const response = await fetch(apiUrlSearched);
    const data = await response.json();
    console.log(data);
    return data;
  };
  // SHOW CHARACTER AFTER REQUEST ON API
  const showCharacterSearched = async (searchValue) => {
    const data = await getApiSearched(searchValue);
    console.log(data);
    return data;
  };

  useEffect(() => {
    async function fetchCharactersSearched() {
      const characterData = await getApiSearched();
      setCharactersSearched(characterData);
    }
    fetchCharactersSearched();
  }, []);

  // EVENT CLICK
  const handleClick = () => {
    console.log(searchValue);
    showCharacterSearched(searchValue);
  };
  // INPUT VALUE
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <main className="bg-white max-h-content">
        <section className="flex flex-wrap items-center justify-center px-4 min-md:justify-between md:justify-between">
          <h1 className="text-center py-3">Everything about Marvel's comics</h1>
          <div className="flex justify-between w-72">
            <input
              type="search"
              name="search"
              value={searchValue}
              onChange={handleChange}
              placeholder="Search for what you want"
              className="w-4/5 max-w-xs outline-none border-b-2 border-b-gray-600 px-2 rounded-sm placeholder:text-gray-600"
            />
            <button
              type="button"
              onClick={handleClick}
              className="w-10 h-9 bg-transparent">
              <FaSearch className="text-1xl inline-block" />
            </button>
          </div>
        </section>

        <section className="h-full flex flex-wrap gap-4">
          {characterSearched.map((character) => (
            <div
              key={character.id}
              className="flex-[1_1_150px] max-w-[280px] flex flex-col items-center justify-between pb-6 border shadow-md">
              <figure className="w-full">
                <img
                  className="w-full"
                  src={`${character.thumbnail.path}/standard_fantastic.jpg`}
                  alt="Image of character"
                />
              </figure>
              <div className="text-center mt-2 mb-5">
                <h4 className="py-2 w-60 m-auto text-2xl">{character.name}</h4>
                <p className="py-2 px-2">
                  {character.description !== ""
                    ? character.description
                    : "Marvel didn't provide information"}
                </p>
              </div>
              <button
                type="button"
                className="rounded px-4 py-1 border text-black hover:bg-slate-700 hover:text-white hover:border-0 transition-all ease-linear duration-500 hover:shadow-lg">
                More information
              </button>
            </div>
          ))}
        </section>

        <section className="h-full flex flex-wrap gap-4">
          {charactersRandom.map((character) => (
            <div
              key={character.id}
              className="flex-[1_1_150px] max-w-[280px] flex flex-col items-center justify-between pb-6 border shadow-md">
              <figure className="w-full">
                <img
                  className="w-full"
                  src={`${character.thumbnail.path}/standard_fantastic.jpg`}
                  alt="Image of character"
                />
              </figure>
              <div className="text-center mt-2 mb-5">
                <h4 className="py-2 w-60 m-auto text-2xl">{character.name}</h4>
                <p className="py-2 px-2">
                  {character.description !== ""
                    ? character.description
                    : "Marvel didn't provide information"}
                </p>
              </div>
              <button
                type="button"
                className="rounded px-4 py-1 border text-black hover:bg-slate-700 hover:text-white hover:border-0 transition-all ease-linear duration-500 hover:shadow-lg">
                More information
              </button>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
