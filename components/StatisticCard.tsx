import Image from "next/image"



export default function StatisticCard({logo, title, para} :{
    logo: string,
    title: string,
    para: string
}){
    return (<div>
        

<div className="max-w-sm mt-8 py-8 p-6 bg-white border border-gray-200 rounded-lg shadow ">
    <div className="-mt-16  bg-[#2a2734] flex justify-center items-center w-20 h-20 rounded-full">
        <Image src={logo} alt="brand" className="w-10 h-10 "/>
    </div>
    <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 mt-8 px-4">{title}</h5>
    </a>
    <p className="mb-3 font-semibold text-lg text-gray-200 dark:text-gray-400 mt-4 px-4">{para}</p>
    
</div>

    </div>)
}