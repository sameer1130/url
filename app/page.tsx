import Image from "next/image";
import {Appbar} from "@/components/index"
import MainHeader from "@/components/MainHeader";
import InputLink from "@/components/InputLink";

export default function Home() {
  return (
    <div >
      <div className="px-16">

        <Appbar />
      </div>
      <div className="px-16">
        <MainHeader />
      </div>
      <div>
        <InputLink />
      </div>
    </div>
  );
}
