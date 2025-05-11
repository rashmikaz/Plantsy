import { useEffect, useState } from "react";
import "./imageSlider.css";
import { IoIosArrowBack } from "react-icons/io";
import gsap from "gsap";


const image1 = "src/assets/image-1.jpg";
const image2 = "src/assets/image-2.jpeg";
const image3 = "src/assets/image-3.png";
const image4 = "src/assets/image-4.png";
const image5 = "src/assets/5.jpg";
const image6 = "src/assets/6.jpg";

const imageArray = [
  { src: image1, name: "Item 1", price: "$19.99" },
  { src: image2, name: "Item 2", price: "$29.99" },
  { src: image3, name: "Item 3", price: "$39.99" },
  { src: image4, name: "Item 4", price: "$49.99" },
  { src: image5, name: "Item 5", price: "$59.99" },
  { src: image6, name: "Item 6", price: "$69.99" },
];

function ImageSlider() {
  const [midImage, setMidImage] = useState(0);
  const [rightImage, setRightImage] = useState(1);
  const [leftImage, setLeftImage] = useState(imageArray.length - 1);

  useEffect(() => {
    if (midImage === 0) {
      setLeftImage(imageArray.length - 1);
      setRightImage(1);
    } else if (midImage === imageArray.length - 1) {
      setRightImage(0);
      setLeftImage(midImage - 1);
    } else {
      setRightImage(midImage + 1);
      setLeftImage(midImage - 1);
    }

    animateTransition();
  }, [midImage]);

  const Increment = () => {
    setMidImage((midImage + 1) % imageArray.length);
  };

  const Decrement = () => {
    setMidImage((midImage - 1 + imageArray.length) % imageArray.length);
  };

  const animateTransition = () => {
    gsap.fromTo(
      ".middleImage",
      { x: -200, opacity: 0, scale: 0.6 },
      { x: 0, opacity: 1, scale: 1, duration: 0.5 }
    );
    gsap.fromTo(
      ".rightImage",
      { x: 600, opacity: 0, scale: 0.6 },
      { x: 0, opacity: 1, scale: 1, duration: 0.5 }
    );
    gsap.fromTo(
      ".leftImage",
      { x: -500, opacity: 0, scale: 0.6 },
      { x: 0, opacity: 1, scale: 1, duration: 0.5 }
    );
  };

  return (
    <div className="ImageSlider">
      <div className="Images">
        <div className="imageWrapper leftImage">
          <img src={imageArray[leftImage].src} alt={imageArray[leftImage].name} />
          <div className="infoOverlay">
            <h4>{imageArray[leftImage].name}</h4>
            <p>{imageArray[leftImage].price}</p>
            <button>Buy Now</button>
          </div>
        </div>

        <div className="imageWrapper middleImage">
          <img src={imageArray[midImage].src} alt={imageArray[midImage].name} />
          <div className="infoOverlay">
            <h3>{imageArray[midImage].name}</h3>
            <p>{imageArray[midImage].price}</p>
            <button>Buy Now</button>
          </div>
        </div>

        <div className="imageWrapper rightImage">
          <img src={imageArray[rightImage].src} alt={imageArray[rightImage].name} />
          <div className="infoOverlay">
            <h4>{imageArray[rightImage].name}</h4>
            <p>{imageArray[rightImage].price}</p>
            <button>Buy Now</button>
          </div>
        </div>
      </div>

      <div className="buttons">
        <button className="leftButton" onClick={Decrement} aria-label="Previous Slide">
          <IoIosArrowBack />
        </button>
        <button className="rightButton" onClick={Increment} aria-label="Next Slide">
          <IoIosArrowBack />
        </button>
      </div>

      <div className="dotsPlace">
        {imageArray.map((_, index) => (
          <div key={index} className={`dots ${index === midImage ? "active" : "passive"}`}></div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
