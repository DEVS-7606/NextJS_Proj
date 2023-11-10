import { otherServices, services } from "@/data";
import Image from "next/image";
import Link from "next/link";

const SideNavbar = (props: { showSideNavbar: boolean }): JSX.Element => {
  return (
    <section
      className={
        props.showSideNavbar
          ? "max-w-7xl mx-auto fixed left-0 top-4 w-[100%] h-screen bg-white py-10 transform overflow-y-auto translate-x-0 duration-200 no-scrollbar xl:left-[-100%]"
          : "max-w-7xl mx-auto fixed left-[-100%] top-0 p-10 transform overflow-y-auto translate-x-0 duration-200"
      }
    >
      <ul className="flex flex-col px-4 gap-6 pb-6 pt-2">
        {viewMainServices()}
        {viewOtherImpServices()}
      </ul>
      <hr className=" w-full " />
      <ul className="text-grayType px-4 flex flex-col gap-6 pb-6 pt-8">
        {viewOtherServices()}
      </ul>
    </section>
  );
};

export default SideNavbar;

const viewMainServices = (): JSX.Element[] => {
  return services.slice(0, 3).map((service) => {
    return (
      <li className="text-2xl">
        <Link href="#">{service.name}</Link>
      </li>
    );
  });
};

const viewOtherImpServices = (): JSX.Element[] => {
  return otherServices.slice(0, 2).map((service) => {
    return (
      <li className="text-grayType">
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

const viewOtherServices = (): JSX.Element[] => {
  return otherServices.slice(2, 11).map((service) => {
    return (
      <li>
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
