import React from "react";

export default function Vlogumentary() {
  return (
    <div>
      <div className="row m-4 p-4">
        <div className="col-lg-7 col-12 m-0 p-0">
          <h1 className="tw-text-4xl tw-font-bold">Vlogumentary</h1>
          <p className="tw-text-lg tw-text-justify">
            Are you a content creator that loves to vlog? Then, Vlogumentary is
            the event for you. This is your chance to unleash your creative side
            and speak your mind. Participate in our uniquely themed fest
            'Cognitive Escapade' and create a vlog for the topic we provide. The
            topic will be mailed to the registered participants one day before
            the main event.
            <br />
            <br />
            <strong>Team Size:</strong> Upto 3
            <br />
            <br />
            <strong> Pre-requisites</strong> Any device to capture videos (DSLR
            / mobile phone/GoPro)
            <br /> <br /> <strong>Rounds</strong>
            Vlogging event will start at 09:15 AM(Participants should vlog the
            inaugration ceremoney) and will continue till 01:30 PM, after which
            participants are expected to make their submissions. The video
            should be 4-5 minutes at most.
            <br />
            <br />
            <strong> Contact</strong>
            <br />
            Maglin :8277527214 <br />
            Krishna :9782054838{" "}
          </p>
        </div>
        <div className="col-lg-5 col-12 tw-p-16">
          <img src={require("../assets/vlogumentary.png")} alt="..." />
        </div>
      </div>
    </div>
  );
}
