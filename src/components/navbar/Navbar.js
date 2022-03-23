import React from "react";
import logo from "../../assets/icons/logo.png";

const Navbar = () => {
  return (
    <div className="d-none d-md-flex align-items-center justify-content-around">
      <div className="logo py-2">
        <img width="200px" src={logo} alt="" />
      </div>
      <div
        style={{
          width: "35%",
          borderRadius: "50px",
        }}
        className="border border-secondary ps-4 py-2 d-flex align-items-center"
      >
        <i className="fa-solid fa-magnifying-glass "></i>
        <input
          className="border-0 w-75  ps-3 pe-0 custom-input"
          type="text"
          placeholder="Search for your favorite groups in ATG"
        />
      </div>
      <div className="">
        <p className="mb-0">
          Create account.<span className="text-primary">It's free</span>{" "}
          <i className="fa-solid fa-caret-down ms-2"></i>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
