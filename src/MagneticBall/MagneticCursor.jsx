import { useEffect } from "react";
import "./MagneticCursor.css";

export default function MagneticCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor-ball");

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div className="cursor-ball"></div>;
}
