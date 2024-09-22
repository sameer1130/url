import StatisticCard from "./StatisticCard";
import Brand from "@/images/icon-brand-recognition.svg"
import Detail from "@/images/icon-detailed-records.svg"
import Fully from "@/images/icon-fully-customizable.svg"


export default function AdvancedStatistic() {
    return(<div>
        <div className="bg-slate-200  items-center pb-20 ">
            <div className="flex justify-center p-4 font-extrabold text-5xl text-[#2a2734]">
                Advanced Statistics
            </div>
            <div className="flex justify-center p-4 text-xl text-slate-400 font-semibold text-center leading-relaxed">
            Track how your links are performing across the web with our <br></br>
            advanced statistics dashboard.
            </div>
            <div className="flex justify-center">
                <div className="flex justify-center p-4">
                    <StatisticCard 
                    logo={Brand}
                    title="Brand Recognition"
                    para="Boost your brand recognition with each click. Generic links don’t 
    mean a thing. Branded links help instil confidence in your content."
                    />
                </div>
                <div className="flex justify-center p-4 mt-16">
                    <StatisticCard 
                    logo={Detail}
                    title="Detailed Records"
                    para="Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions."
                    />
                </div>
                <div className="flex justify-center p-4 mt-32">
                    <StatisticCard 
                    logo={Fully}
                    title="Fully Customizable"
                    para="Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement."
                    />
                </div>
            </div>
            
        </div>
    </div>)
}