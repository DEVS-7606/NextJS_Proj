import { IMAGES, SERVICESINFOOTER, OTHERSERVICES } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Footer: () => JSX.Element = () => {
  const socialMediaIcons = (): JSX.Element[] => {
    return IMAGES.slice(2, 7).map((image, index) => {
      return (
        <Link href="#" key={index}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className={image.className}
          />
        </Link>
      );
    });
  };

  const OtherServices = (): JSX.Element[] => {
    return OTHERSERVICES.slice(10, 14).map((service, index) => {
      return (
        <Link
          href="#"
          className="hover:text-blue-600 hover:underline"
          key={index}
        >
          {service.name}
        </Link>
      );
    });
  };

  const footerCol = (start: number, end: number) => {
    return SERVICESINFOOTER.slice(start, end).map((service, index) => {
      return (
        <li key={index}>
          <Link href="#" className="hover:text-blue-600 hover:underline">
            {service}
          </Link>
        </li>
      );
    });
  };

  return (
    <footer className="max-w-1200 mx-auto text-lightGray flex flex-col gap-8 text-base py-0 text-center lg:text-start px-4 lg:px-0">
      <section className="flex flex-row lg:justify-between justify-center">
        <div className="flex flex-row justify-evenly gap-8">
          {socialMediaIcons()}
        </div>
        <div className="lg:flex flex-row justify-evenly gap-8 hidden">
          {OtherServices()}
        </div>
      </section>
      <hr className="w-full" />
      <section className="flex lg:text-left w-full lg:justify-normal justify-center text-center flex-row-reverse lg:flex-row">
        <div className="w-1/4 max-lg:hidden lg:inline">
          <ul className="flex flex-col gap-4">{footerCol(0, 6)}</ul>
        </div>
        <div className="w-1/4 max-lg:hidden lg:inline">
          <ul className="flex flex-col gap-4">{footerCol(6, 11)}</ul>
        </div>
        <div className="w-1/4 max-lg:hidden lg:inline">
          <ul className="flex flex-col gap-4">{footerCol(11, 16)}</ul>
        </div>
        <div className="lg:w-1/4 w-1/2">
          <ul className="flex flex-col gap-4">{footerCol(16, 19)}</ul>
        </div>
        <div className="lg:hidden lg:w-full w-1/2">
          <ul className="flex flex-col gap-4">{OtherServices()}</ul>
        </div>
      </section>
      <hr className="w-full" />
      <section className="flex flex-col gap-4 justify-center lg:justify-normal">
        <div className="w-full flex lg:justify-between flex-col lg:flex-row justify-center gap-2 lg:gap-0">
          <div className="lg:w-3/4 w-full lg:flex-none flex lg:justify-normal justify-center">
            <Link href="#">
              <Image
                src="/images/viewLogo.svg"
                alt="Icon With Name"
                width={98}
                height={28}
              />
            </Link>
          </div>
          <div className="lg:w-1/4 flex justify-end items-center lg:gap-4 flex-col lg:flex-row w-full gap-2">
            <p className="lg:w-1/2 text-base leading-none font-normal w-full ">
              Part of View Media Group (VMG)
            </p>
            <Link href="#">
              <Image
                src="/images/partners-media-group.svg"
                alt="media-partner"
                width={68}
                height={34}
              />
            </Link>
          </div>
        </div>
        <div className="flex w-full lg:w-auto justify-center lg:justify-normal">
          <p className="max-md:text-sm max-md:text-zinc-600 font-normal">
            Copyright © 2001-2023 | resi.uatz.view.com.au Ltd
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
