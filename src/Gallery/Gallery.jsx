import React, { useEffect, useRef, useState } from "react";
import "./Gallery.css";

import img1 from "../assets/v8-apartment-da-bureau_2.jpg";
import img7 from "../assets/PV_Aesthetic_007.jpg";
import img3 from "../assets/Noas_Studio_SahuquillodeArriba__Oleh_Kardash1.jpg";
import img4 from "../assets/Misshumasshu-06.jpg";
import img5 from "../assets/HARIM_FIRST_KITCHEN_008.jpg";
import img6 from "../assets/DSCF9986-HDR___.jpg";

import img2 from "../assets/8f408b94-7928-438d-9a29-3aae63869eb7.jpeg";
import img8 from "../assets/Gguileb L Shaped Reception Desk, Solid Wood Front Desk with Counter & Lockable Drawers, Retail Checkout Customer Service Counter for Home Office Lobby Store,(J,63in-Left).jpeg";
import img9 from "../assets/Reception Desk.jpeg";
import img10 from "../assets/Misshumasshu-06.jpg";
import img11 from "../assets/HARIM_FIRST_KITCHEN_008.jpg";
import img12 from "../assets/4ccca720-0ee6-4758-b0be-c3c2346308d2.jpeg";
import img13 from "../assets/abcd.jpeg";
const images = [
  { src: img1, col: 2, row: 2 },
  { src: img2, col: 1, row: 1 },
  { src: img3, col: 1, row: 2 },
  { src: img4, col: 2, row: 1 },
  { src: img5, col: 1, row: 1 },
  { src: img6, col: 1, row: 2 },
    { src: img7, col: 2, row: 2 },
  { src: img8, col: 1, row: 1 },
  { src: img9, col: 1, row: 2 },
  { src: img10, col: 2, row: 1 },
  { src: img11, col: 1, row: 1 },
  { src: img12, col: 1, row: 1 },
   { src: img13, col: 2, row: 1 },
];

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) setIsVisible(true);
        else setIsVisible(false);
      },
      { threshold: 0.3 }
    );

    if (galleryRef.current) observer.observe(galleryRef.current);
    return () => {
      if (galleryRef.current) observer.unobserve(galleryRef.current);
    };
  }, []);

  return (
    <section ref={galleryRef} className="gallery-section" id="gallery">
      <h2 className="gallery-heading">Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className={`gallery-item ${isVisible ? "animate" : ""}`}
            style={{
              gridColumn: `span ${img.col}`,
              gridRow: `span ${img.row}`,
              animationDelay: `${index * 0.3}s`,
            }}
          >
            <img src={img.src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}