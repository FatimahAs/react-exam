import React, { useState } from 'react'
import ProductList from './ProductList'

const Home = () => {
	const [search, setSearch] = useState();
  return (
	    <div className='bg-[url(/bg.jpg)]  object-contain' >
		 
		 <div class="h-screen flex w-full justify-center items-center dark:bg-gray-800">

    <div class="flex relative rounded-md w-full px-4 max-w-xl">
				  <input value={search}
					  onChange={(e) => setSearch(e.target.value)}
					  type="text" name="q" id="query" placeholder="Button, Footer, etc"
            class="w-full p-3 rounded-md border-2 border-r-white rounded-r-none border-gray-300 placeholder-gray-500 dark:placeholder-gray-300 dark:bg-gray-500dark:text-gray-300 dark:border-none " />
				  <button
					  
            class="inline-flex items-center gap-2 bg-violet-700 text-white text-lg font-semibold py-3 px-6 rounded-r-md">
            <span>search</span>
            <span class="hidden md:block">
                <svg class="text-gray-200 h-5 w-5 p-0 fill-current" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
                    viewBox="0 0 56.966 56.966"  xml:space="preserve"
                    width="512px" height="512px">
                    <path
                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
            </span>
        </button>
    </div>

</div>
		  <ProductList/>
	   </div>
  )
}

export default Home