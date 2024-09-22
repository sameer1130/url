import Shorten from "@/images/bg-shorten-desktop.svg"
import Image from "next/image"
import PrimaryButton from "./PrimaryButton"
import DisplayLink from "./DisplayLink"


export default function InputLink(){
    return(<div className="bg-slate-200 pb-24">
            <div className="flex justify-center items-center py-10">
                <div className="bg-[#2a2734] relative items-center rounded-lg -mt-28">
                    <div className="relative ">

                        <Image src={Shorten} alt="shorten" className="rounded-lg"/>
                    </div>
                    
                    
                    <div className="absolute  z-10 flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full p-4 space-x-4">
                        <input type="text" placeholder="Shorten a link here..." className="w-full md:w-2/3 p-2 rounded-md py-3 mb-2"/>

                        <PrimaryButton size="sm" label="Shorten it!" copy="true"/>
                    </div>
                </div>
            </div>    
            <div className="flex justify-center p-8">
                <DisplayLink />
            </div>
            <div className="flex justify-center p-8">
                <DisplayLink />
            </div>
    </div>
    )
}