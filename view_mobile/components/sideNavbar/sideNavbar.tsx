import { otherServices, services } from "@/data";
import Image from "next/image";
import Link from "next/link";

const SideNavbar = (props: { showSideNavbar: boolean }): JSX.Element => {
  const viewMainServices = (): JSX.Element[] => {
    return services.slice(0, 3).map((service, index) => {
      return (
        <li className="text-2xl" key={index}>
          <Link href="#">{service.name}</Link>
        </li>
      );
    });
  };

  const viewOtherServices = (start: number, end: number): JSX.Element[] => {
    return otherServices.slice(start, end).map((service, index) => {
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

  return (
    <section
      className={
        props.showSideNavbar
          ? "max-w-1200 mx-auto fixed left-0 top-4 w-[100%] h-screen bg-white py-10 transform overflow-y-auto translate-x-0 duration-200 no-scrollbar xl:left-[-100%]"
          : "max-w-1200 mx-auto fixed left-[-100%] top-0 p-10 transform overflow-y-auto translate-x-0 duration-200"
      }
    >
      <ul className="flex flex-col px-4 gap-6 pb-6 pt-2">
        {viewMainServices()}
        {viewOtherServices(0, 2)}
      </ul>
      <hr className=" w-full " />
      <ul className="px-4 flex flex-col gap-6 pb-6 pt-8">
        {viewOtherServices(2, 10)}
      </ul>
    </section>
  );
};

export default SideNavbar;
