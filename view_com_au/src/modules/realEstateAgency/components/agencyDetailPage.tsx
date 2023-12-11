import HeroContainer from "@/shared/components/heroContainer/heroContainer";
import PropertyImage from "../../../../public/images/grandreve.jpg";
import agencyLogo from "../../../../public/images/biggingScottLogo.jpg";
import internetExplorer from "../../../../public/images/internetExplore.svg";
import faceBook from "../../../../public/images/facebook.svg";
import instagram from "../../../../public/images/instagram.svg";
import linkedIn from "../../../../public/images/linkedIn.svg";
import Image from "next/image";
import Button from "@/shared/components/button/button";

interface Iprops {
  details: any;
}

const AgencyDetailPage = (props: Iprops) => {
  const renderImageContainer = () => {
    return (
      <div className="w-full h-56 md:h-auto mt-4 md:mt-0 md:w-2/5">
        <div className="w-full h-full relative">
          <span>
            <Image
              src={PropertyImage}
              alt="property Image"
              layout="fill"
              className="w-full relative h-full cursor-pointer rounded-xl object-cover"
            />
          </span>
        </div>
      </div>
    );
  };
  const renderAgencyLogo = () => {
    return (
      <div className="bg-[#010037] w-full">
        <div className="flex justify-center items-center px-5 py-2 h-full">
          <div className="flex justify-center items-center relative h-6 w-28">
            <Image src={agencyLogo} alt={props.details.data.name} />
          </div>
        </div>
      </div>
    );
  };
  const renderWebsiteLink = () => {
    return (
      <a
        href={props.details.data.website}
        className="flex flex-row items-center gap-1 my-2"
      >
        <Image src={internetExplorer} alt="globe" width={22} height={22} />
        <span className="underline text-seaBlue text-sm">
          {props.details.data.website}
        </span>
      </a>
    );
  };
  const renderEmailUsAndCallUsBtn = () => {
    return (
      <div className="flex gap-2">
        <Button
          title="Email us"
          Icons={
            <i
              className="fa-regular fa-envelope-open"
              style={{ color: "#ffffff" }}
            ></i>
          }
          textColor="white"
          titleClassName="ml-2"
          className="px-4 py-2"
        />
        <Button
          title="Call us"
          textColor="black"
          Icons={<i className="fa-solid fa-phone"></i>}
          titleClassName="ml-2 inline"
          className="px-4 py-2 bg-white hover:bg-slate-300"
        />
      </div>
    );
  };
  const renderSocialMediaIcons = () => {
    return (
      <div className="flex gap-4">
        <a
          href="#"
          className="bg-gray-200 w-8 h-8 flex justify-center rounded-full px-1 py-1"
        >
          <Image src={faceBook} alt="faceBook" width={16} height={16} />
        </a>
        <a
          href="#"
          className="bg-gray-200 w-8 h-8 flex justify-center rounded-full px-1 py-1"
        >
          <Image src={instagram} alt="twitter" width={16} height={16} />
        </a>
        <a
          href="#"
          className="bg-gray-200 w-8 h-8 flex justify-center rounded-full px-1 py-1"
        >
          <Image src={linkedIn} alt="mail" width={16} height={16} />
        </a>
      </div>
    );
  };

  return (
    <div className="block md:flex">
      <div className="rounded-lg overflow-hidden border w-full md:mr-4 md:w-3/5">
        {renderAgencyLogo()}
        <HeroContainer
          className="p-6 md:px-16 md:py-12"
          title={props.details.data.name}
          subTitle={props.details.data.address}
          isRounded={"none"}
        >
          <div className="flex flex-col gap-2">
            {renderWebsiteLink()}
            <div className="w-full flex flex-col items-start mt-4 gap-2 sm:flex-row sm:justify-between sm:items-center">
              {renderEmailUsAndCallUsBtn()}
              {renderSocialMediaIcons()}
            </div>
          </div>
        </HeroContainer>
      </div>
      {renderImageContainer()}
    </div>
  );
};

export default AgencyDetailPage;
