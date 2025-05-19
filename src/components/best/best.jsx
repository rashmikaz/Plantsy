import { useEffect, useState } from "react";
import "./best.css";
import { IoIosArrowBack } from "react-icons/io";
import gsap from "gsap";

const imageArray = [
  { src: "src/assets/image-2.png", name: "We Have Small And Best O2 Plants Collections", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
  { src: "src/assets/best-01.png", name: "We Have Small And Best O2 Plants Collections", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
  { src: "src/assets/best-03.png", name: "We Have Small And Best O2 Plants Collections", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
  { src: "src/assets/best-04.png", name: "We Have Small And Best O2 Plants Collections", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
  { src: "src/assets/best-05.png", name: "We Have Small And Best O2 Plants Collections", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
  { src: "src/assets/best-06.png", name: "We Have Small And Best O2 Plants Collections", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
];

function Best() {
  const [midImage, setMidImage] = useState(0);

  const nextImage = () => {
    setMidImage((prev) => (prev + 1) % imageArray.length);
  };

  const prevImage = () => {
    setMidImage((prev) => (prev - 1 + imageArray.length) % imageArray.length);
  };

  useEffect(() => {
    gsap.fromTo(
      ".MainImage",
      { x: -100, opacity: 0, scale: 0.6 },
      { x: 0, opacity: 1, scale: 1, duration: 0.5 }
    );
  }, [midImage]);

  return (
  
    <div className="relative bottom-460">
      <h1 className="text-6xl pb-10 relative left-150 top-25">Our Best o2</h1>
      <div className="SliderContainer">
      <div className="SliderImages">
        <div className="NavButtons">
          <button className="NavLeft" onClick={prevImage} aria-label="Previous Slide">
            <IoIosArrowBack />
          </button>
          <button className="NavRight" onClick={nextImage} aria-label="Next Slide">
            <IoIosArrowBack />
          </button>
        </div>

        <div className="SlideWrapper MainImage">
          <img
            src={imageArray[midImage].src}
            alt={imageArray[midImage].name}
          />
          <div className="TextOverlay">
            <h3>{imageArray[midImage].name}</h3>
            <p>{imageArray[midImage].p}</p>
            <button>Buy Now</button>
          </div>
        </div>
      </div>

      <div className="DotContainer">
        {imageArray.map((_, index) => (
          <div
            key={index}
            className={`Dot ${index === midImage ? "active" : "passive"}`}
          ></div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Best;
