import React from "react";
import video from "./Asset/woodmirror_Unity.mp4"
import logo from './logo.svg';
import { Link } from "react-router-dom";

function Top(){
    return(
    <div className='relative flex items-center h-screen overflow-hidden'>
      <video src = {video} autoPlay loop muted playsInline className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 min-w-full max-w-none min-h-full max-h-none'>
      
      </video>
      <div className='absolute min-w-full max-w-none min-h-full max-h-none pattern-rectangles pattern-black pattern-bg-transparent pattern-opacity-60 pattern-size-1 '/> 
      <img src={logo} className="w-40 md:w-60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center" alt="logo"/>
      <body className=' absolute top-2/3 left-1/2 -translate-x-1/2 justify-center'>
      
        <nav className="flex md:flex-row flex-col justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6 text-md drop-shadow-sm">
            <Link to="/about" className="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</Link>
            {/*<Link to="/works" className="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">Works</Link>*/}
            <a href="https://docs.ymgmcmc.com" className="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blog</a>
            <a href="https://forms.gle/n7bebwEsL4BmYgM68" className="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact</a>
        </nav>
      </body>
      <div className='absolute bottom-0 left-1  -transform-x-1 -transform-y-1 text-sm text-white text-center opacity-50'>
      © 2023 - ymgmcmc All rights reserved.
      </div>
    </div>  
    )
}

export default Top