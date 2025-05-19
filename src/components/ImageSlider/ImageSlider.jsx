import { useEffect, useState } from "react";
import "./imageSlider.css";
import { IoIosArrowBack } from "react-icons/io";
import gsap from "gsap";

const imageArray = [
  { src: "src/assets/image-5.png", name: "Trendy House Plant", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
  { src: "src/assets/image-6.png", name: "Trendy House Plant", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
  { src: "src/assets/image-2.png", name: "Trendy House Plant", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
  { src: "src/assets/image-7.png", name: "Trendy House Plant", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
  { src: "src/assets/best-05.png", name: "Trendy House Plant", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
  { src: "src/assets/image-8.png", name: "Trendy House Plant", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
];

function ImageSlider() {
  const [midImage, setMidImage] = useState(0);

  const Increment = () => {
    setMidImage((prev) => (prev + 1) % imageArray.length);
  };

  const Decrement = () => {
    setMidImage((prev) => (prev - 1 + imageArray.length) % imageArray.length);
  };

  useEffect(() => {
    gsap.fromTo(
      ".middleImage",
      { x: -100, opacity: 0, scale: 0.6 },
      { x: 0, opacity: 1, scale: 1, duration: 0.5 }
    );
  }, [midImage]);

  return (
    <div className="ImageSlider">
      <div className="Images">
        <div className="buttons">
          <button className="leftButton" onClick={Decrement} aria-label="Previous Slide">
            <IoIosArrowBack />
          </button>
          <button className="rightButton" onClick={Increment} aria-label="Next Slide">
            <IoIosArrowBack />
          </button>
        </div>

        <div className="imageWrapper middleImage">
          <img
            src={imageArray[midImage].src}
            alt={imageArray[midImage].name}
          />
          <div className="infoOverlay">
            <h3>{imageArray[midImage].name}</h3>
            <p>{imageArray[midImage].p}</p>
            <button>Buy Now</button>
          </div>
        </div>
      </div>

      <div className="dotsPlace">
        {imageArray.map((_, index) => (
          <div
            key={index}
            className={`dots ${index === midImage ? "active" : "passive"}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
