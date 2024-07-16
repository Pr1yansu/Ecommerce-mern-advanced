import { Progress } from "@/components/ui/progress";
import React from "react";

const loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <MountainIcon className="h-8 w-8 text-primary" />
        <Progress value={50} className="w-32" />
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
};

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

export default loading;
