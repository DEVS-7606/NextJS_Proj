import Button from "@/shared/components/button/button";
import HeroContainer from "@/shared/components/heroContainer/heroContainer";
import React from "react";
import faceBook from "../../../../public/images/facebook.svg";
import twitter from "../../../../public/images/twitter.svg";
import mail from "../../../../public/images/mail.svg";
import PropertyImage from "../../../../public/images/grandreve.jpg";
import Image from "next/image";

interface Iprops {
  title: string;
  fareNum: string;
  fare: string;
  area: string;
  state: string;
  postalCode: string;
  shortenState: string;
}

const AddressBanner = ({
  title,
  fareNum,
  fare,
  area,
  state,
  postalCode,
  shortenState,
}: Iprops) => {
  const renderBreadCrum = () => {
    return (
      <div className="flex gap-4 hover:shadow-none md:px-0 lightScrollBar text-gray-500 my-4 text-sm lg:gap-2">
        <span className="flex gap-2">
          <a href="#" className="hover:underline hover:text-seaBlue">
            New Developments
          </a>
          {">"}
        </span>
        <span className="flex gap-2">
          <a href="#" className="hover:underline hover:text-seaBlue">
            {shortenState}
          </a>
          {">"}
        </span>
        <span className="flex gap-2">
          <a href="#" className="hover:underline hover:text-seaBlue">
            {area}
          </a>
          {">"}
        </span>
        <span className="text-black">{title}</span>
      </div>
    );
  };

  const renderEnquireBtn = () => {
    return (
      <Button
        title="Enquire Now"
        className="w-40 px-0 py-2 gap-2"
        textColor="white"
        Icons={
          <i
            className="fa-regular fa-envelope-open"
            style={{ color: "#ffffff" }}
          ></i>
        }
      />
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
          <Image src={twitter} alt="twitter" width={16} height={16} />
        </a>
        <a
          href="#"
          className="bg-gray-200 w-8 h-8 flex justify-center rounded-full px-1 py-1"
        >
          <Image src={mail} alt="mail" width={16} height={16} />
        </a>
      </div>
    );
  };

  const renderImageContainer = () => {
    return (
      <div className="w-full h-44 lg:w-2/5 relative overflow-hidden lg:h-auto object-cover">
        <div className="absolute z-10 top-4 right-4 text-black font-bold bg-white px-4 py-4 hover:bg-zinc-300 active:bg-zinc-300 rounded-lg text-sm ">
          8 Photos
        </div>
        <Image
          src={PropertyImage}
          alt="property Image"
          layout="fill"
          className="w-full relative h-full cursor-pointer rounded-lg object-cover"
        />
      </div>
    );
  };

  return (
    <div>
      {renderBreadCrum()}
      <div className="flex flex-col lg:flex-row w-full gap-4">
        <HeroContainer
          title={title}
          subTitle={`${fareNum} ${fare}, ${area}, ${state} ${postalCode}`}
          className="w-full lg:w-3/5 flex flex-col h-full gap-8  p-6 md:px-16 md:py-12 "
        >
          <div className="flex flex-col lg:flex-row gap-4 lg:justify-between">
            {renderEnquireBtn()}
            {renderSocialMediaIcons()}
          </div>
        </HeroContainer>
        {renderImageContainer()}
      </div>
    </div>
  );
};

export default AddressBanner;
