import React from 'react'

export default function BattleStars() {
  return (
    <div><div className="row m-4 p-4">
    <div className="col-lg-7 col-12 m-0 p-0">
      <h1 className="tw-text-4xl tw-font-bold">Battle Stars</h1>
      <p className="tw-text-lg tw-text-justify">
      Skills win games, but teamwork and strategies win championships. Get a team and become champions through our gaming event!
        <br />
        <br />
        <strong>Team Size:</strong> 5
        <br />
        <br />
        <strong> Pre-requisites</strong>{" "}
        <ul>
              <li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Players are to carry their own laptops with games installed (Valorant and CS 1.6).
              </li>
              <li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Players can carry their peripherals if required.
              </li>
              <li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.Participants are expected to be familiar with the games.
              </li>
              <li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Players are to report 30 minutes before.
              </li>
            </ul>
        <br /> <br /> <strong>Rounds</strong>
        The match type will be announced on the spot. Each team is expected to compete with other teams and the winners of each match will again compete with each other. This will be repeated till the final winner is determined.
            <br />
            <br />
            <strong> Contact</strong>
            <br />
            Yash Pathak :9004261825 <br />
            Smith :7899224696      </p>
    </div>
    <div className="col-lg-5 col-12 tw-p-16">
        <img src={require("../assets/Battlestars.png")} alt="..."/>
    </div>
  </div></div>
  )
}
