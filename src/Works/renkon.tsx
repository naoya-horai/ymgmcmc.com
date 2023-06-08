import React, {useState} from "react";
import logo from './Asset/bbgabout.png'
import Vimeo from '@u-wave/react-vimeo'

const Work2 = ({name,video}: any) =>{
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
            <div className={openWork ? "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-7" : "hidden"} >
            <div className={openWork ? "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-5/6 h-4/5 border ease-out duration-300 z-8"
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
                    <Vimeo video={video} className="flex w-full h-max-full md:w-2/3 justify-center md:items-center"/>
                    <p>Unity 1week Gamejamにてチームで作成したゲーム。</p>
                    <p>レンコンをモチーフにしたマルチプレイゲーム。</p>
                    <p>制作時期:2022年12月</p>
                    <p>制作期間:1週間</p>
                    <p>使用ツール:VSCode Unity Houdini Blender Substance Painter</p>
                    <p>担当分野: 3Dモデリング全般、ロゴデザイン、レイアウト</p>
                </div>
            </div>
            </div>
    </div>
    )
}

export default Work2