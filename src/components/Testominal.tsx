"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testominal() {
  return (
    <div className="h-[30rem] md:h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-neutral-900 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden px-4 md:px-10">
      <h1 className="text-xl md:text-3xl font-bold absolute top-6 md:top-10 left-4 md:left-24">
        Testimonials
      </h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Working with Himanshu Khairnar has been a transformative experience for our company. Their ability to take our vision and turn it into a stunning, user-friendly website exceeded all our expectations. The level of detail, creativity, and dedication they bring to every project is unmatched.",
    name: "Prithviraj",
    github: "Prithviraj264",
  },
  {
    quote:
      "Himanshu Khairnar is a true professional. They understood our needs from day one and delivered a website that not only looks amazing but also performs flawlessly. Their expertise in modern web technologies is evident in the quality of their work.",
    name: "Sahil Tadavi",
    github: "SahilTadavi08",
  },
  {
    quote:
      "Our new website has received rave reviews, and we owe it all to Himanshu Khairnar. They were attentive, responsive, and committed to delivering a product that aligns perfectly with our brand. We couldn't have asked for a better partner in this project.",
    name: "Vaibhav Sapakale",
    github: "Vaibhavsapakale45",
  },
  {
    quote:
      "Himanshu Khairnar is not just a developer; he is a problem solver. They took on our complex requirements and turned them into a seamless digital experience. Their work has significantly improved our online presence and user engagement.",
    name: "Vansh Pawar",
    github: "Vanshpawar14",
  },
];
