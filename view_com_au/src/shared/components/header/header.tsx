/* eslint-disable @next/next/no-html-link-for-pages */
import { SERVICES } from "../../../../data";
import Image from "next/image";
import Container from "@/shared/components/pageContainer/pageContainer";
import Button from "../button/button";

interface IProps {
  toggleNavbar: () => void;
  toggleValue: boolean;
}

const Header = (props: IProps): JSX.Element => {
  const renderHamBurger = (): JSX.Element => {
    return (
      <button
        onClick={props.toggleNavbar}
        className="1200px:hidden flex items-start"
      >
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
    );
  };
  const getViewLogo = (): JSX.Element => {
    return (
      <a href="#">
        <Image
          src="/images/viewLogo.svg"
          alt="Icon With Name"
          width={76}
          height={38}
          className="relative cursor-pointer w-44 md:w-94 xl:w-auto flex items-center"
        />
      </a>
    );
  };

  const getViewServices = (): JSX.Element[] => {
    return SERVICES.map((service, index) => {
      return (
        <li
          key={index}
          className="px-3 flex cursor-pointer transition hover:ease-in-out hover:bg-gray-200 items-center hover:py-2 rounded-md duration-0"
        >
          <a href="#" className={service.image ? "flex items-center" : ""}>
            {service.name}
            {service.image && (
              <Image
                src={service.image.src}
                alt={service.image.alt}
                width={service.image?.width}
                height={service.image?.height}
              />
            )}
          </a>
        </li>
      );
    });
  };

  const renderJoinAndSignIn = () => {
    return (
      <Button title="Join / Sign In" className="px-4 py-2 md:px-3 md:py-2.5" />
    );
  };

  return (
    <div className="bg-white sticky top-0 w-screen z-20 py-2 border-b">
      <Container>
        <div className="relative flex flex-row justify-between items-center xl:py-1 text-base">
          <div className="flex xl:flex-none gap-4 xl:items-start">
            {renderHamBurger()}
            {getViewLogo()}
          </div>
          <ul className="hidden w-2/3 1200px:flex justify-center gap-x-2 font-medium items-center">
            {getViewServices()}
          </ul>
          {renderJoinAndSignIn()}
        </div>
      </Container>
    </div>
  );
};

export default Header;
