"use client";
import React from "react";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";

const Loading = () => {
  const router = useRouter();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const totalDuration = 2000;
    const increment = 100 / (totalDuration / 100);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + increment;
      });
    }, 100);

    if (progress === 100) {
      router.push("/");
    }

    return () => clearInterval(interval);
  }, [progress, router]);

  return (
    <div className="fixed inset-0 flex min-h-screen flex-col items-center justify-center bg-white z-[999]">
      <div className="flex flex-col items-center gap-4">
        <MountainIcon className="h-8 w-8 text-primary" />
        <Progress value={progress} className="w-32" />
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

export default Loading;
