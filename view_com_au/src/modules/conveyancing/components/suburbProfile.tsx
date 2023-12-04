import Image from "next/image";
import suburbImg from "../../../../public/images/0000498-s1-C501075.jpg";

const SuburbProfile = (props: { suburb: string }) => {
  return (
    <div className="border-t mt-4 pt-8 lg:mt-8">
      <div className="flex border mb-10 mt-4 shadow-md rounded-xl overflow-hidden">
        <div className="mt-5 md:mt-0 w-24 h-auto md:w-72 relative hidden md:block">
          <span>
            <Image src={suburbImg} alt="suburb" layout="fill" />
          </span>
        </div>
        <div className="w-full">
          <div className="p-4 flex flex-1 items-center1">
            <p className="font-bold">
              VIEW <span className="capitalize">{props.suburb}</span> Profile
            </p>
          </div>
          <div className="p-4 flex flex-1 items-center">
            <p className="text-sm font-normal mt-1">
              Find out latest median prices and market data
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuburbProfile;
