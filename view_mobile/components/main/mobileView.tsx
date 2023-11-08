import Image from "next/image";
import Link from "next/link";

const MobilePageView: () => JSX.Element = () => {
  return (
    <section className="text-start flex px-16 py-24 items-center max-lg:flex-col max-lg:px-0 max-lg:text-center max-lg:gap-2 max-lg:pt-16 max-lg:pb-10 max-xs:pb-16 ">
      <div className="w-1/2 flex flex-col gap-4 max-lg:w-full ">
        <h2 className="font-bold text-2xl ">Save and track.</h2>
        <p className="font-normal text-base text-[#666666]">
          Shortlist your favorite properties to keep track of upcoming open for
          inspections and auction. Login with your resi.uatz.view.com.au account
          to sync your saved properties between your computer and mobile
          devices.
        </p>
        <div className="flex gap-4 my-8 max-lg:justify-center max-lg:mt-0 items-center">
          <Link href="#">
            <Image
              src="/images/AppStore.36362f83.svg"
              alt="app-store link"
              width={180}
              height={90}
              className="max-xs:w-[140px] max-xxs:w-[120px]"
            />
          </Link>
          <Link href="#">
            <Image
              src="/images/PlayStore.7128a9f5.svg"
              alt="play-store link"
              width={180}
              height={90}
              className="max-xs:w-[140px] max-xxs:w-[120px]"
            />
          </Link>
        </div>
      </div>
      <div className="w-1/2 flex justify-end max-lg:justify-start max-lg:w-full max-lg:px-20 max-sm:justify-center">
        <Image
          src="/images/landing-page-mobile.cc546c66.jpg"
          alt="mobile landing page"
          width={320}
          height={480}
          className="max-xs:w-[350px] max-xxs:w-[300px]"
        />
      </div>
    </section>
  );
};

export default MobilePageView;
