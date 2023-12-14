import Image from "next/image";
import suburbImg from "../../../../public/images/0000498-s1-C501075.jpg";

const SuburbProfile = (props: { suburb: string }) => {
  return (
    <a
      href="#"
      className="flex border mb-10 border-t mt-4 lg:mt-16 text-almostBlack shadow-md rounded-xl overflow-hidden"
    >
      {suburbImg && (
        <div className="mt-5 md:mt-0 w-90 h-99 md:w-190 relative hidden md:block">
          <Image
            src={suburbImg.src}
            alt="suburb"
            layout="fill"
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4 flex flex-1 items-center">
        <div className="w-full">
          <div className="flex items-center">
            <p className="font-bold text-base">
              VIEW <span className="capitalize">{props.suburb}</span> Profile
            </p>
          </div>
          <p className="text-base font-normal mt-1">
            Find out latest median prices and market data
          </p>
        </div>
        <span>{">"}</span>
      </div>
    </a>
  );
};

export default SuburbProfile;
