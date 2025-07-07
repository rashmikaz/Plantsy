import React from "react";
import "./customer.css";

const customer = () => {
  return (
    <div className="absolute top-1180">
      <h1 className="relative bottom-315 left-120 text-6xl pb-10">
        Customer Review
      </h1>

      <div className="relative bottom-260 left-35">
        <div className="glass-card-customer">
          <div className="flex flex-col items-center text-center space-y-4">
            <img
              src="src/assets/customer-01.jpeg"
              alt="Alena Patel"
              className="w-20 h-20 rounded-full object-cover border-2 border-white/30 relative right-27 top-8"
            />
            <div className="relative left-5 bottom-15">
              <h3 className="text-xl font-semibold">Maxn Raval</h3>
              <div
                className="flex text-lg relative"
                style={{ color: "#FFF84E" }}
              >
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>☆</span>
              </div>
            </div>
            <p className="text-white/80 pl-5 text-base w-70 relative bottom-5 right-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
        </div>
      </div>

      <div className="relative bottom-340 left-140">
        <div className="glass-card-customer">
          <div className="flex flex-col items-center text-center space-y-4">
            <img
              src="src/assets/customer-02.jpeg"
              alt="Alena Patel"
              className="w-20 h-20 rounded-full object-cover border-2 border-white/30 relative right-27 top-8"
            />
            <div className="relative left-5 bottom-15">
              <h3 className="text-xl font-semibold">venely k</h3>
              <div
                className="flex text-lg relative"
                style={{ color: "#FFF84E" }}
              >
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>☆</span>
              </div>
            </div>
            <p className="text-white/80 pl-5 text-base w-70 relative bottom-5 right-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
        </div>
      </div>

      <div className="relative bottom-420 left-245">
        <div className="glass-card-customer">
          <div className="flex flex-col items-center text-center space-y-4">
            <img
              src="src/assets/customer-03.jpeg"
              alt="Alena Patel"
              className="w-20 h-20 rounded-full object-cover border-2 border-white/30 relative right-27 top-8"
            />
            <div className="relative left-5 bottom-15">
              <h3 className="text-xl font-semibold">Lii thakur</h3>
              <div
                className="flex text-lg relative"
                style={{ color: "#FFF84E" }}
              >
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>☆</span>
              </div>
            </div>
            <p className="text-white/80 pl-5 text-base w-70 relative bottom-5 right-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default customer;
