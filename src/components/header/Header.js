import React from "react";
import bg from "../../assets/img/bg.png";

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh",
        backgroundColor: "gray",
        backgroundBlendMode: "multiply",
      }}
      className="text-white  custom-bg2"
    >
      <div className="d-flex justify-content-between d-md-none px-4 pt-4">
        <i class="fa-solid fa-arrow-left fa-lg"></i>
        <button className="text-white bg-transparent border rounded-3 px-4 py-1">
          Join Group
        </button>
      </div>
      <div
        className="d-flex align-items-end custom-bg pb-3 pb-md-5"
        style={{
          height: "70vh",
        }}
      >
        <div className="pb-2 ps-2 ms-2 ps-sm-2 ms-sm-2 ps-md-5 ms-md-5 ps-lg-5 ms-lg-5 ">
          <h2>Computer Engineering</h2>
          <p>142.765 Computer Engineers follow this</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
