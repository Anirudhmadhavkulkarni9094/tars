import React from 'react';

function NavBar({ handleQuery, query, handleMode, mode }) {
  return (
    <>
      <div className={`p-5 ${mode ? 'bg-slate-700 text-white' : 'bg-slate-300 text-black'}`}>
        <div className="flex items-center justify-between">
          <h1 className='logo text-sm lg:text-3xl sm:text-sm'>Image Gallery</h1>
          <div className="flex gap-10 items-center hidden md:flex">
            {/* Search bar for medium and larger screens */}
            <div className='flex bg-white pr-5 pl-2 py-2 rounded-xl'>
              <img src={require('./Assets/Images/search.png')} className='border-none w-6 mx-2'></img>
              <input placeholder='search image here' style={{ border: 'none' , outline : 'none' }} onChange={handleQuery} value={query} />
            </div>
            <h1>Explore</h1>
            <h1>Collections</h1>
            <h1>Community</h1>
          </div>
          {/* Search bar for small screens */}
          <div className='md:hidden lg:hidden'>
          <div className='flex bg-white pr-5 pl-2 py-2 rounded-xl'>
              <img src={require('./Assets/Images/search.png')} className='border-none w-6 mx-2'></img>
              <input placeholder='search image here' style={{ border: 'none' , outline : 'none' , width : "100%" }} onChange={handleQuery} value={query} />
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" onClick={handleMode} />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </>
  );
}

export default NavBar;
