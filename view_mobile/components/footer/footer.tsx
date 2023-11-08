import Image from "next/image";
import Link from "next/link";

const Footer: () => JSX.Element = () => {
  return (
    <footer className="text-[#666666] flex flex-col gap-8 text-base py-0 max-lg:text-center max-lg:px-4">
      <section className="flex flex-row justify-between max-lg:justify-center">
        <div className="flex flex-row justify-evenly gap-8">
          <Link href="#" className="hover:text-blue-600 hover:underline">
            <Image src="/images/facebook.svg" alt="FB" width={25} height={25} />
          </Link>
          <Link href="#" className="hover:text-blue-600 hover:underline">
            <Image
              src="/images/twitter.svg"
              alt="tweet"
              width={25}
              height={25}
            />
          </Link>
          <Link href="#" className="hover:text-blue-600 hover:underline">
            <Image
              src="/images/instagram.svg"
              alt="Insta"
              width={25}
              height={25}
            />
          </Link>
          <Link href="#" className="hover:text-blue-600 hover:underline">
            <Image src="/images/linkedIn.svg" alt="Li" width={25} height={25} />
          </Link>
          <Link href="#" className="hover:text-blue-600 hover:underline">
            <Image
              src="/images/pinterest.svg"
              alt="pin"
              width={25}
              height={25}
            />
          </Link>
        </div>
        <div className="flex flex-row justify-evenly gap-8 max-lg:hidden">
          <Link href="#" className="hover:text-blue-600 hover:underline">
            Agent Login
          </Link>
          <Link href="#" className="hover:text-blue-600 hover:underline">
            About us
          </Link>
          <Link href="#" className="hover:text-blue-600 hover:underline">
            Contact
          </Link>
          <Link href="#" className="hover:text-blue-600 hover:underline">
            FAQs
          </Link>
        </div>
      </section>
      <hr className="w-full" />
      <section className="flex text-left w-full max-lg:justify-center max-lg:text-center">
        <div className="w-1/4 max-lg:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="#" className="hover:text-blue-600 hover:underline">
                Real Estate News
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-600 hover:underline">
                Estimate
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-600 hover:underline">
                Join resiuatzview.com.au
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-600 hover:underline">
                Real Estate Apps
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-600 hover:underline">
                Make an Offer
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-600 hover:underline">
                Location Profiles
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/4 max-lg:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="" className="hover:text-blue-600 hover:underline">
                Agency Sign Up
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-blue-600 hover:underline">
                Find A Real Estate Agent
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-blue-600 hover:underline">
                Auction and Sales Results Victoria
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-blue-600 hover:underline">
                Auction and Sales Results by Suburb
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-blue-600 hover:underline">
                Real Estate Advice
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/4 max-lg:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="" className="hover:text-blue-600 hover:underline">
                Real Estate For Sale
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-blue-600 hover:underline">
                Rental Properties
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-blue-600 hover:underline">
                Recently Sold Properties
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-blue-600 hover:underline">
                New Developments
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-blue-600 hover:underline">
                View Insurance
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:hidden max-lg:w-1/2">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="#" className="hover:text-blue-600 hover:underline">
                Agent Login
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-600 hover:underline">
                About us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-600 hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-600 hover:underline">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/4 max-lg:w-1/2">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="" className="hover:text-blue-600 hover:underline">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-blue-600 hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-blue-600 hover:underline">
                Sitemap
              </Link>
            </li>
          </ul>
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
