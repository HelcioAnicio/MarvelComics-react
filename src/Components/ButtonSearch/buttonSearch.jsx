import { FaSearch } from "react-icons/fa";

export function ButtonSearch() {
  return (
    <>
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
    </>
  );
}
