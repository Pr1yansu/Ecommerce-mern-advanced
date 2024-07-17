import React from "react";
import { Box, Trophy, CreditCard, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";

const Features = [
  {
    title: "Fastest Delivery",
    delivery: "Get your product within 3 days",
    icon: Box,
  },
  {
    title: "Secure Payment",
    delivery: "We ensure secure payment",
    icon: CreditCard,
  },
  {
    title: "Customer Support",
    delivery: "24/7 customer support",
    icon: Headphones,
  },
  {
    title: "Quality Assurance",
    delivery: "Best quality products",
    icon: Trophy,
  },
];

const HomeFeature = () => {
  return (
    <div className="max-w-screen-xl border rounded-md border-slate-300 w-full flex flex-wrap justify-between">
      {Features.map((feature, index) => (
        <React.Fragment key={index}>
          <div
            className={cn(
              "flex gap-2 items-center w-full md:w-1/2 lg:w-1/4 justify-center py-4",
              index !== Features.length - 1
                ? "md:border-r md:border-slate-300"
                : ""
            )}
          >
            <div className="w-full overflow-hidden max-w-60 flex gap-2">
              <feature.icon className="w-8 h-8 text-gray-700" />
              <div>
                <h3 className="text-sm font-semibold text-gray-700">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-500">{feature.delivery}</p>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default HomeFeature;
