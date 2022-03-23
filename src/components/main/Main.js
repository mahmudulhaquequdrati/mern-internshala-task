import React from "react";
import Social from "../social/Social";

const Main = () => {
  return (
    <div className="  container px-1 px-sm-2 px-md-3 px-lg-5 mt-4 mb-5">
      <div className="px-1 px-sm-2 px-md-3 px-lg-5 ">
        <div className="d-flex align-items-center justify-content-between px-2 px-md-0 border-bottom border-secondary pb-2">
          <div className="d-flex align-items-center gap-4 justify-content-between justify-content-md-start mt-2">
            <p className="mb-0 fw-bold">All Post (368)</p>
            <p className="mb-0 d-none d-lg-block">Article</p>
            <p className="mb-0 d-none d-lg-block">Event</p>
            <p className="mb-0 d-none d-lg-block">Education</p>
            <p className="mb-0 d-none d-lg-block">Jobs</p>
          </div>
          <button
            style={{
              backgroundColor: "#F1F3F5",
            }}
            className="px-4 py-2 d-block d-lg-none text-dark border-0 outline-none "
          >
            <i className="fa-solid fa-caret-down me-2"></i>
            Filter(All)
          </button>
          <div className="d-none d-lg-block ">
            <button
              style={{
                backgroundColor: "#F1F3F5",
              }}
              className="px-4 py-2 border-0 text-dark"
            >
              Write a Post
              <i className="fa-solid fa-caret-down ms-2"></i>
            </button>
            <button className="px-4 bg-primary py-2 border-0 rounded-2 text-light ms-2">
              <i className="fa-solid fa-user-group me-2"></i>
              Join Group
            </button>
          </div>
        </div>
        {/* social */}
        <Social />
      </div>
    </div>
  );
};

export default Main;
