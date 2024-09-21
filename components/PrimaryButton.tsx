

export default function PrimaryButton({label, size, copy, onClick}:{
    label: string,
    size: string,
    copy: string,
    onClick? : ()=> void
}){

    return (<div>
        <button type="button" onClick={onClick} className={`text-white bg-gradient-to-r from-cyan-400 via-cyan-500
         to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
         focus:ring-cyan-300 dark:focus:ring-cyan-800 
         font-bold rounded-full text-sm  py-2.5 text-center me-2 mb-2 ${size === "lg" ? "px-16" : "px-8"} ${copy === "true" ? "rounded-md" : "rounded-full"}`}>{label}</button>

    </div>)
}