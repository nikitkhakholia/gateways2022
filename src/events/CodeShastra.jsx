import React from "react";

export default function CodeShastra() {
  return (
    <div>
      <div className="row m-4 p-4">
        <div className="col-lg-7 col-12 m-0 p-0">
          <h1 className="tw-text-4xl tw-font-bold">Code Shashtra</h1>
          <p className="tw-text-lg tw-text-justify">
            Coding allows you to think about thinking, and while debugging, you
            learn. Join us at CodeShashtra, sponsored by GeeksForGeeks, and make
            it work, make it right, and make it fast.
            <br />
            <br />
            <strong>Event Type: </strong>Individual
            <br />
            <br />
            <strong> Pre-requisites</strong>{" "}
            <ul>
              <li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Programming
                knowledge (C and Python)
              </li>
              <li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Knowledge of
                the GCC compiler
              </li>
            </ul>
            <br /> <strong>Rounds</strong><br/>
            There will be 3 rounds in total. Round 1 will be held online on 18th
            September on the GeeksforGeeks platform. Contestants with high
            scores after round 1 will be promoted to round 2. Winners will be
            determined based on how quickly they solve round 3’s question.
            <br />
            <br />
            
            <strong>GeekForGeeks Link(Round 1):</strong> &nbsp;<a href="https://bit.ly/CodeShashtra" target="_blank"> https://bit.ly/CodeShashtra</a>
            
            <br />
            <br />


            <strong> Contact</strong>
            <br />
            Rohit: +91 63553 80271 <br />
            Gyan: +91 98347 85463
          </p>
        </div>
        <div className="col-lg-5 col-12 tw-p-16">
          <img src={require("../assets/code-shashtra.png")} alt="..." />
        </div>
      </div>
    </div>
  );
}
