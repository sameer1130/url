"use client"
import Shorten from "@/images/bg-shorten-desktop.svg"
import Image from "next/image"
import PrimaryButton from "./PrimaryButton"
import DisplayLink from "./DisplayLink"
import { ChangeEvent,  useState } from "react";



async function createUrl(url: string){
    const res = await fetch("https://url-eosin.vercel.app/api/generate",{
        method: "POST",
        body: JSON.stringify({ url }),
    });

    if(!res.ok){
        throw new Error("Failed to fetch the data");
    }
    return res.json();
}

export default function InputLink(){

    const [inputUrl, setInputUrl] = useState<string | null>()
    const [code, setCode] = useState<string | null>()
    const [ogUrl, setOgUrl] = useState<string | null>()

    const handleOnClick = async(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
       console.log(inputUrl)
        if(inputUrl){
            
            const {data, statusCode, error} = await createUrl(inputUrl)
            console.log(data)
            if(statusCode == 200){
                console.log(error)
            }
            setCode(data.code)
            setOgUrl(data.originalUrl)
        }
         
    }

    const handleOnChange = (e : ChangeEvent<HTMLInputElement>) => {
        setInputUrl(e.target.value)
    }

    return(<div className="bg-slate-200 pb-24">
            <div className="flex justify-center items-center py-10">
                <div className="bg-[#2a2734] relative items-center rounded-lg -mt-28">
                    <div className="relative ">

                        <Image src={Shorten} alt="shorten" className="rounded-lg"/>
                    </div>
                    
                    
                    <div className="absolute  z-10 flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full p-4 space-x-4">
                        <input type="text" placeholder="Shorten a link here..."  onChange={handleOnChange}
                        className="w-full md:w-2/3 p-2 rounded-md py-3 mb-2"/>

                        <PrimaryButton onClick={handleOnClick} size="sm" label="Shorten it!" copy="true"/>
                    </div>
                </div>
            </div>    
            <div className={`flex justify-center p-8 ${code === undefined ? "hidden" : "visible"}`}>
                <DisplayLink originalLink={`${ogUrl}`}  value={` ${process.env.NEXT_PUBLIC_API_URL}/api/${code}`} />
            </div>
            <div className="flex justify-center p-8">
                {/* <DisplayLink /> */}
            </div>
    </div>
    )
}