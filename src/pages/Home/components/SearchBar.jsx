// From Bootstrap icons
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';

function SearchBar() {

  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    // Implement search functionality here
    console.log("Searching for:", query);
  }

  return (
    <section className='relative w-full sm:w-3/4 tablet:w-[80%] max-w-screen-tablet mx-auto'>
      <input type="text" 
        value={query}
        onChange={handleInputChange}
        placeholder="Search your City..." 
        className='w-full py-4 pl-4 pr-12 rounded-lg bg-slate-500 
                  text-white placeholder:italic placeholder:text-white/80
                  text-base dark:bg-slate-700 dark:text-white dark:placeholder:text-white/80 outline-[0.1rem]'/>
      <button className='absolute right-3 top-1/2 transform 
                        -translate-y-1/2 text-white focus:text-[#E6E6FA]
                        hover:animate-shake'
                        onClick={handleSearch}>
        <BsSearch size={24} />
        </button>
    </section>
  )
}

export default SearchBar;