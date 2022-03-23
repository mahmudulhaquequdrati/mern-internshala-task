import React, { useState } from "react";
import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img3.png";
import smallImg from "../../assets/img/small-img.png";
import smallImg2 from "../../assets/img/small-img2.png";
import dot from "../../assets/icons/more.png";
import vector from "../../assets/icons/Vector.png";

const Social = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const setDropdownFunc = () => {
    setDropdown(!dropdown);
  };
  const setDropdownFunc1 = () => {
    setDropdown1(!dropdown1);
  };
  const setDropdownFunc2 = () => {
    setDropdown2(!dropdown2);
  };
  const setDropdownFunc3 = () => {
    setDropdown3(!dropdown3);
  };
  return (
    <div className="">
      <div className="row mt-4 gx-5  mx-1   ">
        <div className="col-12 col-md-8 ps-0 pe-0 pe-md-5">
          <div className="border mb-3 rounded-3">
            <div className="">
              <img width="100%" src={img1} alt="" />
            </div>
            <div className="px-2 px-md-4">
              <p className="mt-3 fw-bold mb-2">
                <i className="fa-solid fa-pen"></i> Article
              </p>
              <div className="d-flex justify-content-between position-relative">
                <p className="fw-bold mb-2 pe-5">
                  What if famous brands had regular fonts? Meet RegulaBrands!
                </p>
                <div className="">
                  <img
                    onClick={setDropdownFunc}
                    width="20px"
                    height="24px"
                    src={dot}
                    alt=""
                    className="mb-2"
                  />
                  <div
                    style={{
                      position: "absolute",
                      right: "0",
                      backgroundColor: "white",
                      transition: ".2s all",
                    }}
                    className={
                      dropdown ? "d-block pe-5 ps-4 pt-2 shadow-lg" : "d-none"
                    }
                  >
                    <p className="mb-2 mt-1">edit</p>
                    <p className="mb-2">report</p>
                    <p className="mb-2">option 3</p>
                  </div>
                </div>
              </div>
              <p className="text-secondary mb-4">
                I’ve worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </p>
            </div>
            <div className="d-flex justify-content-between px-2 px-md-4 mb-4">
              <div className="d-flex align-items-center gap-3">
                <img src={smallImg} alt="" />
                <p className="mb-0 fw-bold">Sarthak Karma</p>
              </div>
              <div className="d-flex align-items-center gap-4">
                <p className="mb-0">1.4k views</p>
                <p
                  className="mb-0 px-2 py-1"
                  style={{
                    backgroundColor: "#F1F3F5",
                  }}
                >
                  <i className="fa-solid fa-share-nodes fa-lg"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="border mb-3 rounded-3">
            <div className="">
              <img width="100%" src={img2} alt="" />
            </div>
            <div className="px-2 px-md-4">
              <p className="mt-3 fw-bold mb-2">
                <i className="fa-solid fa-pen"></i> Education
              </p>
              <div className="d-flex justify-content-between position-relative">
                <p className="fw-bold mb-2 pe-5">
                  Tax Benefits for Investment under National Pension Scheme
                  launched by Government
                </p>
                <div className="">
                  <img
                    onClick={setDropdownFunc1}
                    width="20px"
                    height="24px"
                    src={dot}
                    alt=""
                    className="mb-2"
                  />
                  <div
                    style={{
                      position: "absolute",
                      right: "0",
                      backgroundColor: "white",
                      transition: ".2s all",
                    }}
                    className={
                      dropdown1 ? "d-block pe-5 ps-4 pt-2 shadow-lg" : "d-none"
                    }
                  >
                    <p className="mb-2 mt-1">edit</p>
                    <p className="mb-2">report</p>
                    <p className="mb-2">option 3</p>
                  </div>
                </div>
              </div>
              <p className="text-secondary mb-4">
                I’ve worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </p>
            </div>
            <div className="d-flex justify-content-between px-2 px-md-4 mb-4">
              <div className="d-flex align-items-center gap-3">
                <img src={smallImg} alt="" />
                <p className="mb-0 fw-bold">Joshep Karma</p>
              </div>
              <div className="d-flex align-items-center gap-4">
                <p className="mb-0">1.4k views</p>
                <p
                  className="mb-0 px-2 py-1"
                  style={{
                    backgroundColor: "#F1F3F5",
                  }}
                >
                  <i className="fa-solid fa-share-nodes fa-lg"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="border mb-3 rounded-3">
            <div className="">
              <img width="100%" src={img3} alt="" />
            </div>
            <div className="px-2 px-md-4">
              <p className="mt-3 fw-bold mb-2">
                <i className="fa-solid fa-pen pe-2"></i> Meetup
              </p>
              <div className="d-flex justify-content-between position-relative">
                <p className="fw-bold mb-2 pe-5">
                  Finance & Investment Elite Social Mixer @Lujiazui
                </p>

                <div className="">
                  <img
                    onClick={setDropdownFunc2}
                    width="20px"
                    height="24px"
                    src={dot}
                    alt=""
                    className="mb-2"
                  />
                  <div
                    style={{
                      position: "absolute",
                      right: "0",
                      backgroundColor: "white",
                      transition: ".2s all",
                    }}
                    className={
                      dropdown2 ? "d-block pe-5 ps-4 pt-2 shadow-lg" : "d-none"
                    }
                  >
                    <p className="mb-2 mt-1">edit</p>
                    <p className="mb-2">report</p>
                    <p className="mb-2">option 3</p>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-5">
                <p>
                  <i className="fa-solid fa-calendar-days pe-2"></i>Fri, 12
                  Oct,2022
                </p>
                <div className="">
                  <i className="fa-solid fa-location-dot pe-2"></i>
                  Ahmedabad, India
                </div>
              </div>
              <div
                className="border text-center my-2 py-2 "
                style={{
                  color: "tomato",
                  fontWeight: "600",
                  fontSize: "13px",
                }}
              >
                Visit Website
              </div>
            </div>
            <div className="d-flex justify-content-between px-2 px-md-4 mb-4">
              <div className="d-flex align-items-center gap-3">
                <img src={smallImg2} alt="" />
                <p className="mb-0 fw-bold">Ronal Jones</p>
              </div>
              <div className="d-flex align-items-center gap-4">
                <p className="mb-0">1.4k views</p>
                <p
                  className="mb-0 px-2 py-1"
                  style={{
                    backgroundColor: "#F1F3F5",
                  }}
                >
                  <i className="fa-solid fa-share-nodes fa-lg"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="border rounded-3">
            <div className="px-2 px-md-4">
              <p className="mt-3 fw-bold mb-2">
                <i className="fa-solid fa-pen pe-2"></i> Job
              </p>
              <div
                style={{
                  position: "relative",
                }}
                className="d-flex justify-content-between"
              >
                <p className="fw-bold mb-2 pe-5">Software Developer</p>

                <div className="">
                  <img
                    onClick={setDropdownFunc3}
                    width="20px"
                    height="24px"
                    src={dot}
                    alt=""
                    className="mb-2"
                  />
                  <div
                    style={{
                      position: "absolute",
                      right: "0",
                      backgroundColor: "white",
                      transition: ".2s all",
                    }}
                    className={
                      dropdown3 ? "d-block pe-5 ps-4 pt-2 shadow-lg" : "d-none"
                    }
                  >
                    <p className="mb-2 mt-1">edit</p>
                    <p className="mb-2">report</p>
                    <p className="mb-2">option 3</p>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-5">
                <p>
                  <i className="fa-solid fa-calendar-days pe-2"></i>Fri, 12
                  Oct,2022
                </p>
                <div className="">
                  <i className="fa-solid fa-location-dot pe-2"></i>
                  Ahmedabad, India
                </div>
              </div>
              <div
                className="border text-center my-2 py-2 text-success"
                style={{
                  fontWeight: "600",
                  fontSize: "13px",
                }}
              >
                Apply on Timesjobs
              </div>
            </div>
            <div className="d-flex justify-content-between px-2 px-md-4 mb-4">
              <div className="d-flex align-items-center gap-3">
                <img src={smallImg2} alt="" />
                <p className="mb-0 fw-bold">Ronal Jones</p>
              </div>
              <div className="d-flex align-items-center gap-4">
                <p className="mb-0">1.4k views</p>
                <p
                  className="mb-0 px-2 py-1"
                  style={{
                    backgroundColor: "#F1F3F5",
                  }}
                >
                  <i className="fa-solid fa-share-nodes fa-lg"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 d-none d-md-block ps-2 mt-4">
          <div className="border-bottom pb-1 d-flex">
            <i className="fa-solid fa-location-dot pe-2"></i>
            <input
              type="text"
              placeholder="Noida, India"
              className="w-75 border-0 custom-input"
            />
            <i className="fa-solid fa-pen ps-3"></i>
          </div>
          <div
            className="d-flex mt-4"
            style={{
              fontSize: "12px",
            }}
          >
            <div className="me-2">
              <img src={vector} alt="" />
            </div>
            <p className="mb-0">
              Your location will help us server better and extend a personalised
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
