import React from 'react'
import Image from 'next/image'
import { IoSearchOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className='flex bg-white items-center justify-between 
             shadow-sm p-2 border border-b-2'>
        <div className="logo-searchBarContainer flex items-center ">
            <div className='logoContainer'>
                <Image
                    src='/images.png'
                    width='100'
                    height='200' 
                    alt='Logo'
                />
            </div>
            <div className='searchBar flex items-center bg relative'>
                <button 
                    className='md:absolute  text-2xl   
                        p-2 rounded-md md:inset-y-0 hover:text-blue-700 '>
                    <IoSearchOutline />
                </button>
                <input type="text"
                    className='border border-gray-300 hover:border-gray-400
                        p-2 rounded px-10 hidden md:block'
                />
            </div>
        
        </div>
        {/* <div className="login-signup mr-4 flex">
            <button className='hover:underline hover:bg-gray-300 
                hover:text-blue-700 py-2 px-4 rounded mr-6 text-lg hidden md:flex'>
                Log in
            </button>
            <button className='hover:underline hover:bg-blue-700 
                text-blue-600 border border-blue-700 py-2 px-4 rounded
                font-semibold hover:text-white'>
                Create Account</button>
        </div> */}

        {/* Sidebar for mobile --> */}
{/* <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 md:hidden" id="mobileSidebar">
    <div className="flex flex-col items-center justify-center h-full">
        <button className="hover:underline hover:bg-gray-200 hover:text-blue-600 py-2 px-4 rounded mb-4">
            Log in
        </button>
        <button className="hover:underline hover:bg-blue-600 text-blue-600 border border-blue-600 py-2 px-4 rounded font-semibold hover:text-white">
            Create Account
        </button>
    </div>
</div> */}
    </div>
  )
}

export default Navbar