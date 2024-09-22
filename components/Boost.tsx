import Image from "next/image"

import BoostImage from "@/images/bg-boost-desktop.svg"
import PrimaryButton from "./PrimaryButton"

export default function Boost(){
    return (<div>
        <div className="relative">
            <div>

                <Image src={BoostImage} alt="boost" className="w-full bg-[#2a2734]"/>
            </div>
        
            <div className="pt-8 absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center">
                <div className="font-bold text-white text-4xl p-4 ">
                    Boost Your link Today
                </div>
                <div className="p-2 pt-4 flex justify-center items-center">

                    <PrimaryButton size="lg" label="Get Started" copy=""/>
                </div>
            </div>
        </div>
    </div>
    
    )
}

