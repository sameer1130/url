import Shorten from "@/images/bg-shorten-desktop.svg"
import Image from "next/image"
import PrimaryButton from "./PrimaryButton"


export default function InputLink(){
    return(<div className="flex justify-center items-center  py-10">
        <div className="bg-[#2a2734] relative items-center rounded-lg ">
            <div className="relative ">

                <Image src={Shorten} alt="shorten" className="rounded-lg"/>
            </div>
            
            
            <div className="absolute  z-10 flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full p-4 space-x-4">
                <input type="text" placeholder="Shorten a link here..." className="w-full md:w-2/3 p-2 rounded-md"/>

                <PrimaryButton size="sm" label="Shorten it!" copy="true"/>
            </div>
        </div>
    </div>)
}