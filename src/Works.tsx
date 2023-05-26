import React from "react";
import Banner from './banner'
import logo from'./logo.png'
import Work from'./Work'
function Works(){
    return(
        <div className="bg-black">
            <Banner name='Works' image='bg-works'/>
        <body className="flex px-4 md:px-8  py-8 justify-center items-center">
           <div className="gap-2 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" >
            <Work name='ワーク1'/>
            <Work name='ワーク2'/>
            <Work name='ワーク3'/>
            <Work name='ワーク4'/>
            <Work name='ワーク5'/>
            <Work name='ワーク6'/>
            </div>
            
        </body>
        </div>
        
    )
}

export default Works