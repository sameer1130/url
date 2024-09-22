import Image from "next/image"
import LogoWhite from "@/images/logoWhite.svg"

export default function Footer(){
    return (<div >
        <div className="flex bg-[#2a2734] p-8 text-white items-center">
            <div className="w-1/3 flex justify-center items-center -mt-44">
                <Image src={LogoWhite} alt="logo" className="text-white"/>
            </div>
            <div className="w-2/3 p-8 items-center">
                <div className="flex justify-evenly p-8">
                    <div className="p-8">
                        <div className="font-bold text-lg pb-8">

                        Features
                        </div>
                        <div className="text-slate-400 cursor-pointer">

                            <div className="pb-4 hover:text-cyan-400">
                                Link Shortening
                            </div>
                            <div className="pb-4 hover:text-cyan-400">
                                Branded Links
                            </div>
                            <div className="pb-4 hover:text-cyan-400">
                                Analytics
                            </div>
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="font-bold text-lg pb-8">

                        Resources
                        </div>
                        <div className="text-slate-400 cursor-pointer">

                            <div className="pb-4 hover:text-cyan-400">
                                Blog
                            </div>
                            <div className="pb-4 hover:text-cyan-400">
                                Developers
                            </div>
                            <div className="pb-4 hover:text-cyan-400">
                                Support
                            </div>
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="font-bold text-lg pb-8">

                        Company
                        </div>
                        <div className="text-slate-400 cursor-pointer">

                            <div className="pb-4 hover:text-cyan-400">
                                About
                            </div>
                            <div className="pb-4 hover:text-cyan-400">
                                Our Team
                            </div>
                            <div className="pb-4 hover:text-cyan-400">
                                Careers
                            </div>
                            <div className="pb-4 hover:text-cyan-400">
                                Contact
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>)
}