import React from "react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import BreadcrumbContent from "./breadcrumb-content";
import { CategoryMenu } from "./category-menu";
import TrackOrderLocation from "./track-location";
import Compare from "./compare";
import Help from "./help";
import {
  Dribbble,
  Facebook,
  Heart,
  Instagram,
  PhoneCall,
  ShoppingCart,
  Twitter,
  User2,
  Youtube,
} from "lucide-react";
import CurrencySelector from "./currency-select";
import { Separator } from "../ui/separator";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import SearchInput from "./search-input";
import Link from "next/link";

const categories = [
  {
    value: "electronics",
    label: "Electronics",
  },
  {
    value: "jewelry",
    label: "Jewelry",
  },
  {
    value: "clothing",
    label: "Clothing",
  },
  {
    value: "toys",
    label: "Toys",
  },
  {
    value: "home",
    label: "Home",
  },
  {
    value: "garden",
    label: "Garden",
  },
  {
    value: "books",
    label: "Books",
  },
  {
    value: "movies",
    label: "Movies",
  },
  {
    value: "music",
    label: "Music",
  },
  {
    value: "games",
    label: "Games",
  },
  {
    value: "health",
    label: "Health",
  },
  {
    value: "beauty",
    label: "Beauty",
  },
  {
    value: "sports",
    label: "Sports",
  },
  {
    value: "outdoors",
    label: "Outdoors",
  },
  {
    value: "automotive",
    label: "Automotive",
  },
  {
    value: "industrial",
    label: "Industrial",
  },
  {
    value: "grocery",
    label: "Grocery",
  },
  {
    value: "handmade",
    label: "Handmade",
  },
  {
    value: "other",
    label: "Other",
  },
];

const SocialIcons = [
  {
    icon: Twitter,
    href: "https://twitter.com",
  },
  {
    icon: Facebook,
    href: "https://facebook.com",
  },
  {
    icon: Dribbble,
    href: "https://dribbble.com",
  },
  {
    icon: Youtube,
    href: "https://youtube.com",
  },
  {
    icon: Instagram,
    href: "https://instagram.com",
  },
];

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="bg-cyan-700 p-2 text-white text-sm max-md:hidden">
        <div className="flex justify-between mx-auto max-w-screen-xl items-center">
          <p>Welcome to our store!</p>
          <div className="flex gap-2 items-center">
            <p>Follow us</p>
            {SocialIcons.map((icon, index) => (
              <a
                aria-label={icon.icon.displayName}
                key={index}
                href={icon.href}
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <icon.icon className="w-4 h-4" />
              </a>
            ))}
            <Separator orientation="vertical" />
            <CurrencySelector />
          </div>
        </div>
      </div>
      <div className="bg-cyan-700 sm:border-t border-white">
        <div className=" flex items-center max-w-screen-xl mx-auto justify-between p-2">
          <Link href="/" className="w-36">
            <Image
              src="/logo.svg"
              width={150}
              height={50}
              alt="logo"
              className="cursor-pointer w-full"
            />
          </Link>
          <SearchInput />
          <div className="flex gap-2 text-white max-sm:hidden">
            <Link href="/cart">
              <ShoppingCart className="w-6 h-6" />
            </Link>
            <Link href="/wishlist">
              <Heart className="w-6 h-6" />
            </Link>
            <Link href="/auth/sign-in">
              <User2 className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="p-2 flex items-center justify-between mx-auto max-w-screen-xl max-md:hidden">
        <div className="flex gap-6 ">
          <CategoryMenu categories={categories} />
          <TrackOrderLocation />
          <Compare />
          <Help />
        </div>
        <div>
          <p className="text-muted-foreground text-sm font-medium">
            <PhoneCall className="w-5 h-5 inline-block" /> +1-800-123-4567
          </p>
        </div>
      </div>
      <div className=" bg-slate-100">
        <div className="mx-auto max-w-screen-xl max-sm:flex items-center justify-between py-4 px-2">
          <Breadcrumb>
            <BreadcrumbContent />
          </Breadcrumb>
          <div className="sm:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
