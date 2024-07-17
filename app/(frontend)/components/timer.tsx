"use client";
import { cn } from "@/lib/utils";
import React from "react";

interface TimerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  time?: Date;
}

export const TimerContainer = ({
  ended,
  children,
}: {
  ended: boolean;
  children: React.ReactNode;
}) => (
  <div
    className={cn(
      "p-1 px-2 text-sm rounded-md",
      ended ? "bg-red-500 text-white" : "bg-green-500 text-white"
    )}
  >
    {children}
  </div>
);

const Timer = ({ className, time, ...props }: TimerProps) => {
  const [day, setDay] = React.useState(0);
  const [hour, setHour] = React.useState(0);
  const [minute, setMinute] = React.useState(0);
  const [second, setSecond] = React.useState(0);

  React.useEffect(() => {
    if (!time) {
      return;
    }
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = time.getTime() - now;
      setDay(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHour(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinute(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSecond(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  if (!time) {
    return null;
  }

  if (time && time.getTime() < new Date().getTime()) {
    return (
      <TimerContainer ended>
        <h4>Time is up! Deal has ended.</h4>
      </TimerContainer>
    );
  }

  return (
    <TimerContainer ended={false}>
      <div className={className} {...props}>
        <div className="flex gap-2">
          <div>
            <span>{day}</span>
            <span>d</span>
          </div>
          <div>
            <span>{hour}</span>
            <span>h</span>
          </div>
          <div>
            <span>{minute}</span>
            <span>m</span>
          </div>
          <div>
            <span>{second}</span>
            <span>s</span>
          </div>
        </div>
      </div>
    </TimerContainer>
  );
};

export default Timer;
