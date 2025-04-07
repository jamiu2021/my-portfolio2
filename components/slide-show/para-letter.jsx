'use client'
import { useState,useEffect } from 'react';
import classes from './image-slideshow.module.css'
const parag = [
  { motivation: "passionist" },
  { motivation: "problem solver" },
  { motivation: "Creative minds" },
  { motivation: "Visionaries" },
];
export default function ParagSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < parag.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const active = "";
  return (
    <div className={classes.slideshow}>
      {parag.map((para, index) => (
        <h3
          key={index}
          className={index === currentImageIndex ? classes.active : ""}
          
        >
          {para.motivation}
        </h3>
      ))}
    </div>
  );
}
