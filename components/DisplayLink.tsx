"use client"
import { useState } from "react";
import PrimaryButton from "./PrimaryButton";



export default function DisplayLink({value, originalLink } :{
    value: string,
    originalLink: string
}){
    const [copy, setCopy] = useState<boolean>(false)
    const handleOnClick = () =>{
        if(copy === false){
            navigator.clipboard.writeText(`${value}`)  
            setCopy(true)
            alert("Link copied")
        }else{
            setCopy(false)
        }
          
    }
    return(<div className=" ">
        <div className="flex justify-between   w-full items-center p-4 bg-white rounded-md border-slate-100">
        <div className="p-4 pr-64">
            {`${originalLink}`}
        </div>
        <div className="flex justify-center items-center pl-64">
            <div className="p-2">
            {`${value} `}
            </div>
            <PrimaryButton onClick={handleOnClick} size="sm" label="Copy" copy="true"/>
        </div>

    </div>
        </div>

    )
}