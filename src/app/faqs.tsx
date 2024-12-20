"use client";

import React from "react";
import { Typography, Card } from "@material-tailwind/react";

const FAQS = [
  {
    title: "How do I get started?",
    desc: "Getting started is easy! Simply download our app, and let the guide walk you through it.",
  },
  {
    title: "Is there a free trial available?",
    desc: "Yes, you don't need to pay anything to try our app. It's completely free to start using it.",
  },
  {
    title: "How can I upgrade my account?",
    desc: "To upgrade your account, log in and navigate to the Upgrade Account section in your dashboard. Follow the prompts to select your preferred plan.",
  },
  {
    title: "Can I cancel my subscription anytime?",
    desc: "Absolutely, you can cancel your subscription at any time with no questions asked. Your subscription will remain active until the end of the current billing cycle.",
  },
  {
    title: "How can I upgrade my account to paid?",
    desc: "To upgrade your account, log in and navigate to the Upgrade Account section in your dashboard. Follow the prompts to select your preferred plan.",
  },
  {
    title: "What if I need help or have technical issues?",
    desc: "Our dedicated support team is here to assist you. Reach out via official channels (email, or phone), and we'll get back to you promptly.",
  },
];

export function Faqs() {
  return (
    <section className="px-8 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            FAQ
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 !text-gray-500 lg:w-3/5"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Here are some of our most frequently asked questions.
          </Typography>
        </div>

        <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-3">
          {FAQS.map(({ title, desc }) => (
            <Card
              key={title}
              shadow={false}
              color="transparent"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <Typography
                color="blue-gray"
                className="pb-6"
                variant="h4"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {title}
              </Typography>
              <div className="pt-2">
                <Typography
                  className="font-normal !text-gray-500"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  {desc}
                </Typography>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
