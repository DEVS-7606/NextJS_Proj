import rocket from "@/public/images/nav-rocket.svg";
import scale from "@/public/images/nav-scales.svg";
import aution from "@/public/images/nav-auction.svg";
import coins from "@/public/images/nav-coins-hand.svg";
import file from "@/public/images/nav-file.svg";
import info from "@/public/images/nav-info-circle.svg";
import bulb from "@/public/images/nav-lightbulb.svg";
import pin from "@/public/images/nav-marker-pin.svg";
import exchange from "@/public/images/nav-switch-horizontal-02.svg";
import users from "@/public/images/nav-users.svg";
import appStore from "@/public/images/AppStore.36362f83.svg";
import playStore from "@/public/images/PlayStore.7128a9f5.svg";
import FB from "@/public/images/facebook.svg";
import Twitter from "@/public/images/twitter.svg";
import Insta from "@/public/images/instagram.svg";
import LinkedIn from "@/public/images/linkedIn.svg";
import Pinterest from "@/public/images/pinterest.svg";
import mobileView from "@/public/images/landing-page-mobile.cc546c66.jpg";
import desktopView from "@/public/images/landing-page-desktop.jpg";
import settleEasy from "@/public/images/settle-easy.svg";
import Link from "next/link";

export interface ofServices {
  name: string;
  isHavingImage: boolean;
  image?: { src: string; alt: string; width: number; height: number };
}

export const services: ofServices[] = [
  { name: "Buy", isHavingImage: false },
  { name: "Rent", isHavingImage: false },
  { name: "Sold", isHavingImage: false },
  { name: "Estimate", isHavingImage: false },
  {
    name: "More",
    isHavingImage: true,
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

export const otherServices: OtherServices[] = [
  { name: "New Developments", image: { src: rocket, alt: "rocket" } },
  { name: "Price Estimate", image: { src: scale, alt: "scales" } },
  { name: "Find Agents", image: { src: users, alt: "users" } },
  { name: "Auction Results", image: { src: aution, alt: "aution" } },
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

export const servicesInFooter: string[] = [
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
  className: string;
}

export const Images: images[] = [
  {
    src: appStore,
    alt: "app-store link",
    width: 180,
    height: 90,
    className: "max-xs:w-140 max-xxs:w-120",
  },
  {
    src: playStore,
    alt: "play-store link",
    width: 190,
    height: 90,
    className: "max-xs:w-150 max-xxs:w-130",
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
    className: "max-xs:w-350 max-xxs:w-300",
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
    width: 120,
    height: 120,
    className: "max-md:w-14 max-md:h-14",
  },
];

export const InputFields = [
  { title: "First Name *", id: "firstName", type: "text" },
  { title: "Last Name *", id: "lastName", type: "text" },
  { title: "Email *", id: "emailId", type: "text" },
  { title: "Phone *", id: "phone", type: "number" },
];
