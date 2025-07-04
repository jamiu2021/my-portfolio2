"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./image-slideshow.module.css";
import welcomeImg from "@/assets/code-image4.jpg";
import creativeImg from "@/assets/code-image1.jpg";
import planningImg from "@/assets/code-image5.jpg";
import innovationImg from "@/assets/code-image2.jpg";
import teamworkImg from "@/assets/code-image8.jpg";
import visionImg from "@/assets/code-image3.jpg";
import excellentImg from "@/assets/code-image7.jpg";
import successImg from "@/assets/code-image6.jpg";

const images = [
  { image: welcomeImg, alt: "welcome" },
  { image: creativeImg, alt: "creative" },
  { image: planningImg, alt: "planning" },
  { image: innovationImg, alt: "innovative" },
  { image: teamworkImg, alt: "teamwork" },
  { image: visionImg, alt: "vision" },
  { image: excellentImg, alt: "excellent" },
  { image: successImg, alt: "success" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const active = "";
  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
