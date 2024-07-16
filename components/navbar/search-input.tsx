"use client";
import React, { useEffect } from "react";
import { Input } from "../ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
    <div>
      <Input
        placeholder="Search for products"
        className="max-w-screen-md m-2 rounded-sm w-screen focus-visible:ring-0 focus-visible:ring-offset-0"
        value={search || ""}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
