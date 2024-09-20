import Image from "next/image";
import {Appbar} from "@/components/index"
import MainHeader from "@/components/MainHeader";

export default function Home() {
  return (
    <div >
      <div className="px-16">

        <Appbar />
      </div>
      <div className="px-16">
        <MainHeader />
      </div>
    </div>
  );
}
