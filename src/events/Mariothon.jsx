import React from "react";

export default function Mariothon() {
  return (
    <div>
      <div className="row m-4 p-4">
        <div className="col-lg-7 col-12 m-0 p-0">
          <h1 className="tw-text-4xl tw-font-bold">Mariothon</h1>
          <p className="tw-text-lg tw-text-justify">
            Mariothon is where your crazy idea becomes a reality. Brilliant
            ideas start with curious minds, and when those brilliant ideas
            compete with each other, the world wins. Participate in our
            IoT-based hackathon to win exclusive prizes!
            <br />
            <br />
            <strong>Team Size:</strong> Upto 4
            <br />
            <br />
            <strong> Pre-requisites</strong>{" "}
            <ul>
              <li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Knowledge of
                Arduino language.
              </li>
              <li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Any
                programming to implement AI concepts.
              </li>
              <li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. WIZnet Pico
                Board will be provided at the venue.
              </li>
            </ul>
            <br />
            <strong>Problem Statements</strong> <br />
            The overall theme is Smart City. The problem statement should be
            from one of the following sub-domains:
            <br />
            <br /> <strong>Round 1</strong>
            <br />
            Prepare a document for your proposed idea from any one of the given
            sub domains by 18th sept.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;● Healthcare
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;● Transportation &
            Logistics
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;● Environmental
            Issues
            <br />
            <br />
            Mail your submissions to gateways.hackathon@gmail.com.
            <br /> Include your college name and names of the team members.
            <br />
            <br />
            <strong>Format of Document </strong>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;● Idea proposal
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;● System diagram
            representation
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;● Approach towards
            the problem <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;● Components <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;● Future
            enhancements
            <br />
            <br />
            <strong>Round 2:</strong>
            <br />
            The selected teams for the finals have to implement their system
            with IOT & AI.
            <br />
            <br />
            <strong>Rules:</strong>
            <br />
            It is mandatory to implement the system using WIZnet
            <br />
            PicoBoard for the final shortlisted teams.
            <br />
            The PicoBoard will be provided to the shortlisted teams on the final
            day of implementation. Event will be conducted on Sept 23rd from
            9:00 am to 3:00 pm.
            <br />
            <br />
            <strong>WIZnet References:</strong>
            <br />
            <a href="https://www.wiznet.io/product-item/w5100s-evb-pico/" target="_blank">
              https://www.wiznet.io/product-item/w5100s-evb-pico/
            </a>
            <br />
            <a href="https://www.hackster.io/wiznet/projects" target="_blank">https://www.hackster.io/wiznet/projects</a>
            <br />
            <br />
            <strong>Contact</strong> <br />
            Sinchana - 8147188916
            <br />
            Arjun - 8088101019
            <br />
          </p>
        </div>
        <div className="col-lg-5 col-12 tw-p-16">
          <img src={require("../assets/mario1.png")} alt="..." />
          {/* <img src={require("../assets/mario2.png")} alt="..."/> */}
        </div>
      </div>
    </div>
  );
}
