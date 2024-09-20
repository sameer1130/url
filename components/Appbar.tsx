import Image from 'next/image';
import Logo from "../images/logo.svg"
import PrimaryButton from './PrimaryButton';


export default function Appbar() {


    return (<div>
        <div className="flex justify-between items-center"> 
            <div className="flex justify-center p-4 items-center">
                <div className="p-8 ">
                    <Image src={Logo} alt="logo"  />
                </div>
                <div className='flex justify-center p-8 font-bold text-slate-900 text-lg  cursor-pointer'>
                <div className='p-4  hover:text-slate-500'>
                    Features
                </div>
                <div className='p-4 hover:text-slate-500'>
                    Pricing
                </div>
                <div className='p-4 hover:text-slate-500'>
                    Resources
                </div>
                </div>
                
            </div>
            <div className='flex justify-center items-center p-8 px-8'>
                <div className='p-8 hover:text-slate-500 text-slate-900 font-bold' >
                    Login
                </div>
                <div className='p-4 '>
                    <PrimaryButton size='' label='Sign Up' copy=''/>
                </div>
            </div>
            
            
        </div>
    </div>)
}