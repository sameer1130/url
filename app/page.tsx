
import {Appbar} from "@/components/index"
import {MainHeader} from "@/components/index";
import {InputLink} from "@/components/index";
import {AdvancedStatistic} from "@/components/index";
import {Boost} from "@/components/index";
import {Footer} from "@/components/index";

export default function Home() {
  return (
    <div >
      <div className="px-16">

        <Appbar />
      </div>
      <div className="px-16">
        <MainHeader />
      </div>
      <div className="">
        <InputLink />
      </div>
      <div>
        <AdvancedStatistic />
      </div>
      <div>
        <Boost />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
