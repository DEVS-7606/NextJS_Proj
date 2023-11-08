import Image from "next/image";
import Link from "next/link";

const SideNavbar: () => JSX.Element = () => {
  return (
    <section className="w-full">
      <ul className="flex flex-col px-4 gap-6 pb-6 pt-2">
        <li className="text-2xl">
          <Link href="#">Buy</Link>
        </li>
        <li className="text-2xl">
          <Link href="#">Rent</Link>
        </li>
        <li className="text-2xl">
          <Link href="#">Sold</Link>
        </li>
        <li className="text-[#444343]">
          <Link
            href="#"
            className="flex font-extralight gap-4 text-base place-items-center"
          >
            <span>
              <Image
                src="images/nav-rocket.svg"
                alt="rocket"
                width="20"
                height="20"
              />
            </span>
            <span>New Developments</span>
          </Link>
        </li>
        <li className="text-[#444343]">
          <Link
            href="#"
            className="flex font-extralight gap-4 text-base place-items-center"
          >
            <span>
              <Image
                src="images/nav-scales.svg"
                alt="rocket"
                width="20"
                height="20"
              />
            </span>
            <span>Price Estimate</span>
          </Link>
        </li>
      </ul>
      <hr className=" w-full " />
      <ul className="text-[#444343] px-4 flex flex-col gap-6 pb-6 pt-8">
        <li>
          <Link
            href="#"
            className="flex font-extralight gap-4 text-base place-items-center"
          >
            <span>
              <Image
                src="images/nav-users.svg"
                alt="users"
                width="20"
                height="20"
              />
            </span>
            <span>Find Agents</span>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex font-extralight gap-4 text-base place-items-center"
          >
            <span>
              <Image
                src="images/nav-auction.svg"
                alt="auction"
                width="20"
                height="20"
              />
            </span>
            <span>Auction Results</span>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex font-extralight gap-4 text-base place-items-center"
          >
            <span>
              <Image
                src="images/nav-marker-pin.svg"
                alt="pin"
                width="20"
                height="20"
              />
            </span>
            <span>Location Profiles</span>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex font-extralight gap-4 text-base place-items-center"
          >
            <span>
              <Image
                src="images/nav-lightbulb.svg"
                alt="bulb"
                width="20"
                height="20"
              />
            </span>
            <span>Advice</span>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex font-extralight gap-4 text-base place-items-center"
          >
            <span>
              <Image
                src="images/nav-file.svg"
                alt="file"
                width="20"
                height="20"
              />
            </span>
            <span>News</span>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex font-extralight gap-4 text-base place-items-center"
          >
            <span>
              <Image
                src="images/nav-coins-hand.svg"
                alt="coins"
                width="20"
                height="20"
              />
            </span>
            <span>Home Loans</span>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex font-extralight gap-4 text-base place-items-center"
          >
            <span>
              <Image
                src="images/nav-switch-horizontal-02.svg"
                alt="exchange"
                width="20"
                height="20"
              />
            </span>
            <span>Conveyancing</span>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex font-extralight gap-4 text-base place-items-center"
          >
            <span>
              <Image
                src="images/nav-info-circle.svg"
                alt="about"
                width="20"
                height="20"
              />
            </span>
            <span>About</span>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default SideNavbar;
