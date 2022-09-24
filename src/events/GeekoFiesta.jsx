import React from "react";

export default function GeekoFiesta() {
  return (
    <div>
      <div className="row m-4 p-4">
        <div className="col-lg-7 col-12 m-0 p-0">
          <h1 className="tw-text-4xl tw-font-bold">Geek ‘O’ Fiesta</h1>
          <p className="tw-text-lg tw-text-justify">
            Are you someone who can handle stress effortlessly? Can you
            multitask without succumbing to pressure? Are you the one who brings
            up the team's motivation when everyone's low? Do you have what it
            takes to be the best manager? Then Geek ' o ' Fiesta is the event
            for you!
            <br />
            <br />
            <strong>Event Type:</strong> Individual
            <br />
            <br />
            <strong> Pre-requisites</strong>
            <br />
            Sound reasoning, logical and management skills
            <br />
            <br /> <strong>Rounds </strong>
            <br />
            There will be 3 rounds in total. The top five scorers after round 2
            will qualify for the final round. Winners will be determined based
            on the points of three rounds.
            <br />
            <br />
            <strong> Contact</strong>
            <br />
            Yash :8825221586
            <br />
            Vaishnavi :6362435596
          </p>
        </div>
        <div className="col-lg-5 col-12 tw-p-16">
          <img src={require("../assets/geek-o-fiesta.png")} alt="..." />
        </div>
      </div>
    </div>
  );
}
