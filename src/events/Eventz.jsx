import React from "react";

export default function Eventz() {
  return (
    <div>
      <div className="row m-4 p-4">
        <div className="col-lg-7 col-12 m-0 p-0">
          <h1 className="tw-text-4xl tw-font-bold">Event Z</h1>
          <p className="tw-text-lg tw-text-justify">
            Do you wonder what the future holds? Do you wonder what this event
            is? Do you wonder a lot in general? Then be prepared, because this
            is the event for you. Gear up for the unpredictable, the
            unimaginable, and the unknowable.
            <br />
            <br />
            On-spot is registration open for this event.
          </p>
        </div>
        {/* <div className="col-lg-5 col-12 tw-p-16">
          <img src={require("../assets/main-poster.png")} alt="..." />
        </div> */}
      </div>
    </div>
  );
}
