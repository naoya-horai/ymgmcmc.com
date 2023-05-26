import React from "react";

const Work = ({name}: any) =>{
    return(
        <div className="h-60 w-80 bg-white flex items-center justify-center">
                <div className=" px-4 md:px-8">
                    <h2 className="mb-4 text-center text-3xl text-black items-center border md:mb-6 md:text-4xl">{name}</h2>
                </div>
        </div>
    )
}

export default Work