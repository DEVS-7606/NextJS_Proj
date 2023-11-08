import Image from "next/image";
import Link from "next/link";

const DesktopPageView: () => JSX.Element = () => {
  return (
    <>
      <section
        className="text-start flex flex-row-reverse px-16 py-10 items-center
gap-4 max-lg:flex-col max-lg:px-0 max-lg:text-center"
      >
        <div
          className="w-1/2 flex px-20
justify-start flex-col gap-4 max-lg:w-full max-lg:px-0 max-lg:gap-4"
        >
          <h2 className="font-bold text-2xl ">
            Search, plan and research properties.
          </h2>
          <p className="font-normal text-base text-[#666666]">
            Search any property in Australia, get price data and suburb
            information, plus points of interest.
          </p>
          <div className="flex gap-4 my-4 max-lg:justify-center max-lg:mt-0 items-center">
            <Link href="#">
              <Image
                src="/images/AppStore.36362f83.svg"
                alt="app-store link"
                width={180}
                height={90}
                className="max-xl:w-[140px]
       max-xxs:w-[120px]"
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/PlayStore.7128a9f5.svg"
                alt="play-store link"
                width={180}
                height={90}
                className="max-xl:w-[140px]
      max-xxs:w-[120px]"
              />
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex justify-start max-lg:justify-start max-lg:w-full max-lg:px-4 max-sm:justify-center">
          <Image
            src="/images/landing-page-desktop.jpg"
            alt="mobile landing page"
            width={500}
            height={384}
          />
        </div>
      </section>
    </>
  );
};

export default DesktopPageView;
