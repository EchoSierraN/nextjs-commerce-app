"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "Interactive Prices",
    children:
      "Commit to the products you love. Be the last person standing at the end of the bid.",
  },
  {
    icon: HeartIcon,
    title: "Find long lost interests",
    children:
      "Advertisement is discovery based. Sit back and let your favorite products find you.",
  },

  {
    icon: LockClosedIcon,
    title: "Achievement Unlocked",
    children:
      "Stand above the crowd. Earn cupons that make future purchases easier.",
  },
  {
    icon: LightBulbIcon,
    title: "Personalized Recommendations",
    children:
      "Teach our app what you want. Products tailored to your needs will be sent your way.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          color="blue-gray"
          className="mb-2 font-bold uppercase"
        >
          Live Commerce App
        </Typography>
        <Typography
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          variant="h1"
          color="blue-gray"
          className="mb-4"
        >
          Shop the Stream, Own the Deal!
        </Typography>
        <Typography
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          Turn every live stream into an opportunity to shop smarter. Bid on
          exclusive items, compete with other buyers, and take home great
          products at unbeatable prices—all live and interactive.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
