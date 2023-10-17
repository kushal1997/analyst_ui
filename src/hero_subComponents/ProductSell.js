import React from 'react'
import p1 from "../assets/p1.jpg"
export const ProductSell = () => {
  return (
    <div className="flex flex-col  w-[full] max-w-screen-md p-6 pb-6 mt-4 ml-2 bg-white rounded-lg shadow-xl sm:p-2">
      <div className="flex flex-row sm:flex-col sm:mb-2 justify-between">
        <div className="flex flex-row  justify-around">
          <p className=' font-bold text-lg'>Product Sell</p>
        </div>
        <div className=' flex flex-row'>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center py-4">
              <button type="submit" className="p-2 focus:outline-none focus:ring">
                <svg fill="currentColor" viewBox="0 0 512 512" className="w-5 h-5 text-gray-600">
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input type="search" name="Search" placeholder="Search..." className="w-full py-2 pl-10 text-sm dark:border-transparent rounded-md focus:outline-non bg-white text-gray-700 focus:dark:bg-gray-900" />
          </div>
          <select id="frequency" name="frequency" className=" bg-white w-26 h-8 p-1 border rounded-lg text-gray-400">
            <option className="  text-gray-400" value="quarterly">Last 30 Days</option>
            <option value="yearly">Last 1 Month</option>
            <option value="monthly">Last 1 Year</option>
          </select>
        </div>
      </div>

      <div className='flex flex-row justify-between mt-4 text-gray-500 border-b border-gray-300'>
        <p className=' sm:mt-6'>Product Name</p>
        <div className='flex flex-row sm:flex-col justify-between w-[25%] sm:w-[33%] sm:mb-1'>
          <p>Stock</p>
          <p>Price</p>
          <p>Total Sales</p>
        </div>
      </div>

      <div className=' mt-5 flex flex-row justify-between align-baseline sm:mb-2'>
        <div className='flex flex-row sm:flex-col align-baseline'>
          <img className=' w-[8rem] h-[4rem] sm:w-[5rem] sm:h-[3rem] sm:ml-3 rounded-lg' src={p1} alt="p1" />
          <div className="flex flex-col ml-4">
            <h1 className=' font-bold'>Abstract 3D</h1>
            <p className=' text-gray-400 text-sm sm:text-xs sm:mr-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="flex flex-row sm:flex-col justify-between w-[25%] sm:w-[33%] sm:items-center mr-4">
          <p className=' sm:text-sm'>32 in stock</p>
          <p className=' mr-[41px] sm:mr-[17px] font-bold'>$45.95</p>
          <p className=' mr-[16px] sm:m-0 sm:text-sm'>20</p>
        </div>
      </div>
      <hr />

      <div className=' mt-5 flex flex-row justify-between align-baseline sm:mb-2'>
        <div className='flex flex-row sm:flex-col align-baseline'>
          <img className=' w-[8rem] h-[4rem] sm:w-[5rem] sm:h-[3rem] sm:ml-3 rounded-lg' src={p1} alt="p1" />
          <div className="flex flex-col ml-4">
            <h1 className=' font-bold'>Abstract 3D</h1>
            <p className=' text-gray-400 text-sm sm:text-xs sm:mr-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="flex flex-row sm:flex-col justify-between w-[25%] sm:w-[33%] sm:items-center mr-4">
          <p className=' sm:text-sm'>32 in stock</p>
          <p className=' mr-[41px] sm:mr-[17px] font-bold'>$45.95</p>
          <p className=' mr-[16px] sm:m-0 sm:text-sm'>20</p>
        </div>
      </div>
      <hr />


      <div className=' mt-5 flex flex-row justify-between align-baseline sm:mb-2'>
        <div className='flex flex-row sm:flex-col align-baseline'>
          <img className=' w-[8rem] h-[4rem] sm:w-[5rem] sm:h-[3rem] sm:ml-3 rounded-lg' src={p1} alt="p1" />
          <div className="flex flex-col ml-4">
            <h1 className=' font-bold'>Abstract 3D</h1>
            <p className=' text-gray-400 text-sm sm:text-xs sm:mr-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="flex flex-row sm:flex-col justify-between w-[25%] sm:w-[33%] sm:items-center mr-4">
          <p className=' sm:text-sm'>32 in stock</p>
          <p className=' mr-[41px] sm:mr-[17px] font-bold'>$45.95</p>
          <p className=' mr-[16px] sm:m-0 sm:text-sm'>20</p>
        </div>
      </div>
<hr />
      
    </div>
  )
}
