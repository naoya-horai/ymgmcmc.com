import React from "react";
import Banner from './banner'
import logo from'./logo.png'
import Work from'./Works/mtlxconverter'
import Work1 from'./Works/gptwrangle'
import Work2 from'./Works/renkon'
import Work3 from'./Works/woodmirror'

function Works(){
    return(
        <div className="bg-black">
            <Banner name='Works' image='bg-works'/>
        <body className="flex px-4 md:px-8  py-8 justify-center items-center">
           <div className="gap-2 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" >
            <Work name='mtlx-Unity Converter' video = '821114705'/>
            <Work1 name='gptWrangle' video = '810952452'/>
            <Work2 name='Re:NKON' video = '805780676'/>
            <Work3 name='木の鏡' video = '805782314' />
            </div>
            
        </body>
        </div>
        
    )
}

export default Works