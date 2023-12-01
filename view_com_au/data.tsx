import rocket from "../view_com_au/public/images/nav-rocket.svg";
import scale from "../view_com_au/public/images/nav-scales.svg";
import auction from "../view_com_au/public/images/nav-auction.svg";
import coins from "../view_com_au/public/images/nav-coins-hand.svg";
import file from "../view_com_au/public/images/nav-file.svg";
import info from "../view_com_au/public/images/nav-info-circle.svg";
import bulb from "../view_com_au/public/images/nav-lightbulb.svg";
import pin from "../view_com_au/public/images/nav-marker-pin.svg";
import exchange from "../view_com_au/public/images/nav-switch-horizontal-02.svg";
import users from "../view_com_au/public/images/nav-users.svg";
import appStore from "../view_com_au/public/images/AppStore.36362f83.svg";
import playStore from "../view_com_au/public/images/PlayStore.7128a9f5.svg";
import FB from "../view_com_au/public/images/facebook.svg";
import Twitter from "../view_com_au/public/images/twitter.svg";
import Insta from "../view_com_au/public/images/instagram.svg";
import LinkedIn from "../view_com_au/public/images/linkedIn.svg";
import Pinterest from "../view_com_au/public/images/pinterest.svg";
import mobileView from "../view_com_au/public/images/landing-page-mobile.cc546c66.jpg";
import desktopView from "../view_com_au/public/images/landing-page-desktop.jpg";
import settleEasy from "../view_com_au/public/images/settle-easy.svg";
import star from "../view_com_au/public/images/star.svg";

export interface responsiveDisplay {
  heading: string;
  description: string;
  mainClassName: string;
  renderAppsImageClassName: string;
  getImageClassName: string;
  renderSpecsAndAppsImgClassName: string;
  AppIndexStart: number;
  AppIndexEnd: number;
  DisplayImageStartIndex: number;
  DisplayImageEndIndex: number;
}

export const RESPONSIVE_DISPLAY_PROPS: responsiveDisplay[] = [
  {
    heading: "Save and track.",
    description:
      "Shortlist your favorite properties to keep track of upcoming open for inspections and auction. Login with your resi.uatz.view.com.au account to sync your saved properties between your computer and mobile devices.",
    mainClassName: " gap-2 lg:gap-0 lg:flex-row py-16 lg:py-24",
    renderAppsImageClassName: "lg:mt-auto",
    getImageClassName: "px-20 sm:justify-end",
    renderSpecsAndAppsImgClassName: "",
    AppIndexStart: 0,
    AppIndexEnd: 2,
    DisplayImageStartIndex: 7,
    DisplayImageEndIndex: 8,
  },
  {
    heading: "Search, plan and research properties.",
    description:
      "Search any property in Australia, get price data and suburb information, plus points of interest.",
    mainClassName: "gap-4 lg:flex-row-reverse py-4 lg:py-10",
    renderAppsImageClassName: "lg:mt-4",
    getImageClassName: "px-4 sm:justify-start",
    renderSpecsAndAppsImgClassName: "lg:px-20 justify-start px-0",
    AppIndexStart: 0,
    AppIndexEnd: 2,
    DisplayImageStartIndex: 8,
    DisplayImageEndIndex: 9,
  },
];

export interface Services {
  name: string;
  image?: { src: string; alt: string; width: number; height: number };
}

export const SERVICES: Services[] = [
  { name: "Buy" },
  { name: "Rent" },
  { name: "Sold" },
  { name: "Estimate" },
  {
    name: "More",
    image: {
      src: "/images/small_arrow.svg",
      alt: "arrow",
      width: 20,
      height: 30,
    },
  },
];

export interface OtherServices {
  name: string;
  image?: { src: string; alt: string };
}

export const OTHERSERVICES: OtherServices[] = [
  { name: "New Developments", image: { src: rocket, alt: "rocket" } },
  { name: "Price Estimate", image: { src: scale, alt: "scales" } },
  { name: "Find Agents", image: { src: users, alt: "users" } },
  { name: "Auction Results", image: { src: auction, alt: "auction" } },
  { name: "Location Profiles", image: { src: pin, alt: "pin" } },
  { name: "Advice", image: { src: bulb, alt: "bulb" } },
  { name: "News", image: { src: file, alt: "News" } },
  { name: "Home Loans", image: { src: coins, alt: "Loans" } },
  { name: "Conveyancing", image: { src: exchange, alt: "exchange" } },
  { name: "About", image: { src: info, alt: "about" } },
  { name: "Agent Login" },
  { name: "About Us" },
  { name: "Contact" },
  { name: "FAQs" },
];

export const SERVICESINFOOTER: string[] = [
  "Real Estate News",
  "Estimate",
  "Join resiuatzview.com.au",
  "Real Estate Apps",
  "Make an Offer",
  "Location Profiles",
  "Agency Sign Up",
  "Find A Real Estate Agent",
  "Auction and Sales Results Victoria",
  "Auction and Sales Results by Suburb",
  "Real Estate Advice",
  "Real Estate For Sale",
  "Rental Properties",
  "Recently Sold Properties",
  "New Developments",
  "View Insurance",
  "Terms & Conditions",
  "Privacy Policy",
  "Sitemap",
];

export interface images {
  src: any;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export const IMAGES: images[] = [
  {
    src: appStore,
    alt: "app-store link",
    width: 180,
    height: 90,
  },
  {
    src: playStore,
    alt: "play-store link",
    width: 190,
    height: 90,
  },
  {
    src: FB,
    alt: "Facebook",
    width: 25,
    height: 25,
    className: "",
  },
  {
    src: Twitter,
    alt: "Twitter",
    width: 25,
    height: 25,
    className: "",
  },
  {
    src: Insta,
    alt: "Instagram",
    width: 25,
    height: 25,
    className: "",
  },
  {
    src: LinkedIn,
    alt: "LinkedIn",
    width: 25,
    height: 25,
    className: "",
  },
  {
    src: Pinterest,
    alt: "Pinterest",
    width: 25,
    height: 25,
    className: "",
  },
  {
    src: mobileView,
    alt: "Mobile View",
    width: 320,
    height: 480,
    className: "xxs:w-350 w-300 xs:w-aut0",
  },
  {
    src: desktopView,
    alt: "desktop View",
    width: 500,
    height: 384,
    className: "",
  },
  {
    src: settleEasy,
    alt: "settle easy",
    width: 56,
    height: 56,
    className: "md:w-24 md:h-24 lg:w-30 lg:h-30",
  },
  {
    src: star,
    alt: "star",
    width: 20,
    height: 20,
    className: "",
  },
];

export const INPUTFIELDS = [
  { title: "First Name *", id: "firstName", type: "text" },
  { title: "Last Name *", id: "lastName", type: "text" },
  { title: "Email *", id: "emailId", type: "text" },
  { title: "Phone *", id: "phone", type: "number" },
];

export const FREQ_ASKED_QUES = [
  {
    ques: "What is conveyancing?",
    ans: [
      <p key={0}>
        Conveyancing is the process of moving the legal ownership of property or
        land from one person or entity to another.
      </p>,
    ],
  },
  {
    ques: "What is a conveyancer?",
    ans: [
      <p key={0}>
        A conveyancer is a property transfer specialist. They prepare the legal
        documents that form part of real estate transactions such as the
        purchase and sale of properties, settlements and title transfers.
      </p>,
    ],
  },
  {
    ques: "How much does it cost?",
    ans: [
      <p key={0}>
        Whether you are buying or selling property, our services are set at a
        fixed price.
      </p>,
      <p key={1}>The only cost variable relates to disbursements.</p>,
      <p key={2}>
        We don&apos;t want you to be worried about the word
        &apos;disbursements&apos; - it&apos;s just an everyday legal term used
        to describe out of pocket expenses and all property transactions in
        Australia will incur some of these.
      </p>,
      <p key={3}>
        We&apos;ll always be upfront about your conveyancing costs, so as soon
        as you ask us to help you, we can provide you with an estimate of how
        much your disbursements are likely to be.
      </p>,
      <p key={4}>
        These out of pocket costs all depend on the type of property you have
        bought or sold and where that property is located.
      </p>,
    ],
  },
  {
    ques: "What types of conveyancing does Settle Easy do?",
    ans: [
      <p key={0}>
        Our experienced team specialise in all types of conveyancing including:
      </p>,
      <ul
        key={1}
        style={{ paddingLeft: 8, listStyleType: "disc", listStyle: "inside" }}
      >
        <li>residential properties</li>
        <li>large scale off the plan property developments</li>
        <li>retirement village residences</li>
        <li>commercial properties</li>
        <li>properties within trust structures</li>
        <li>properties for self-managed superannuation funds (SMSFs).</li>
      </ul>,
    ],
  },
  {
    ques: "How will I know what's happening?",
    ans: [
      <p key={0}>
        At Settle Easy, we are committed to keeping you updated every step of
        the way.
      </p>,
      <p key={1}>
        As a registered customer, you will be able to track each stage of your
        transaction and you will have a dedicated conveyancer to guide you
        through the process and answer any questions you may have.
      </p>,
    ],
  },
];

export const REVIEWS = [
  {
    duration: "4 weeks ago",
    review:
      "Marie was excellent, very prompt, clear and friendly. Would recommend for first home buyers who want to be kept in the loop and shown all the steps.",
    name: "Jake Curtis",
  },
  {
    duration: "2 weeks ago",
    review:
      "We were fortunate enough to have Carley from Settle Easy help us with our first home purchase. We feel incredibly lucky that we had her to explain the different parts of the process and answer the many questions we had. We said to one another multiple times 'Thank god for Carley, she's incredible.' It meant a lot that she was so forward with getting details, and advocating for us with the sellers and always keeping us up to date with what was happening. We can't thank her enough for everything she did for us.",
    name: "Brendan Freeman",
  },
  {
    duration: "2 weeks ago",
    review:
      "We are first time property buyers and were buying a block of land - Carley from Settle Easy was absolutely amazing from start to finish. She went above and beyond at every single stage of the process, keeping us in the loop the entire time, explaining what she was doing and why, making sure we understood what was happening. Buying a property is stressful enough, you don't need the extra worry of a Conveyancer that needs constant chasing. Incredible service!",
    name: "Emma Gerts",
  },
];
