
import Image from "next/image";
import Working from "@/images/illustration-working.svg"
import PrimaryButton from "./PrimaryButton";

export default function MainHeader(){
    return (<div>
        <div className="flex justify-between items-center p-4 mb-20 py-20 border-slate-300">
            <div className="p-6">
                <div className="font-extrabold text-7xl text-slate-800 p-2 leading-tight">
                    More Than just <br/>
                     Shorter Links
                </div>
                
                <div className="text-slate-400 text-2xl font-semibold p-2 leading-normal">
                    Build your brand&rsquo;s recognition and get detailed <br/>
                    insights on how your links are performing.    
                </div>
                <div className="pt-6">

                    <PrimaryButton size='lg' label='Get Started' copy=''/>
                </div>
            
            </div>
            <div className="">
                <Image src={Working} alt="working" />
            </div>
        </div>
    </div>)
}