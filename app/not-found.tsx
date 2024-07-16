import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="fixed inset-0 z-[99999] bg-white flex justify-center items-center">
      <div className="mx-auto max-w-lg text-center flex flex-col gap-2 justify-center items-center">
        <Image src="/404.svg" width={400} height={400} alt="404" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Oops, page not found!
        </h1>
        <p className="mt-4 text-muted-foreground">
          Something went wrong. It&apos;s look that your requested could not be
          found. It&apos;s look like the link is broken or the page is removed.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
