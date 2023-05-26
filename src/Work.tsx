import React, {useState} from "react";
import logo from './logo.png'

const Work = ({name}: any) =>{
    const [openWork, setOpenWork] = useState(false);
    const handleWorkOpen = () => {
        setOpenWork(!openWork)
    }
    return(
        <div>
            <div className="h-60 w-80 bg-white flex items-center justify-center">
                    <div className=" px-4 md:px-8">
                        
                        <button onClick={handleWorkOpen}
                        type="button"
                        className={openWork ? "hidden"
                                            : "mb-4 text-center text-3xl items-center text-black  hover:text-gray-600 focus:outline-none focus:text-gray-600 z-10 border"}
                        >{name}
                        </button>
                        
                        
                    </div>
            </div>
            <div className={openWork ? "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-5/6 h-4/5 border ease-out duration-300 "
            :"hidden"}
            >
                <button onClick={handleWorkOpen}
                type="button"
                className="text-black flex flex-row-reverse px-8 py-8 hover:text-gray-600 focus:outline-none focus:text-gray-600 z-10"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={openWork ? 'w-6 h-6' : 'hidden'}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="flex flex-col md:flex-row gap-4 px-8">
                    <img src={logo}></img>
                    <p>ワークのテストです。</p>
                </div>
            </div>
    </div>
    )
}

export default Work