import React from "react";
import "./review.css";

const review = () => {
  return (
    <div className="glass-card">
      <div className="flex flex-col items-center text-center space-y-4">
        <img
          src="src/assets/review-01.jpeg"
          alt="Alena Patel"
          className="w-20 h-20 rounded-full object-cover border-2 border-white/30 relative right-27 top-8"
        />
        <div className="relative left-5 bottom-15">
          <h3 className="text-xl font-semibold">alena Patel</h3>
          <div className="flex text-lg relative" style={{ color: "#FFF84E" }}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>☆</span>
          </div>
        </div>
        <p className="text-white/80 text-sm w-70 relative bottom-10 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt...
        </p>
      </div>
    </div>
  );
};

export default review;
