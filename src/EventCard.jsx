import React from "react";
import { useNavigate } from "react-router-dom";

export default function EventCard({
  bgClass = "",
  bgCol = "",
  navigateTo = "",
  eventName = "",
  eventDesc = "",
}) {
  let navigate = useNavigate();

  return (
    <div className="col-lg-2 col-12 m-0 p-2  ">
      <div
        className={
          "tw-p-4 tw-shadow-xl tw-rounded-lg  tw-text-white h-100 tw-flex tw-flex-col " +
          bgClass
        }
        style={{ background: bgCol }}
      >
        <h1 className="tw-text-2xl tw-font-bold">{eventName}</h1>
        <h3 className="tw-text-lg tw-mb-5">{eventDesc}</h3>

        <div
          className="tw-mt-auto  tw-px-10 tw-w-fit tw-py-2 tw-rounded tw-bg-black hover:tw-bg-gray-900 tw-text-white tw-font-semibold tw-text-center tw-cursor-pointer"
          onClick={(e) => {
            // window.location="https://heyzine.com/flip-book/9fe8b00c9a.html"
            navigate(navigateTo)
          }}
        >
          Read More
        </div>
      </div>
    </div>
  );
}
