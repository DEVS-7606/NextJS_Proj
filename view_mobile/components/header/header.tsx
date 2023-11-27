import { SERVICES } from "@/data";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  toogleNavbar: () => void;
  toogleValue: boolean;
}

const Header = (props: IProps): JSX.Element => {
  const hamBurgerSVG: JSX.Element = (
    <svg
      className="hb"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 10"
      stroke="#000"
      strokeWidth=".4"
      fill="rgba(0,0,0,0)"
      strokeLinecap="round"
      style={{ cursor: "pointer" }}
    >
      <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
        <animate
          dur="0.2s"
          attributeName="d"
          values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
          fill="freeze"
          begin="start.begin"
        />
        <animate
          dur="0.2s"
          attributeName="d"
          values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
          fill="freeze"
          begin="reverse.begin"
        />
      </path>
      <rect width="10" height="10" stroke="none">
        <animate dur="2s" id="reverse" attributeName="width" begin="click" />
      </rect>
      <rect width="10" height="10" stroke="none">
        <animate
          dur="0.001s"
          id="start"
          attributeName="width"
          values="10;0"
          fill="freeze"
          begin="click"
        />
        <animate
          dur="0.001s"
          attributeName="width"
          values="0;10"
          fill="freeze"
          begin="reverse.begin"
        />
      </rect>
    </svg>
  );
  const viewLogoImage: JSX.Element = (
    <Image
      src="/images/viewLogo.svg"
      alt="Icon With Name"
      width={94}
      height={38}
      className="relative cursor-pointer max-xl:relative max-xl:w-76"
    />
  );

  const viewServices = (): JSX.Element[] => {
    return SERVICES.map((service, index) => {
      return (
        <li
          key={index}
          className="px-3 flex  cursor-pointer transition hover:ease-inout hover:bg-gray-200 items-center hover:py-2 rounded-md duration-0"
        >
          <Link
            href="#"
            className={service.isHavingImage ? "flex items-center" : ""}
          >
            {service.name}
            {service.isHavingImage && service.image && (
              <span>
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  width={service.image?.width}
                  height={service.image?.height}
                />
              </span>
            )}
          </Link>
        </li>
      );
    });
  };

  return (
    <div className="bg-white sticky top-0 left-0 w-full flex justify-between items-center px-20 z-10 lg: max-xl:px-2 py-2">
      <div className="w-full max-w-1200 relative flex justify-between items-center xl:py-1 mx-auto text-base">
        <div className="max-xl:flex max-xl:gap-4 max-xl:items-center">
          <button onClick={props.toogleNavbar} className="xl:hidden">
            {hamBurgerSVG}
          </button>
          <Link href="/mobile">{viewLogoImage}</Link>
        </div>
        <ul className="max-xl:hidden w-2/3 flex justify-center gap-x-2 font-medium items-center">
          {viewServices()}
        </ul>
        <button className="bg-seaBlue hover:bg-darkerSeaBlue leading-6 px-4 py-2.5 rounded-lg border-sky-700 max-xl:px-2 max-xl:py-1 ">
          <span className="font-bold text-base text-white max-xl:text-sm">
            Join / Sign In
          </span>
        </button>
      </div>
      <hr className="absolute top-68 w-full right-0 max-xl:top-52" />
    </div>
  );
};

export default Header;
