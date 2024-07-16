"use client";
import React, { act } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileMenu = () => {
  const pathname = usePathname();
  const Links = [
    {
      label: "Home",
      href: "/",
      active: pathname === "/",
    },
    {
      label: "Shop",
      href: "/shop",
      active: pathname === "/shop",
    },
    {
      label: "About",
      href: "/about",
      active: pathname === "/about",
    },
    {
      label: "Contact",
      href: "/contact",
      active: pathname === "/contact",
    },
    {
      label: "Cart",
      href: "/cart",
      active: pathname === "/cart",
    },
    {
      label: "Login",
      href: "/auth/sign-in",
      active: pathname === "/auth/sign-in" || pathname === "/auth/sign-up",
    },
  ];
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Menu className="h-6 w-6 text-black" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              {Links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`block py-2 text-sm font-medium ${
                    link.active ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <SheetClose>{link.label}</SheetClose>
                </Link>
              ))}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMenu;
