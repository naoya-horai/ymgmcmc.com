import React from "react";
import Banner from './banner'
import logo from './logo.png'
function About(){
    return(
        <div>
        <Banner name='About' image='bg-about'/>
        <body className="px-4 md:px-8">
        
        
        <div className="flex justify-center px-8 py-4 text-lg">ymgmcmc / Naoya Horai
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 border-b justify-center items-center px-8 md:px-20 lg:px-48 xl:px-64 py-4 text-center md:text-left">
            <img src={logo} className='rounded-full border h-48 w-48 z=1'></img>
        <div>        
            <p>3DCG Artist / Engeneer </p>
            <p></p>
            <p>東京国際工科専門職大学</p>
            <p>情報工学科 IoTシステムコース 在学</p>
            <p>2025年卒業予定</p>
            <p></p>
            <p className="text-left">Pythonを中心としたソフトウェア、ツール開発や、Blender、Houdini、Substanceを用いた主にVR向けのフォトリアルなプロップ・環境3Dモデルを作成しています。</p>
            <p>趣味はDJ、カメラ(スナップ中心)</p>
        </div>
        
        </div>
        <div className="flex flex-col md:flex-row justify-start px-8 md:px-20 lg:px-48 xl:px-64 py-4 gap-4 md:gap-8">
            <div className="flex flex-col text-left">
            <p className="text-lg">スキル</p>
            <p> </p>
            <p>・Python</p>
            <p>2021/01〜 Pyside2を中心に各種ツール作成</p>
            <p> </p>
            <p>・Unity</p>
            <p>2017/12〜 BPR中心、ライティング中心</p>
            <p> </p>
            <p>・Blender</p>
            <p>2017/12〜 ハードサーフェスモデリング中心</p>
            <p> </p>
            <p>・Substance Painter</p>
            <p>2018/09〜 プロシージャルテクスチャ生成、テクスチャリング</p>
            <p> </p>
            <p>・Houdini</p>
            <p>2022/03〜 Soraris、PDG、SOP中心</p>
            <p> </p>
            <p>・c++</p>
            <p>2020/10〜 Atmel、UE4</p>
            </div>

            <div className="flex flex-col text-left">
            <p className="text-lg">興味</p>
            <p> </p>
            <p>・USD、パイプライン</p>
            <p>アーティストがより効率的に作業ができる環境づくりに興味があります。</p>
            <p></p>
            <p>・Shader</p>
            <p>よりリアルなグラフィックをリアルタイムで表現するための技術に興味があります。</p>
            
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-start px-8 md:px-20 lg:px-48 xl:px-64 py-4 gap-4 md:gap-8">
            <div className="flex flex-col text-left">
            <p className="text-lg">環境</p>
            <p> </p>
            <p>・windows PC</p>
            <p>CPU:Ryzen9 3900X</p>
            <p>RAM:32GB</p>
            <p>GPU:RTX 2070 super</p>
            <p> </p>
            <p>・mac PC</p>
            <p>MacBook pro m1 pro 14'</p>
            <p> </p>
            <p>・Licenses</p>
            <p>Houdini indie</p>
            <p>Adobe CC</p>
            <p> </p>
            <p>・VR Devices</p>
            <p>Valve Index</p>
            <p>Meta Quest 2</p>
            <p> </p>
            <p>・組み込み系</p>
            <p>m5 matrix</p>
            <p>Raspberry Pi 4 8GB</p>
            <p>NVIDIA Jetson nano 2GB</p>
            <p>その他デバイス</p>
            <p>sigma fp</p>
            <p>ミキサー、オーディオインターフェース</p>
            </div>
        </div>
        
        </body>
        </div>
    )
}

export default About