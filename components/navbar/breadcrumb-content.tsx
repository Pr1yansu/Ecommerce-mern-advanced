"use client";
import React from "react";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const BreadcrumbContent = () => {
  const pathname = usePathname();
  const paths = pathname.split("/");
  if (pathname === "/") {
    return null;
  }
  return (
    <>
      <BreadcrumbList className="py-4 px-2">
        {paths.map((path, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/${path}`}
                className={cn(
                  "transition-colors hover:text-foreground text-xs capitalize font-medium",
                  index === paths.length - 1 ? "text-blue-400" : ""
                )}
              >
                {path === "" ? "Home" : path}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < paths.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </>
  );
};

export default BreadcrumbContent;
