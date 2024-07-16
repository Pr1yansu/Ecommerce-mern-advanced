"use client";
import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

const SearchInput = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [search, setSearch] = React.useState<string | null>(null);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (search) {
        params.set("search", search);
      } else {
        params.delete("search");
      }

      replace(`${pathname}?${params.toString()}`);
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, [search, searchParams, pathname, replace]);

  return (
    <>
      <div className="max-w-screen-md w-full px-4 py-2 max-sm:hidden">
        <Input
          placeholder="Search for products"
          className="rounded-sm focus-visible:ring-0 focus-visible:ring-offset-0"
          value={search || ""}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="py-2 sm:hidden">
        <Dialog>
          <DialogTrigger>
            <Search className="w-6 h-6 text-white" />
          </DialogTrigger>
          <DialogContent className="top-0 translate-y-2">
            <DialogHeader>
              <DialogDescription>
                <Input
                  placeholder="Search for products"
                  className="rounded-sm focus-visible:ring-0 focus-visible:ring-offset-0 my-4"
                  value={search || ""}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default SearchInput;
