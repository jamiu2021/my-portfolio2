"use client"; // Ensure it's a client-side component

import React from "react";
import { Carousel } from "antd";
import CarouselItem from "./carousel-item";

const carouselItem = [
  {
    id: "c1",
    siteImage: "/images/constructing.png",
    title: "portfolio",
    link: "https",
    siteName: "jamiu",
  },
  {
    id: "c2",
    siteImage: "/images/cooking.png",
    title: "portfolio",
    link: "https",
    siteName: "jamiu",
  },
  {
    id: "c3",
    siteImage: "/images/family-time.png",
    title: "portfolio",
    link: "https",
    siteName: "jamiu",
  },
  {
    id: "c4",
    siteImage: "/images/working-out.png",
    title: "kkkk",
    link: "https",
    siteName: "jamiu",
  },
];
const CustomCarousel = () => (
  <Carousel arrows={true} autoplay={true}>
    {carouselItem.map((item) => (
      <CarouselItem key={item.id} {...item} />
    ))}
  </Carousel>
);
export default CustomCarousel;
