import React from "react";
import Link from "next/link";
import { MapPinIcon } from "lucide-react";

const TrackOrderLocation = () => {
  return (
    <Link
      className="flex items-center gap-1 text-muted-foreground text-sm hover:text-primary transition-colors font-medium"
      href={"/track"}
    >
      <MapPinIcon className="w-5 h-5" />
      Track Order
    </Link>
  );
};

export default TrackOrderLocation;
