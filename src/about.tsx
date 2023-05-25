import React from "react";
import Banner from './banner'
import logo from './logo.png'
function About(){
    return(
        <div>
        <Banner name='About' abstract='who is ymg'/>
        <div className="flex justify-center px-8 py-4 text-lg">ymgmcmc / Naoya Horai
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center px-4 md:px-20 py-4">
            <img src={logo} className='rounded-full drop-shadow h-48 w-48'></img>
        <div>        
            <p>3DCG Artist / Engeneer </p>
            <p>東京国際工科専門職大学</p>
            <p>情報工学科 iotシステムコース 在学</p>
            <p>2025年卒業予定</p>
        </div>
        
        </div>
        <div className="flex justify-center px-8 py-4">
            <p>Pythonを中心としたソフトウェア、ツール開発や、Blender、Houdini、Substanceを用いたフォトリアルなプロップ・環境3Dモデルを作成しています。</p>
        </div>
        </div>
    )
}

export default About