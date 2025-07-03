"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./image-slideshow.module.css";
import cookingImg from "@/assets/cooking.png";
import constrImg from "@/assets/constructing.png";
import familyImg from "@/assets/family-time.png";
import workingImg from "@/assets/working-on-computer.png";
import workingoutImg from "@/assets/working-out.png";

const images = [
  { image: cookingImg, alt: "A delicious, juicy burger" },
  { image: constrImg, alt: "A delicious, spicy curry" },
  { image: familyImg, alt: "Steamed dumplings" },
  { image: workingImg, alt: "Mac and cheese" },
  { image: workingoutImg, alt: "A delicious pizza" },
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
