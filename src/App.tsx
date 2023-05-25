
import logo from './logo.svg';

import ParticleBackground from './archives/particlebackground';

import Footer from './footer'
import video from "./Asset/woodmirror_Unity.mp4"

export default function App() {
  return (
    <div className="font-body" >    
      <div className='relative flex items-center h-screen overflow-hidden'>
      <video src = {video} autoPlay loop muted playsInline className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 min-w-full max-w-none min-h-full max-h-none'>
      
      </video>
      <div className='absolute min-w-full max-w-none min-h-full max-h-none pattern-rectangles pattern-black pattern-bg-transparent pattern-opacity-60 pattern-size-1 '/> 
      <img src={logo} className="w-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center" alt="logo"/>
      <body className=' absolute top-2/3 left-1/2 -translate-x-1/2 justify-center'>
      
        <nav className="flex md:flex-row flex-col justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6 text-sm drop-shadow-sm">
            <a href="#" className="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</a>
            <a href="#" className="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">Works</a>
            <a href="https://docs.ymgmcmc.com" className="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blog</a>
            <a href="#" className="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact</a>
        </nav>
      </body>
        
      </div>
      
      <header className="absolute top-0" hidden>
        <img src={logo} className="App-logo" alt="logo"/>
      </header> 
      
      <Footer/>
    </div>
  );
}