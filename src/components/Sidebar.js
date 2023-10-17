import React, { Fragment, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import close from "../assets/close.png"

export const Sidebar = () => {
   const [sidebar, setSidebar] = useState(false);
   const show='fixed top-0 left-0 z-40 w-64 h-screen block'
   const hide='fixed top-0 left-0 z-40 w-64 h-screen hidden'
   return (
      <Fragment>

         <button
            onClick={()=>setSidebar(false)}
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class=" inline-flex items-center p-2 mt-2 ml-3 text-sm w-fit h-fit rounded-lg  focus:outline-none focus:ring-2 text-indigo-800 border-2 border-indigo-800 hover:bg-indigo-700 focus:ring-indigo-600 focus:text-indigo-200">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>
         <div >
         {/* ${sidebar} ? 'sm:translate-x-full': 'sm:translate-x-0' */}
            <aside id="logo-sidebar" class={sidebar ?  hide : show}  aria-label="Sidebar">
               <div class="h-screen px-3 py-4 overflow-y-auto  bg-indigo-950 flex justify-between flex-col ">
                  <div className='mt-6'>
                    <div className="flex flex-row justify-between align-baseline">
                    <a href="/" class="flex items-center pl-2.5 mb-5">
                        <img width="24" height="24" src="https://img.icons8.com/android/24/FFFFFF/google-earth.png" alt="google-earth" />
                        <span class="self-center text-xl ml-1 font-semibold whitespace-nowrap text-white">Dashboard</span>
                     </a>
                     
                     <img src={close} alt="close"  className={`w-10 h-10 close_btn`} onClick={()=>setSidebar(true)} />
                     
                    </div>
                     <ul class="space-y-2 font-medium mt-10">
                        <li>
                           <a href="#" class="flex items-center p-2 rounded-lg text-white hover:bg-indigo-800	 group">
                              <svg class="w-5 h-5  transition duration-75 text-gray-400 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                 <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                 <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                              </svg>
                              <span class="ml-3">Dashboard</span>
                           </a>
                        </li>

                        <li>
                           <button type="button" class="flex items-center w-full p-2 text-base  transition duration-75 rounded-lg group hover:bg-indigo-800 text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                              <img class="flex-shrink-0 w-7 h-7  transition duration-75 text-gray-400 group-hover:text-white" src="https://img.icons8.com/sf-regular/48/EBEBEB/product.png" alt="product" />
                              <span class="flex-1 ml-3 text-left whitespace-nowrap">Product</span>
                              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                              </svg>
                           </button>
                           <ul id="dropdown-example" class="hidden py-2 space-y-2">
                              <li>
                                 <a href="#" class="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group  text-white hover:bg-gray-700">Products</a>
                              </li>
                              <li>
                                 <a href="#" class="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group  text-white hover:bg-gray-700">Billing</a>
                              </li>
                              <li>
                                 <a href="#" class="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group  text-white hover:bg-gray-700">Invoice</a>
                              </li>
                           </ul>
                        </li>

                        <li>
                           <button type="button" class="flex items-center w-full p-2 text-base  transition duration-75 rounded-lg group  text-white hover:bg-indigo-800" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                              <img class="flex-shrink-0 w-7 h-7 " src="https://img.icons8.com/dotty/80/FFFFFF/gender-neutral-user.png" alt="gender-neutral-user" />
                              <span class="flex-1 ml-3 text-left whitespace-nowrap">Customers</span>
                              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                              </svg>
                           </button>
                           <ul id="dropdown-example" class="hidden py-2 space-y-2">
                              <li>
                                 <a href="#" class="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group  text-white hover:bg-gray-700">Products</a>
                              </li>
                              <li>
                                 <a href="#" class="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group  text-white hover:bg-gray-700">Billing</a>
                              </li>
                              <li>
                                 <a href="#" class="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group  text-white hover:bg-gray-700">Invoice</a>
                              </li>
                           </ul>
                        </li>


                        <li>
                           <button type="button" class="flex items-center w-full p-2 text-base  transition duration-75 rounded-lg group  text-white hover:bg-indigo-800" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                              <img class="flex-shrink-0 w-7 h-7 text-gray-500 transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:text-white" src="https://img.icons8.com/pastel-glyph/64/FFFFFF/financial-growth.png" alt="financial-growth" />
                              <span class="flex-1 ml-3 text-left whitespace-nowrap">Income</span>
                              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                              </svg>
                           </button>
                           <ul id="dropdown-example" class="hidden py-2 space-y-2">
                              <li>
                                 <a href="#" class="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group  text-white hover:bg-gray-700">Products</a>
                              </li>
                              <li>
                                 <a href="#" class="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group  text-white hover:bg-gray-700">Billing</a>
                              </li>
                              <li>
                                 <a href="#" class="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group  text-white hover:bg-gray-700">Invoice</a>
                              </li>
                           </ul>
                        </li>


                        <li>
                           <button type="button" class="flex items-center w-full p-2 text-base  transition duration-75 rounded-lg group  text-white hover:bg-indigo-800" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                              <img class="flex-shrink-0 w-7 h-7 text-gray-500 transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:text-white" src="https://img.icons8.com/ios/50/FFFFFF/discount--v1.png" alt="discount--v1" />
                              <span class="flex-1 ml-3 text-left whitespace-nowrap">Promote</span>
                              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                              </svg>
                           </button>
                           <ul id="dropdown-example" class="hidden py-2 space-y-2">
                              <li>
                                 <a href="#" class="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group  text-white hover:bg-gray-700">Products</a>
                              </li>
                              <li>
                                 <a href="#" class="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group  text-white hover:bg-gray-700">Billing</a>
                              </li>
                              <li>
                                 <a href="#" class="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group  text-white hover:bg-gray-700">Invoice</a>
                              </li>
                           </ul>
                        </li>

                        <li>
                           <button type="button" class="flex items-center w-full p-2 text-base  transition duration-75 rounded-lg group  text-white hover:bg-indigo-800" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                              <img class="flex-shrink-0 w-7 h-7 text-gray-500 transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:text-white" src="https://img.icons8.com/carbon-copy/100/FFFFFF/help.png" alt="help" />
                              <span class="flex-1 ml-3 text-left whitespace-nowrap">Help</span>
                              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                              </svg>
                           </button>
                           <ul id="dropdown-example" class="hidden py-2 space-y-2">
                              <li>
                                 <a href="#" class="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group  text-white hover:bg-gray-700">Products</a>
                              </li>
                              <li>
                                 <a href="#" class="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group  text-white hover:bg-gray-700">Billing</a>
                              </li>
                              <li>
                                 <a href="#" class="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group  text-white hover:bg-gray-700">Invoice</a>
                              </li>
                           </ul>
                        </li>

                     </ul>
                  </div>
                  <div className="flex items-center bottom-0 p-2  space-x-4 justify-self-end mb-8">
                     <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-lg dark:bg-gray-500" />
                     <div>
                        <h2 className="text-lg font-semibold text-white">Leroy Jenkins</h2>
                        <span className="flex items-center space-x-1">
                           <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">View profile</a>
                        </span>
                     </div>
                  </div>
               </div>

            </aside>
         </div>






      </Fragment>
   )
}
