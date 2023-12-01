import { IMAGES, SERVICESINFOOTER, OTHERSERVICES } from "../../../../data";
import Image from "next/image";
import Link from "next/link";
import Container from "@/shared/components/pageContainer/pageContainer";

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

  const renderFooterCol = (start: number, end: number) => {
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

  const renderFooterColumnContent = (start: number, end: number) => {
    return (
      <div className="w-1/4 max-lg:hidden lg:inline">
        <ul className="flex flex-col gap-4">{renderFooterCol(start, end)}</ul>
      </div>
    );
  };

  const getViewLogo = () => {
    return (
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
    );
  };

  const getViewMediaGroup = () => {
    return (
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
    );
  };

  const getCopyRight = () => {
    return (
      <p className="flex w-full lg:w-auto justify-center lg:justify-normal max-md:text-sm max-md:text-zinc-600 font-normal">
        Copyright © 2001-2023 | resi.uatz.view.com.au Ltd
      </p>
    );
  };

  const renderSocialMediaAndServices = () => {
    return (
      <section className="flex flex-row lg:justify-between justify-center">
        <div className="flex flex-row justify-evenly gap-8">
          {socialMediaIcons()}
        </div>
        <div className="lg:flex flex-row justify-evenly gap-8 hidden">
          {OtherServices()}
        </div>
      </section>
    );
  };

  const renderFooterContent = () => {
    return (
      <section className="flex lg:text-left w-full lg:justify-normal justify-center text-center flex-row-reverse lg:flex-row">
        {renderFooterColumnContent(0, 6)}
        {renderFooterColumnContent(6, 11)}
        {renderFooterColumnContent(11, 16)}
        <div className="lg:w-1/4 w-1/2">
          <ul className="flex flex-col gap-4">{renderFooterCol(16, 19)}</ul>
        </div>
        <div className="lg:hidden lg:w-full w-1/2">
          <ul className="flex flex-col gap-4">{OtherServices()}</ul>
        </div>
      </section>
    );
  };

  const getFooterCopyRight = () => {
    return (
      <section className="flex flex-col gap-4 justify-center lg:justify-normal">
        <div className="w-full flex lg:justify-between flex-col lg:flex-row justify-center gap-2 lg:gap-0">
          {getViewLogo()}
          {getViewMediaGroup()}
        </div>
        {getCopyRight()}
      </section>
    );
  };

  return (
    <Container>
      <footer className="text-lightGray flex flex-col gap-8 text-base py-2 text-center lg:text-start px-4 lg:px-0">
        {renderSocialMediaAndServices()}

        <hr className="w-full" />

        {renderFooterContent()}

        <hr className="w-full" />

        {getFooterCopyRight()}
      </footer>
    </Container>
  );
};

export default Footer;
