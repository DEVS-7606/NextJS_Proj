import Image from "next/image";
import suburbImg from "../../../../public/images/0000498-s1-C501075.jpg";

const SuburbProfile = (props: { suburb: string }) => {
  let src = suburbImg.src;
  return (
    <div className="border-t mt-4 pt-8 lg:mt-8 text-almostBlack">
      <a
        href="#"
        className="flex border mb-10 mt-4 shadow-md rounded-xl overflow-hidden"
      >
        {suburbImg && (
          <div className="mt-5 md:mt-0 w-[90px] h-[99px] md:w-[400px] relative hidden md:block">
            <span>
              <Image loader={() => src} src={src} alt="suburb" layout="fill" />
            </span>
          </div>
        )}
        <div className="p-4 flex flex-1 items-center">
          <div className="w-full">
            <div className="flex items-center">
              <p className="font-bold text-sm">
                VIEW <span className="capitalize">{props.suburb}</span> Profile
              </p>
            </div>
            <p className="text-sm font-normal mt-1">
              Find out latest median prices and market data
            </p>
          </div>
          <span>{">"}</span>
        </div>
      </a>
    </div>
  );
};

export default SuburbProfile;
