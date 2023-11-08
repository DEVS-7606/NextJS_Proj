import Image from "next/image";
import Link from "next/link";

const Header: (props: {
  toogleNavbar: () => void;
  toogleValue: boolean;
}) => JSX.Element = (props: {
  toogleNavbar: () => void;
  toogleValue: boolean;
}) => {
  return (
    <>
      <div className="bg-white fixed top-0 left-0 w-full flex justify-between items-center px-20 z-10 max-xl:px-2 py-2">
        <div className="w-full max-w-7xl relative flex justify-between items-center xl:py-1 mx-auto text-base">
          <div className="max-xl:flex max-xl:gap-4 max-xl:items-center">
            <button onClick={props.toogleNavbar} className="xl:hidden">
              <svg
                className="hb"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 10"
                stroke="#000"
                stroke-width=".4"
                fill="rgba(0,0,0,0)"
                stroke-linecap="round"
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
                  <animate
                    dur="2s"
                    id="reverse"
                    attributeName="width"
                    begin="click"
                  />
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
            </button>
            <Link href="/mobile">
              <Image
                src="/images/viewLogo.svg"
                alt="Icon With Name"
                width={94}
                height={38}
                className="relative fill-[#333333] bg-[#ffffff] cursor-pointer max-xl:relative max-xl:w-[76px]"
              />
            </Link>
          </div>
          <div className="max-xl:hidden">
            <ul className="w-full flex justify-center gap-x-2 font-medium items-center">
              <li className="px-3 flex gap-3 cursor-pointer transition hover:ease-out hover:bg-gray-200 items-center hover:py-2 rounded-md ">
                <Link href="#">Buy</Link>
              </li>
              <li className="px-3  flex gap-3 cursor-pointer transition hover:ease-out hover:bg-gray-200 items-center hover:py-2 rounded-md ">
                <Link href="#">Rent</Link>
              </li>
              <li className="px-3  flex gap-3 cursor-pointer transition hover:ease-out hover:bg-gray-200 items-center hover:py-2 rounded-md ">
                <Link href="#">Sold</Link>
              </li>
              <li className="px-3 flex gap-3 cursor-pointer transition hover:ease-out hover:bg-gray-200 items-center hover:py-2 rounded-md ">
                <Link href="#">Estimate</Link>
              </li>
              <li className="px-3  flex gap-0 cursor-pointer transition hover:ease-out hover:bg-gray-200 items-center hover:py-2 rounded-md ">
                <Link href="#" className="flex items-center">
                  <span>More</span>
                  <span>
                    <Image
                      src="/images/small_arrow.svg"
                      alt="arrow"
                      width={20}
                      height={30}
                    />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <button className="bg-[#0073cf] hover:bg-[#0464b0] leading-6 px-4 py-2.5 rounded-lg border-sky-700 max-xl:px-2 max-xl:py-1 ">
              <span className="font-bold text-base text-white max-xl:text-sm">
                Join / Sign In
              </span>
            </button>
          </div>
        </div>
        <hr className="absolute top-[68px] w-full right-0 max-xl:top-[52px]" />
      </div>
    </>
  );
};

export default Header;
