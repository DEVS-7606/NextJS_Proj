import { OTHERSERVICES, SERVICES } from "@/data";
import Image from "next/image";
import Link from "next/link";

const SideNavbar = (props: { showSideNavbar: boolean }): JSX.Element => {
  const renderMainServices = (): JSX.Element[] => {
    return SERVICES.slice(0, 3).map((service, index) => {
      return (
        <li className="text-2xl font-medium text-black" key={index}>
          <Link href="#">{service.name}</Link>
        </li>
      );
    });
  };

  const renderOtherServices = (start: number, end: number): JSX.Element[] => {
    return OTHERSERVICES.slice(start, end).map((service, index) => {
      return (
        <li className="text-grayType" key={index}>
          <Link
            href="#"
            className="flex font-extralight gap-4 text-base place-items-center"
          >
            {service.image && (
              <Image
                src={service.image.src}
                alt={service.image.alt}
                width="20"
                height="20"
              />
            )}
            {service.name}
          </Link>
        </li>
      );
    });
  };

  const renderMainAndOtherServices = () => {
    return (
      <ul className="flex flex-col px-4 gap-6 pb-6 pt-2">
        {renderMainServices()}
        {renderOtherServices(0, 2)}
      </ul>
    );
  };

  return (
    <section
      className={`fixed transform overflow-y-auto translate-x-0 duration-200 w-[100%] h-screen bg-white py-10 no-scrollbar 
        ${
          props.showSideNavbar
            ? "left-0 top-4 xl:left-[-100%]"
            : "left-[-100%] top-0 p-10"
        }
     `}
    >
      {renderMainAndOtherServices()}

      <hr className=" w-full " />

      <ul className="px-4 flex flex-col gap-6 pb-6 pt-8">
        {renderOtherServices(2, 10)}
      </ul>
    </section>
  );
};

export default SideNavbar;
