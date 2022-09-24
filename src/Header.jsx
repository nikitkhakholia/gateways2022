import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ children }) {
  let navigate = useNavigate();

  return (
    <div className="">
      <div
        className="border-bottom border-dark"
        style={{
          position: "fixed",
          top: "0",
          width: "100%",
          zIndex: "1",
        }}
      >
        <nav class="navbar navbar-expand-lg bg-white">
          <div class="container-fluid">
            <div
              class="navbar-brand tw-cursor-pointer"
              onClick={(x) => {
                navigate("/");
              }}
            >
              <img src={require("./assets/christlogo.png")} alt="LOGO" />
            </div>
            <div
              class="navbar-brand tw-cursor-pointer"
              onClick={(x) => {
                navigate("/");
              }}
            >
              <img src={require("./assets/gateways.png")} alt="LOGO" />
            </div>
            <button
              class="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="me-auto mb-2 mb-lg-0"></div>
              <ul class="navbar-nav d-flex px-4">
                <li className="nav-item px-2">
                  <div
                    className={"nav-link  tw-cursor-pointer"}
                    onClick={(e) => {
                      navigate("/");
                    }}
                  >
                    Home
                  </div>
                </li>
                <li className="nav-item px-2">
                  <div
                    className="nav-link tw-cursor-pointer"
                    onClick={(e) => {
                      window.location="/#events"
                    }}
                  >
                    Events
                  </div>
                </li>

                <li className="nav-item  px-2">
                  <a className="nav-link" href="https://heyzine.com/flip-book/9fe8b00c9a.html" target="_blank">
                    Brochure
                  </a>
                </li>
                {/* <li className="nav-item  px-2">
                <div
                    className="nav-link tw-cursor-pointer"
                    onClick={(e) => {
                      navigate("/schedule");
                    }}
                  >
                    Schedule
                  </div>
                </li> */}
                <li className="nav-item  px-2">
                  <div
                    className="nav-link tw-cursor-pointer"
                    onClick={(e) => {
                        window.location="/#aboutus"
                    }}
                  >
                    About Us
                  </div>
                </li>
                <li className="nav-item  px-2">
                  <div
                    className="nav-link tw-cursor-pointer"
                    onClick={(e) => {
                        window.location="/#contact"
                    }}
                  >
                    Contact
                  </div>
                </li>
                <li className="nav-item  px-2">
                  <div
                    className="nav-link tw-cursor-pointer"
                    onClick={(e) => {
                        window.location="/#sponsors"
                    }}
                  >
                    Sponsors
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div
        style={{
          minHeight: "100vh",
          marginTop: "4.7rem",
        }}
      >
        {children}
      </div>
      <footer className=" tw-bg-black tw-text-white">
        <div className="p-4 text-center">© GATEWAYS 2022</div>
      </footer>
    </div>
  );
}
