"use client"; // Ensure it's a client-side component

import React from "react";
import { Carousel } from "antd";
import CarouselItem from "./carousel-item";

const carouselItem = [
  {
    id: "c1",
    siteImage: "/images/e-commerce.png",
    title: "Product-list",
    link: "https://e-shopping-uztu.vercel.app/",
    siteName: "E-commerce",
  },
  {
    id: "c2",
    siteImage: "/images/e-commerce.png",
    title: "Cart Page",
    link: "https://e-shopping-uztu.vercel.app/cart",
    siteName: "E",
  },
  {
    id: "c3",
    siteImage: "/images/portfolioHomepage.png",
    title: "Home page",
    link: "https://my-portfolio2-git-main-jamiuolaide1991gmailcoms-projects.vercel.app/",
    siteName: "homePage",
  },
  {
    id: "c4",
    siteImage: "/images/portfolioHomepage.png",
    title: "Our Servic",
    link: "https://my-portfolio2-git-main-jamiuolaide1991gmailcoms-projects.vercel.app/service",
    siteName: "Portfoli-Service",
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
