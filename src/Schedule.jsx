import React from "react";

export default function Schedule() {
  return (
    <div className="p-4">
      <h1 className="tw-text-6xl tw-font-bold">Schedule</h1>

      <div className="rounded">
        <img
          className="w-100 rounded py-3"
          src={require("./assets/schedule.jpg")}
          alt="schedule image"
        />
      </div>
    </div>
  );
}
