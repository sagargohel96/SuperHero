import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
export default function prevent() {
  const slideImages = [
    {
      url: "./try.jpg",
      caption: "Slide 1",
    },
    {
      url: "./try2.jpg",
      caption: "Slide 2",
    },
    {
      url: "assets/try3.jpg",
      caption: "Slide 3",
    },
  ];

  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}>
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
