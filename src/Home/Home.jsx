import { useState, useEffect } from "react";
import "./Home.css";
import ParticlesBackground from "./ParticlesBackground.jsx";

const quotes = [
  ["Design your space,", "Define your life."],
  ["Elegance begins", "With simplicity."],
  ["Your dream home,", "Our inspiration."],
  ["Transform spaces,", "Transform lives."],
  ["Where comfort", "Meets creativity."]
];

export default function Home() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");

  useEffect(() => {
    let interval;

    // Reset both lines at the start of each quote cycle
    setLine1("");
    setLine2("");

    // Type first line
    const typeLine1 = () => {
      const text = quotes[quoteIndex][0];
      let charIndex = 0;
      
      interval = setInterval(() => {
        if (charIndex < text.length) {
          setLine1(text.substring(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(interval);
          // After small pause, type second line
          setTimeout(typeLine2, 500);
        }
      }, 100);
    };

    // Type second line
    const typeLine2 = () => {
      const text = quotes[quoteIndex][1];
      let charIndex = 0;
      
      interval = setInterval(() => {
        if (charIndex < text.length) {
          setLine2(text.substring(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(interval);
          // After pause, move to next quote
          setTimeout(() => {
            setQuoteIndex((prev) => (prev + 1) % quotes.length);
          }, 2500);
        }
      }, 100);
    };

    typeLine1();

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [quoteIndex]);

  return (
    <ParticlesBackground>
      <section className="carousel" id="home">
        <div className="carousel-slide" key={quoteIndex}>
          <h1 className="quote">{line1}</h1>
          <h1 className="quote">{line2}</h1>
        </div>
        <div className="carousel-buttons">
      <button className="btn-primary">Get Started</button>
      <button className="btn-secondary">Learn More</button>
    </div>
       
      </section>
    </ParticlesBackground>
  );
}