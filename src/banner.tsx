import React from "react";
import bgcover from "./bgcover.jpg"

const Banner = ({name,abstract}: any) =>{
    return(
        
        <div className="bg-cover bg-center bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

                <h2 className="mb-4 text-center text-3xl text-black md:mb-6 md:text-4xl">{name}</h2>
            </div>
        </div>
    )
}


export default Banner