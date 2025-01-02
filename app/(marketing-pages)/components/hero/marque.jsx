import marqueLeft1 from "@/public/assets/img/marque-left-1.svg";
import marqueRight1 from "@/public/assets/img/marque-right-1.svg";
import marqueLeft2 from "@/public/assets/img/marque-left-2.svg";
import marqueRight2 from "@/public/assets/img/marque-right-2.svg";
import marqueLeft3 from "@/public/assets/img/marque-left-3.svg";
import marqueRight3 from "@/public/assets/img/marque-right-3.svg";
import marqueLeft4 from "@/public/assets/img/marque-left-4.svg";
import marqueRight4 from "@/public/assets/img/marque-right-4.svg";
import marqueLeft5 from "@/public/assets/img/marque-left-5.svg";
import marqueRight5 from "@/public/assets/img/marque-right-5.svg";
import Image from "next/image";

export default function Marque() {
  return (
    <div className="flex w-[200vw] gap-10">
      {/* single content */}
      <div className="flex items-end">
        <div>
          <Image
            src={marqueLeft1}
            height={383}
            width={296}
            alt="showcasing customer review"
            className="rounded-2xl"
          />
        </div>
        <div>
          <Image
            src={marqueRight1}
            height={228}
            width={176}
            alt="customer image"
            className="relative bottom-6 right-6 rounded-2xl"
          />
        </div>
      </div>
      <div className="flex items-end">
        <div>
          <Image
            src={marqueLeft2}
            height={383}
            width={296}
            alt="showcasing customer review"
            className="rounded-2xl"
          />
        </div>
        <div>
          <Image
            src={marqueRight2}
            height={228}
            width={176}
            alt="customer image"
            className="relative bottom-6 right-6 rounded-2xl"
          />
        </div>
      </div>
      <div className="flex items-end">
        <div>
          <Image
            src={marqueLeft3}
            height={383}
            width={296}
            alt="showcasing customer review"
            className="rounded-2xl"
          />
        </div>
        <div>
          <Image
            src={marqueRight3}
            height={228}
            width={176}
            alt="customer image"
            className="relative bottom-6 right-6 rounded-2xl"
          />
        </div>
      </div>
      <div className="flex items-end">
        <div>
          <Image
            src={marqueLeft4}
            height={383}
            width={296}
            alt="showcasing customer review"
            className="rounded-2xl"
          />
        </div>
        <div>
          <Image
            src={marqueRight4}
            height={228}
            width={176}
            alt="customer image"
            className="relative bottom-6 right-6 rounded-2xl"
          />
        </div>
      </div>
      <div className="flex items-end">
        <div>
          <Image
            src={marqueLeft5}
            height={383}
            width={296}
            alt="showcasing customer review"
            className="rounded-2xl"
          />
        </div>
        <div>
          <Image
            src={marqueRight5}
            height={228}
            width={176}
            alt="customer image"
            className="relative bottom-6 right-6 rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
