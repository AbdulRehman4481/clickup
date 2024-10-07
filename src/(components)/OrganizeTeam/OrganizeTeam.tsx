import Image from "next/image";
import image4 from "../../../public/assets/images/portfilio1avif.avif";
import image5 from "../../../public/assets/images/portfolio 2.avif";
import image6 from "../../../public/assets/images/portfolio 3.avif";
import image7 from "../../../public/assets/images/portfolio 4.avif";

export default function OrganizeTeam() {
  return (
    <div className="flex justify-center flex-col items-center mx-5">
        <div className="flex flex-col items-center">
          <h1 className="font-[family-name:var(--font-axiforma-sans)] text-[20px] md:text-[41px] font-[900] leading-[51px] text-center mb-1">
          Organize your teams objectives
          </h1>
        </div>
      <div className="flex flex-col justify-center items-center md:flex-row md:gap-6 max-w-[1080px] gap-6 w-full py-[20px]">
        <div className="w-full md:h-[450px]  border rounded-xl">
          <Image src={image4} alt="image" className="rounded-t-[16px]   md:w-[552px] md:h-[300px] h-[200px] object-cover "  />
          <div className=" md:p-[30px] p-[10px]  rounded-b-[16px]">
            <h1 className="font-[family-name:var(--font-axiforma-sans)] md:text-[20px] font-extrabold">
              Product Releases
            </h1>
            <p className="font-[family-name:var(--font-axiforma-sans)] md:text-[15px] text-[13px] font-medium">
              Organize the sprints, small components, and entire features needed
              for a successful release.
            </p>
          </div>
        </div>

        <div className="w-full h-[300px] md:h-[450px]  border rounded-xl ">
          <Image src={image5} alt="image" className="rounded-t-[16px] md:w-[552px] md:h-[300px] h-[200px] object-cover "   />
          <div className=" md:p-[30px] p-[10px] rounded-b-[16px]">
            <h1 className="font-[family-name:var(--font-axiforma-sans)] md:text-[20px] font-extrabold">
              Marketing Campaigns
            </h1>
            <p className="font-[family-name:var(--font-axiforma-sans)] md:text-[15px] text-[13px] font-medium ">
              Monitor your campaigns in one place, so you can monitor spend,
              effort, and analytics in real time.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row md:gap-6 max-w-[1080px] gap-6 w-full py-[20px] ">
        <div className="w-full h-[300px] md:h-[450px]  border rounded-xl">
          <Image src={image6} alt="image" className="rounded-t-[16px]   md:w-[552px] md:h-[300px] h-[200px]"  />
          <div className=" md:p-[30px] p-[10px] rounded-b-[16px]">
            <h1 className="font-[family-name:var(--font-axiforma-sans)] md:text-[20px] font-extrabold">
              Product Releases
            </h1>
            <p className="font-[family-name:var(--font-axiforma-sans)] md:text-[15px] text-[13px] font-medium">
              Organize the sprints, small components, and entire features needed
              for a successful release.
            </p>
          </div>
        </div>

        <div className="w-full h-[300px] md:h-[450px]  border rounded-xl ">
          <Image src={image7} alt="image" className="rounded-t-[16px] md:w-[552px] md:h-[300px] h-[200px]  "   />
          <div className=" md:p-[30px] p-[10px] rounded-b-[16px]">
            <h1 className="font-[family-name:var(--font-axiforma-sans)] md:text-[20px] font-extrabold">
              Marketing Campaigns
            </h1>
            <p className="font-[family-name:var(--font-axiforma-sans)] md:text-[15px] text-[13px] font-medium ">
              Monitor your campaigns in one place, so you can monitor spend,
              effort, and analytics in real time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
