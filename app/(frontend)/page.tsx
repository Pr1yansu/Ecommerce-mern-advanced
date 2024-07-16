import React from "react";
import { Carousel } from "@/components/ui/carousel";
import HomeCarousel from "./components/home-carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-2 flex">
      <Carousel className="relative w-2/3 aspect-video p-1">
        <HomeCarousel />
      </Carousel>
      <div className="flex flex-col w-1/3">
        <div className="flex-1 rounded-md p-1">
          <Card className="h-full w-full bg-black">
            <CardHeader className="text-yellow-500 uppercase">
              Summer sales
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-xl text-white">
                New Google <br />
                Pixel 6 Pro
              </CardDescription>
              <Button size={"lg"}>
                Shop now <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="flex-1 rounded-md p-1">
          <Card className="h-full w-full bg-slate-100 flex items-center">
            <div className="w-1/3"></div>
            <div className=" flex flex-col  justify-center h-full w-2/3">
              <CardContent className="space-y-4">
                <CardDescription className="text-xl text-black font-semibold">
                  Xiaomi <br />
                  FlipBuds Pro
                </CardDescription>
                <Button>
                  Shop now <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
