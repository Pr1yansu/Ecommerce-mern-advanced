import React from "react";
import Link from "next/link";
import { Info } from "lucide-react";

const Help = () => {
  return (
    <Link
      className="flex items-center gap-1 text-muted-foreground text-sm hover:text-primary transition-colors font-medium"
      href={"/customer-service"}
    >
      <Info className="w-5 h-5" />
      Help
    </Link>
  );
};

export default Help;
