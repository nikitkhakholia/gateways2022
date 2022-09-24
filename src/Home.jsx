import React from "react";
import EventCard from "./EventCard";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  return (
    <div>
      <section className="px-4 my-4">
        <div className="row m-0 p-0 align-items-center justify-content-center">
          <div className="col-lg-8 col-12">
            <h1 className="tw-text-6xl tw-font-bold">GATEWAYS 2022</h1>
            <p className="tw-text-4xl">
              From pagers to iPhones, when did we all grow up?
            </p>
            <div
              className="tw-mt-6 tw-px-10 tw-w-fit tw-py-2 tw-rounded tw-bg-black hover:tw-bg-gray-900 tw-text-white tw-font-semibold tw-text-center tw-cursor-pointer"
              onClick={(e) => {
                navigate("/register");
              }}
            >
              Register Now
            </div>
            {new Date() > new Date(2022, 8, 23, 10, 30) && (
              <div
                className="tw-mt-6 tw-px-10 tw-w-fit tw-py-2 tw-rounded tw-bg-black hover:tw-bg-gray-900 tw-text-white tw-font-semibold tw-text-center tw-cursor-pointer"
                onClick={(e) => {
                  navigate("/lens-a-moment");
                }}
              >
                Click here for instructions for Photography
              </div>
            )}
          </div>
          <div className="col-lg-4 col-12">
            <img
              className="w-100"
              src={require("./assets/2022logo.png")}
              alt="2022 gateways logo"
            />
          </div>
        </div>
      </section>
      <section className="px-4 my-4" id="events">
        <h1 className="tw-text-4xl tw-font-bold">Technical Events</h1>
        <div className="row m-0 p-0 justify-content-start  ">
          <EventCard
            bgCol="#FC5050"
            navigateTo={"/mariothon"}
            eventName="Mariothon"
            eventDesc="Hackathon? Check. IoT? Check. Crazy idea? Bring yours forward"
          />
          <EventCard
            bgCol="#D76A2E"
            navigateTo={"/geek-o-fiesta"}
            eventName="Geek O Fiesta"
            eventDesc="A race to success against all odds"
          />
          <EventCard
            bgCol="#628968"
            navigateTo={"/code-shastra"}
            eventName="Code Shastra"
            eventDesc="Wield your weapons against bugs, go forth with your tools!"
          />
          <EventCard
            bgCol="#E38C3C"
            navigateTo={"/ui-picasso"}
            eventName="UI Picasso"
            eventDesc="Journey towards a mysterious palette"
          />
        </div>
      </section>
      <section className="px-4 my-4">
        <h1 className="tw-text-4xl tw-font-bold">Non Technical Events</h1>
        <div className="row m-0 p-0 justify-content-start  ">
          <EventCard
            bgCol="#FC5050"
            navigateTo={"/lost-in-ages"}
            eventName="Lost In Ages"
            eventDesc="Enter, trepid adventurer, to seek your fortune"
          />
          <EventCard
            bgCol="#D76A2E"
            navigateTo={"/lens-a-moment"}
            eventName="Lens a Moment"
            eventDesc="Stay in the moment, by capturing the moment"
          />
          <EventCard
            bgCol="#628968"
            navigateTo={"/vlogumentry"}
            eventName="Vlogumentary"
            eventDesc="Vlog your heart out, with a twist from the mind"
          />
          <EventCard
            bgCol="#E38C3C"
            navigateTo={"/battle-stars"}
            eventName="Battle Stars"
            eventDesc="Teams, present your gamers!"
          />
          <EventCard
            bgCol="#E36E3C"
            navigateTo={"/event-z"}
            eventName="Event Z"
            eventDesc="Surprise! Surprise! its beyond your imagination"
          />
        </div>
      </section>

      <section className="my-4" id="aboutus">
        <h1 className="tw-text-4xl tw-font-bold px-4">About Us</h1>
        <div className="row m-0 p-0 my-3 justify-content-start ">
          <div className="col-lg-5 col-12 m-0 p-0  ">
            <img
              className="m-0 p-0 w-100"
              src={require("./assets/college.png")}
              alt="Christ (Deemed to be University) Image"
            />
          </div>
          <div
            className="col-lg-7 col-12 m-0"
            style={{ background: "#1A3FBB" }}
          >
            <div className="h-100 tw-p-12 tw-text-white">
              <div>
                <h1 className="tw-text-2xl tw-font-bold">
                  CHRIST (Deemed to be University)
                </h1>
                <p className="tw-text-lg tw-text-justify">
                  CHRIST (Deemed to be University), born out of the vision of St
                  Kuriakose Elias Chavara, and established in 1969, is a
                  multi-disciplinary university offering Bachelor, Master, and
                  Doctoral programmes in Humanities, Social Sciences, Science,
                  Commerce, Management, Engineering, Education, and law to over
                  27,000 students.
                </p>
                <div
                  className="tw-mt-6 tw-px-10 tw-w-fit tw-py-2 tw-rounded tw-bg-black hover:tw-bg-gray-900 tw-text-white tw-font-semibold tw-text-center tw-cursor-pointer"
                  onClick={(e) => {
                    navigate("/university");
                  }}
                >
                  Read More
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-0 p-0 my-3 justify-content-start ">
          <div className="col-lg-5 col-12 m-0 p-0  ">
            <img
              className="m-0 p-0 w-100"
              src={require("./assets/cs.png")}
              alt="Christ (Deemed to be University) Image"
            />
          </div>
          <div
            className="col-lg-7 col-12 m-0"
            style={{ background: "#182E67" }}
          >
            <div className="h-100 tw-p-12 tw-text-white">
              <div>
                <h1 className="tw-text-2xl tw-font-bold">
                  Department of Computer Science
                </h1>
                <p className="tw-text-lg tw-text-justify">
                  The Department of Computer Science of CHRIST (Deemed to be
                  University) strives to shape outstanding computer
                  professionals with ethical and human values to reshape the
                  nation's destiny. The training imparted aims to prepare young
                  minds for challenging opportunities in the IT industry.
                </p>
                <div
                  onClick={(e) => {
                    navigate("/department");
                  }}
                  className="tw-mt-6 tw-px-10 tw-w-fit tw-py-2 tw-rounded tw-bg-black hover:tw-bg-gray-900 tw-text-white tw-font-semibold tw-text-center tw-cursor-pointer"
                >
                  Read More
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-0 p-0 my-3 justify-content-start ">
          <div className="col-lg-5 col-12 m-0 p-0  ">
            <img
              className="m-0 p-0 w-100"
              src={require("./assets/lab.png")}
              alt="Gateways 2022"
            />
          </div>
          <div
            className="col-lg-7 col-12 m-0"
            style={{ background: "#193AA8" }}
          >
            <div className="h-100 tw-p-12 tw-text-white">
              <div>
                <h1 className="tw-text-2xl tw-font-bold">Gateways 2022 </h1>
                <p className="tw-text-lg tw-text-justify">
                  Gateways is the annual national technical fest held for over
                  25 years by the Department of Computer Science of CHRIST
                  (Deemed to be University), Bangalore. Helmed by students of
                  the MCA course, it aims to be at the forefront of innovation
                  and collaboration.
                </p>
                <div
                  onClick={(e) => {
                    navigate("/event");
                  }}
                  className="tw-mt-6 tw-px-10 tw-w-fit tw-py-2 tw-rounded tw-bg-black hover:tw-bg-gray-900 tw-text-white tw-font-semibold tw-text-center tw-cursor-pointer"
                >
                  Read More
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 my-4" id="sponsors">
        <h1 className="tw-text-4xl tw-font-bold">Sponsors</h1>
        <h1 className="tw-text-2xl tw-font-bold tw-text-center tw-mt-8 tw-mb-2 ">
          Star Sponsor
        </h1>
        <div className="row m-0 p-0 justify-content-center ">
          <div className="col-md-2 col-6 m-0 p-0 px-4 ">
            <img
              className="m-0 p-0 w-100 bg-white rounded-circle"
              src={require("./assets/wiznet.png")}
              alt="Christ (Deemed to be University) Image"
            />
          </div>
        </div>
        <h1 className="tw-text-2xl tw-font-bold tw-text-center tw-mt-8 tw-mb-2 ">
          Co Sponsor
        </h1>

        <div className="row m-0 p-0 justify-content-center ">
          <div className="col-md-2 col-6 m-0 p-0 px-4 ">
            <img
              className="m-0 p-0 w-100 bg-white rounded-circle"
              src={require("./assets/interview.png")}
              alt="Christ (Deemed to be University) Image"
            />
          </div>
        </div>
        <h1 className="tw-text-2xl tw-font-bold tw-text-center tw-mt-8 tw-mb-2 ">
          Coding Partner
        </h1>

        <div className="row m-0 p-0 justify-content-center ">
          <div className="col-md-2 col-6 m-0 p-0 px-4 ">
            <img
              className="m-0 p-0 w-100 bg-white rounded-circle"
              src={require("./assets/gfg.png")}
              alt="Christ (Deemed to be University) Image"
            />
          </div>
        </div>

        <h1 className="tw-text-2xl tw-font-bold tw-text-center tw-mt-8 tw-mb-2 ">
          Event Partners
        </h1>

        <div className="row m-0 p-0 justify-content-center ">
          <div className="col-md-2 col-6 m-0 p-0 px-4 py-4">
            <img
              className="m-0 p-0 w-100 bg-white rounded-circle"
              src={require("./assets/axure.png")}
              alt="Christ (Deemed to be University) Image"
            />
          </div>
          <div className="col-md-2 col-6 m-0 p-0 px-4 py-4 ">
            <img
              className="m-0 p-0 w-100 bg-white rounded-circle"
              src={require("./assets/glx.png")}
              alt="Christ (Deemed to be University) Image"
            />
          </div>
          <div className="col-md-2 col-6 m-0 p-0 px-4 py-4 ">
            <img
              className="m-0 p-0 w-100 bg-white rounded-circle"
              src={require("./assets/gdsc.png")}
              alt="Christ (Deemed to be University) Image"
            />
          </div>
          <div className="col-md-2 col-6 m-0 p-0 px-4 py-4  ">
            <img
              className="m-0 p-0 w-100 bg-white rounded-circle"
              src={require("./assets/gdsc.png")}
              alt="Christ (Deemed to be University) Image"
            />
          </div>
        </div>
      </section>

      <section className="px-4  my-4" id="contact">
        <h1 className="tw-text-4xl tw-font-bold">Contact</h1>
        <h1 className="tw-text-2xl tw-font-bold px-4 py-3">Faculty</h1>
        <div className="row m-0 p-0 px-4 justify-content-center tw-text-white">
          <div
            className="col-lg-2 col-12 m-0 p-3  "
            style={{ background: "#1C7464" }}
          >
            <div className="h-100 tw-flex tw-flex-col ">
              <h1 className="tw-text-1xl tw-font-bold">Dr SHONEY SEBASTIAN</h1>
              <p className="tw-text-lg  tw-pb-12">MCA Program Coordinator</p>
              <a
                href="tel:+919972372499"
                className="tw-mt-auto "
                target="_blank"
              >
                +91 997 237 2499
              </a>
            </div>
          </div>
          <div
            className="col-lg-2 col-12 m-0 p-3  "
            style={{ background: "#402EF6" }}
          >
            <div className="h-100 tw-flex tw-flex-col ">
              <h1 className="tw-text-1xl tw-font-bold">Dr SAGAYA AURELIA P</h1>
              <p className="tw-text-lg  tw-pb-12">Fest Coordinator</p>
              <a
                href="tel:+919113264461"
                className="tw-mt-auto "
                target="_blank"
              >
                +91 911 326 4461
              </a>
            </div>
          </div>
          <div
            className="col-lg-2 col-12 m-0 p-3  "
            style={{ background: "#2C9355" }}
          >
            <div className="h-100 tw-flex tw-flex-col ">
              <h1 className="tw-text-1xl tw-font-bold">Dr NIZAR BANU</h1>
              <p className="tw-text-lg  tw-pb-12">
                Event And Cultural Incharge
              </p>
              <a
                href="tel:+919942073476"
                className="tw-mt-auto "
                target="_blank"
              >
                +91 994 207 3476
              </a>
            </div>
          </div>
          <div
            className="col-lg-2 col-12 m-0 p-3  "
            style={{ background: "#183276" }}
          >
            <div className="h-100 tw-flex tw-flex-col ">
              <h1 className="tw-text-1xl tw-font-bold">Dr KAVITHA R</h1>
              <p className="tw-text-lg  tw-pb-12">
                Website And Design Incharge
              </p>
              <a
                href="tel:+919980621465"
                className="tw-mt-auto "
                target="_blank"
              >
                +91 998 062 1465
              </a>
            </div>
          </div>
          <div
            className="col-lg-2 col-12 m-0 p-3  "
            style={{ background: "#1140DC" }}
          >
            <div className="h-100 tw-flex tw-flex-col ">
              <h1 className="tw-text-1xl tw-font-bold">Dr SENTHILNATHAN T</h1>
              <p className="tw-text-lg  tw-pb-12">
                Finance And Sponsor Incharge
              </p>
              <a
                href="tel:+919865555222"
                className="tw-mt-auto "
                target="_blank"
              >
                +91 986 555 5222
              </a>
            </div>
          </div>
          <div
            className="col-lg-2 col-12 m-0 p-3  "
            style={{ background: "#5620C8" }}
          >
            <div className="h-100 tw-flex tw-flex-col ">
              <h1 className="tw-text-1xl tw-font-bold">Dr DEEPA V JOSE</h1>
              <p className="tw-text-lg  tw-pb-12">
                Hospitality And Magazine Incharge
              </p>
              <a
                href="tel:+919980076947"
                className="tw-mt-auto "
                target="_blank"
              >
                +91 998 007 6947
              </a>
            </div>
          </div>
        </div>
        <h1 className="tw-text-2xl tw-font-bold px-4 py-3">Core Team</h1>

        <div className="row m-0 p-0 px-4 justify-content-center  tw-text-white">
          <div
            className="col-lg-2 col-12 m-0 p-3  "
            style={{ background: "#1C7464" }}
          >
            <div className="h-100 tw-flex tw-flex-col ">
              <h1 className="tw-text-1xl tw-font-bold tw-pb-12">
                GAURI KANODIA
              </h1>

              <a
                href="tel:+918318085429"
                className="tw-mt-auto "
                target="_blank"
              >
                +91 831 808 5429
              </a>
            </div>
          </div>
          <div
            className="col-lg-2 col-12 m-0 p-3  "
            style={{ background: "#402EF6" }}
          >
            <div className="h-100 tw-flex tw-flex-col ">
              <h1 className="tw-text-1xl tw-font-bold tw-pb-12">
                NIKIT KHAKHOLIA
              </h1>

              <a
                href="tel:+919864945505"
                className="tw-mt-auto "
                target="_blank"
              >
                +91 986 494 5505
              </a>
            </div>
          </div>
          <div
            className="col-lg-2 col-12 m-0 p-3  "
            style={{ background: "#183276" }}
          >
            <div className="h-100 tw-flex tw-flex-col ">
              <h1 className="tw-text-1xl tw-font-bold tw-pb-12">
                AYUSHREE CHAKRABARTTY
              </h1>

              <a
                href="tel:+918102501954"
                className="tw-mt-auto "
                target="_blank"
              >
                +91 810 250 1954
              </a>
            </div>
          </div>
          <div
            className="col-lg-2 col-12 m-0 p-3  "
            style={{ background: "#1140DC" }}
          >
            <div className="h-100 tw-flex tw-flex-col ">
              <h1 className="tw-text-1xl tw-font-bold tw-pb-12">
                ARUNABHA DUTT
              </h1>

              <a
                href="tel:+919874317740"
                className="tw-mt-auto "
                target="_blank"
              >
                +91 987 431 7740
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
