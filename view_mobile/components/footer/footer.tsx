import { Images, otherServices, servicesInFooter } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Footer: () => JSX.Element = () => {
  return (
    <footer className="max-w-7xl mx-auto text-lightGray flex flex-col gap-8 text-base py-0 max-lg:text-center max-lg:px-4">
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
          <ul className="flex flex-col gap-4">{footerColOne()}</ul>
        </div>
        <div className="w-1/4 max-lg:hidden">
          <ul className="flex flex-col gap-4">{footerColTwo()}</ul>
        </div>
        <div className="w-1/4 max-lg:hidden">
          <ul className="flex flex-col gap-4">{footerColThree()}</ul>
        </div>
        <div className="w-1/4 max-lg:w-1/2">
          <ul className="flex flex-col gap-4">{footerColFour()}</ul>
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

const socialMediaIcons = (): JSX.Element[] => {
  return Images.slice(2, 7).map((image) => {
    return (
      <Link href="#">
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
  return otherServices.slice(10, 14).map((service) => {
    return (
      <Link href="#" className="hover:text-blue-600 hover:underline">
        {service.name}
      </Link>
    );
  });
};

const footerColOne = () => {
  return servicesInFooter.slice(0, 6).map((service) => {
    return (
      <li>
        <Link href="#" className="hover:text-blue-600 hover:underline">
          {service}
        </Link>
      </li>
    );
  });
};

const footerColTwo = () => {
  return servicesInFooter.slice(6, 11).map((service) => {
    return (
      <li>
        <Link href="#" className="hover:text-blue-600 hover:underline">
          {service}
        </Link>
      </li>
    );
  });
};

const footerColThree = () => {
  return servicesInFooter.slice(11, 16).map((service) => {
    return (
      <li>
        <Link href="#" className="hover:text-blue-600 hover:underline">
          {service}
        </Link>
      </li>
    );
  });
};

const footerColFour = () => {
  return servicesInFooter.slice(16, 19).map((service) => {
    return (
      <li>
        <Link href="#" className="hover:text-blue-600 hover:underline">
          {service}
        </Link>
      </li>
    );
  });
};
