import { Images, otherServices, servicesInFooter } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Footer: () => JSX.Element = () => {
  const socialMediaIcons = (): JSX.Element[] => {
    return Images.slice(2, 7).map((image, index) => {
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
    return otherServices.slice(10, 14).map((service, index) => {
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
    return servicesInFooter.slice(start, end).map((service, index) => {
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
    <footer className="max-w-1200 mx-auto text-lightGray flex flex-col gap-8 text-base py-0 max-lg:text-center max-lg:px-4">
      <section className="flex flex-row justify-between max-lg:justify-center">
        <div className="flex flex-row justify-evenly gap-8">
          {socialMediaIcons()}
        </div>
        <div className="flex flex-row justify-evenly gap-8 max-lg:hidden">
          {OtherServices()}
        </div>
      </section>
      <hr className="w-full" />
      <section className="flex text-left w-full max-lg:justify-center max-lg:text-center max-lg:flex-row-reverse">
        <div className="w-1/4 max-lg:hidden">
          <ul className="flex flex-col gap-4">{footerCol(0, 6)}</ul>
        </div>
        <div className="w-1/4 max-lg:hidden">
          <ul className="flex flex-col gap-4">{footerCol(6, 11)}</ul>
        </div>
        <div className="w-1/4 max-lg:hidden">
          <ul className="flex flex-col gap-4">{footerCol(11, 16)}</ul>
        </div>
        <div className="w-1/4 max-lg:w-1/2">
          <ul className="flex flex-col gap-4">{footerCol(16, 19)}</ul>
        </div>
        <div className="lg:hidden max-lg:w-1/2">
          <ul className="flex flex-col gap-4">{OtherServices()}</ul>
        </div>
      </section>
      <hr className="w-full" />
      <section className="flex flex-col gap-4 max-lg:justify-center">
        <div className="w-full flex justify-between max-lg:flex-col max-lg:justify-center max-lg:gap-2">
          <div
            className="w-3/4 max-lg:w-full 
          max-lg:flex max-lg:justify-center"
          >
            <Link href="#">
              <Image
                src="/images/viewLogo.svg"
                alt="Icon With Name"
                width={98}
                height={28}
              />
            </Link>
          </div>
          <div className="w-1/4 flex justify-end items-center gap-4  max-lg:flex-col max-lg:w-full max-lg:gap-2">
            <p className="w-1/2 text-base leading-none font-normal max-lg:w-full ">
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
        <div className="flex max-lg:w-full max-lg:justify-center ">
          <p className="max-md:text-sm max-md:text-zinc-600 font-normal">
            Copyright © 2001-2023 | resi.uatz.view.com.au Ltd
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
