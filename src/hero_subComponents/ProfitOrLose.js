import React from 'react'
import three from "../assets/three.png"
export const ProfitOrLose = () => {
  return (
    <div class="flex flex-row justify-evenly mt-10">
          <div class="flex items-center flex-row justify-evenly  w-64 h-[10rem] rounded bg-gray-50 dark:bg-white">
            <div className=" bg-green-300 w-[7rem] h-[7rem] rounded-[100rem]">

            </div>
            <div className="flex flex-col">
              <p className=' text-sm text-gray-500'>Earning</p>
              <h1 className=' text-lg font-bold '>$198K</h1>
              <div className='flex flex-row'>
                <img className=' w-4 h-4 mt-1' src="https://img.icons8.com/material-rounded/24/40C057/thick-arrow-pointing-up.png" alt="thick-arrow-pointing-up" />
                <p className=' text-[0.90rem] text-gray-500'>
                  <span className=' text-green-600 font-extrabold'> 37.8%</span> this month
                </p>
              </div>

            </div>
          </div>

          <div class="flex items-center flex-row justify-evenly  w-64 h-[10rem] rounded bg-gray-50 dark:bg-white">
            <div className=" bg-purple-300 w-[7rem] h-[7rem] rounded-[100rem]">

            </div>
            <div className="flex flex-col">
              <p className=' text-sm text-gray-500'>Orders</p>
              <h1 className=' text-lg font-bold '>$2.4K</h1>
              <div className='flex flex-row'>
                <img className=' w-4 h-4 mt-1' src="https://img.icons8.com/material/24/F25081/thick-arrow-pointing-down--v1.png" alt="thick-arrow-pointing-down--v1" />
                <p className=' text-[0.90rem] text-gray-500'>
                  <span className=' text-pink-600 font-extrabold'> 2%</span> this month
                </p>
              </div>

            </div>
          </div>

          <div class="flex items-center flex-row justify-evenly  w-64 h-[10rem] rounded bg-gray-50 dark:bg-white">
            <div className=" bg-sky-300 w-[7rem] h-[7rem] rounded-[100rem]">
           <img src={three} alt="three" className='align-baseline m-6'/>
            </div>
            <div className="flex flex-col">
              <p className=' text-sm text-gray-500'>Balance</p>
              <h1 className=' text-lg font-bold '>$2.4K</h1>
              <div className='flex flex-row'>
                <img className=' w-4 h-4 mt-1' src="https://img.icons8.com/material/24/F25081/thick-arrow-pointing-down--v1.png" alt="thick-arrow-pointing-down--v1" />
                <p className=' text-[0.90rem] text-gray-500'>
                  <span className=' text-pink-600 font-extrabold'> 2%</span> this month
                </p>
              </div>

            </div>
          </div>

          <div class="flex items-center flex-row justify-evenly  w-64 h-[10rem] rounded bg-gray-50 dark:bg-white">
            <div className=" bg-rose-300 w-[7rem] h-[7rem] rounded-[100rem]">

            </div>
            <div className="flex flex-col">
              <p className=' text-sm text-gray-500'>Total Sales</p>
              <h1 className=' text-lg font-bold '>$89K</h1>
              <div className='flex flex-row'>
                <img className=' w-4 h-4 mt-1' src="https://img.icons8.com/material-rounded/24/40C057/thick-arrow-pointing-up.png" alt="thick-arrow-pointing-up" />
                <p className=' text-[0.90rem] text-gray-500 align-baseline'>
                  <span className=' text-green-600 font-extrabold '> 11%</span> this week
                </p>
              </div>

            </div>
          </div>




        </div>
  )
}
