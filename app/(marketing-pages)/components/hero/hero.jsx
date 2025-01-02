import Image from "next/image";
import Advertisement from "./advertisement";
import Badge from "./badge";
import Banner from "./banner";
import lineVector from "@/public/assets/img/line-vector.svg";
import Marque from "./marque";

const Hero = () => {
  return (
    <section className="via-36% relative -top-[210px] flex flex-col items-center overflow-hidden bg-gradient-to-b from-[#CAE7FF] via-[#E1F2FE] to-white pt-[258px] md:pt-[295px]">
      <Image
        src={lineVector}
        width={1667}
        height={690}
        alt="decorative line vector"
        className="absolute top-0"
      />
      <Badge />
      <Banner />
      <Marque />
      {/* <Advertisement /> */}
    </section>
  );
};

export default Hero;
