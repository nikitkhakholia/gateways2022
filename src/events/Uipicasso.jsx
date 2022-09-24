import React from "react";

export default function Uipicasso() {
  return (
    <div>
      <div className="row m-4 p-4">
        <div className="col-lg-7 col-12 m-0 p-0">
          <h1 className="tw-text-4xl tw-font-bold">UI Picasso</h1>
          <p className="tw-text-lg tw-text-justify">
            Do you like to create what you imagine? Come along; let’s add visual
            creativity to your UI & prove that you are a Picasso!
            <br />
            <br />
            <strong>Event Type:</strong> Individual
            <br />
            <br />
            <strong> Pre-requisites</strong> An account on Figma
        
            <br /> <br /> <strong>Rounds</strong>
            There will be 2 rounds in total. Contestants with high scores after
            round 1 will be promoted to round 2. Winners will be determined
            based on the points of both rounds.
            <br />
            <br />
            <strong> Contact</strong>
            <br />
            Nikhil :7259725954 <br />
            Dhanashree :8805128897
          </p>
        </div>
        <div className="col-lg-5 col-12 tw-p-16">
          <img src={require("../assets/uiux.png")} alt="..." />
        </div>
      </div>
    </div>
  );
}
