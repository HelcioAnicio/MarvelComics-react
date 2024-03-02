import React from "react";

export function CharacterSearched({
  showCharactersSearched,
  charactersSearched,
}) {
  return (
    <>
      {showCharactersSearched && (
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
    </>
  );
}
