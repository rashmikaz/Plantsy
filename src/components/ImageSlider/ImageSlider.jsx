import { useEffect, useState } from "react";
import "./imageSlider.css";
import { IoIosArrowBack } from "react-icons/io";
import gsap from "gsap";

const imageArray = [
  { src: "src/assets/image-1.jpg", name: "Trendy House Plant", price: "Calathea plant" },
  { src: "src/assets/image-2.jpeg", name: "Trendy House Plant", price: "Calathea plant" },
  { src: "src/assets/image-3.png", name: "Trendy House Plant", price: "Calathea plant" },
  { src: "src/assets/image-4.png", name: "Trendy House Plant", price: "Calathea plant" },
  { src: "src/assets/5.jpg", name: "Trendy House Plant", price: "Calathea plant" },
  { src: "src/assets/6.jpg", name: "Trendy House Plant", price: "Calathea plant" },
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
            <p>{imageArray[midImage].price}</p>
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
