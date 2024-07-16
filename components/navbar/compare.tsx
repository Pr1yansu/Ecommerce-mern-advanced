import { RefreshCcw } from "lucide-react";
import Link from "next/link";
import React from "react";

const Compare = () => {
  return (
    <Link
      className="flex items-center gap-1 text-muted-foreground text-sm hover:text-primary transition-colors font-medium"
      href={"/compare"}
    >
      <RefreshCcw className="w-5 h-5" />
      Compare
    </Link>
  );
};

export default Compare;
