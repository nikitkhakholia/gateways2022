import React, { useEffect, useState } from "react";

export default function Registration() {
  useEffect(() => {
    document.getElementById("single-event-form").target = "my-response-iframe1";
    var iframe = document.getElementById("my-response-iframe1");
    if (iframe) {
      iframe.onload = function () {
        if (document.getElementById("redirectStatus").innerText === "true") {
          if (false) {
            alert(
              "You will be redirected on GeekForGeeks platform to register for the 1st round."
            );
            window.location = "https://bit.ly/CodeShashtra";
          } else {
            alert("Submitted Successfully.");
            window.location = "/";
          }
        }
      };
    }
    document.getElementById("group-event-form").target = "my-response-iframe";
    var iframe = document.getElementById("my-response-iframe");
    if (iframe) {
      iframe.onload = function () {
        if (document.getElementById("redirectStatus").innerText === "true") {
          alert("Submitted Successfully.");
          window.location = "/";
        }
      };
    }
  }, []);

  useEffect(() => {
    document.forms["single-event-form"].addEventListener("submit", (event) => {
      event.preventDefault();
      let geek = document.getElementById("geek").checked;
      // let code = document.getElementById("code").checked;
      let ui = document.getElementById("picasso").checked;
      let moment = document.getElementById("lens").checked;
      if (geek  || ui || moment) {
        document.getElementById("redirectStatus").innerText = "true";
        document.forms["single-event-form"].submit();
      } else {
        alert("Please select a event.");
      }
    });
    document.forms["group-event-form"].addEventListener("submit", (event) => {
      event.preventDefault();
      let bsg = document.getElementById("chk-bsg").value;
      let mario = document.getElementById("chk-mario").value;
      let vlg = document.getElementById("chk-vlg").value;
      let lia = document.getElementById("chk-lia").value;
      if (bsg || mario || vlg || lia) {
        document.getElementById("redirectStatus").innerText = "true";
        document.forms["group-event-form"].submit();
      } else {
        alert("Please enter a team leader.");
      }
    });
  }, []);
  return (
    <div>
      <p hidden id="redirectStatus">
        false
      </p>
      <section className="px-4 my-4">
        <iframe
          hidden
          id="my-response-iframe"
          name="my-response-iframe"
        ></iframe>
        <iframe
          hidden
          id="my-response-iframe1"
          name="my-response-iframe1"
        ></iframe>
        <div className="row m-0 p-0  justify-content-center">
          <div className="col-lg-5 col-12 m-0 p-2">
            <h1 className="tw-text-6xl tw-font-bold">Registration</h1>

            <div className="bg-white rounded mt-3">
              <div className="p-4">
                <p>
                  <strong>Note:</strong>
                </p>
                <ul className="px-4" style={{ listStyleType: "circle" }}>
                  <li>
                    Students participating in the hackathon will not be allowed
                    to participate in other events due to time constraints.
                  </li>
                  <li>
                    We request you to refer the time schedule and register
                    accordingly to avoid clashes in registration.
                  </li>
                </ul>
              </div>
              <ul class="nav nav-tabs m-0 pt-3 px-3 justify-content-center">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="ieb"
                    aria-current="page"
                    href="#"
                    onClick={(e) => {
                      document
                        .getElementById("individual-event-form")
                        .classList.remove("d-none");
                      document
                        .getElementById("group-event-form")
                        .classList.add("d-none");
                      e.target.classList.add("active");
                      document.getElementById("geb").classList.remove("active");
                    }}
                  >
                    Individual Events
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="geb"
                    href="#"
                    onClick={(e) => {
                      document
                        .getElementById("group-event-form")
                        .classList.remove("d-none");
                      document
                        .getElementById("individual-event-form")
                        .classList.add("d-none");
                      e.target.classList.add("active");
                      document.getElementById("ieb").classList.remove("active");
                    }}
                  >
                    Group Events
                  </a>
                </li>
              </ul>
              <div className=" p-3" id="individual-event-form">
                <form
                  id="single-event-form"
                  action="https://docs.google.com/forms/d/e/1FAIpQLSdfecGs3GSlzdPFLNiiWvpLR649EXWibx8FVvuk_NqCmtD_Tw/formResponse"
                  method="POST"
                  target="my-response-iframe1"
                >
                  <div class="form-floating mb-3 ">
                    <input
                      name="emailAddress"
                      type="email"
                      placeholder="Email"
                      required
                      className="form-control"
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div class="form-floating my-3">
                    <input
                      name="entry.1965652656"
                      type="text"
                      placeholder="Name"
                      required
                      className="form-control"
                    />
                    <label for="floatingInput">Name</label>
                  </div>
                  <div class="form-floating my-3">
                    <input
                      class="form-control"
                      type="tel"
                      name="entry.465481953"
                      placeholder="Phone Number"
                      required
                      className="form-control"
                    />
                    <label for="floatingInput">Phone Number</label>
                  </div>
                  <div class="form-floating my-3">
                    <input
                      ype="text"
                      name="entry.648400462"
                      placeholder="College Name"
                      required
                      className="form-control"
                    />
                    <label for="floatingInput">College Name</label>
                  </div>
                  <div class="form-floating my-3">
                    <input
                      type="text"
                      name="entry.94059384"
                      placeholder="Course"
                      required
                      className="form-control"
                    />
                    <label for="floatingInput">Course</label>
                  </div>
                  <fieldset name="entry.1082954383" className="my-3">
                    <label for="floatingInput">Events</label>

                    <div class="input-group my-2">
                      <div class="input-group-text">
                        <input
                          name="entry.1082954383"
                          class="form-check-input mt-0"
                          type="checkbox"
                          value="Geek O Fiesta"
                          id="geek"
                        />
                      </div>
                      <p type="text" class="form-control">
                        Geek O Fiesta
                      </p>
                    </div>
                    {/* <div class="input-group my-2">
                      <div class="input-group-text">
                        <input
                          class="form-check-input mt-0"
                          type="checkbox"
                          value="Code Shastra"
                          name="entry.1082954383"
                          id="code"
                        />
                      </div>
                      <p type="text" class="form-control">
                        Code Shastra
                      </p>
                    </div> */}
                    <div class="input-group my-2">
                      <div class="input-group-text">
                        <input
                          class="form-check-input mt-0"
                          type="checkbox"
                          value="UI Picasso"
                          name="entry.1082954383"
                          id="picasso"
                        />
                      </div>
                      <p type="text" class="form-control">
                        UI Picasso
                      </p>
                    </div>

                    <div class="input-group my-2">
                      <div class="input-group-text">
                        <input
                          class="form-check-input mt-0"
                          type="checkbox"
                          value="Lens a Moment"
                          name="entry.1082954383"
                          id="lens"
                        />
                      </div>
                      <p type="text" class="form-control">
                        Lens a Moment
                      </p>
                    </div>
                  </fieldset>
                  <button
                    className=" tw-px-10 tw-w-fit tw-py-2 tw-rounded tw-bg-black hover:tw-bg-gray-900 tw-text-white tw-font-semibold tw-text-center tw-cursor-pointer"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
              <div className=" p-3 d-none" id="group-event-form">
                <form
                  id="group-event-form"
                  action="https://docs.google.com/forms/d/e/1FAIpQLScFuc4mjhwXSj5sdNu3-nYymozsnc0oHuoqcmIpnJ5tTmMF_A/formResponse"
                  method="POST"
                  target="my-response-iframe"
                >
                  <div class="form-floating mb-3 ">
                    <input
                      name="emailAddress"
                      type="email"
                      placeholder="Email"
                      required
                      className="form-control"
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div class="form-floating my-3">
                    <input
                      name="entry.1444512382"
                      type="text"
                      placeholder="Name"
                      required
                      className="form-control"
                    />
                    <label for="floatingInput">Name</label>
                  </div>
                  <div class="form-floating my-3">
                    <input
                      class="form-control"
                      type="tel"
                      name="entry.155894965"
                      placeholder="Phone Number"
                      required
                      className="form-control"
                    />
                    <label for="floatingInput">Phone Number</label>
                  </div>
                  <div class="form-floating my-3">
                    <input
                      ype="text"
                      name="entry.1757618480"
                      placeholder="College Name"
                      required
                      className="form-control"
                    />
                    <label for="floatingInput">College Name</label>
                  </div>
                  <div class="form-floating my-3">
                    <input
                      type="text"
                      name="entry.1564506112"
                      placeholder="Course"
                      required
                      className="form-control"
                    />
                    <label for="floatingInput">Course</label>
                  </div>
                  <label className="mt-3 tw-text-xl" for="floatingInput">
                    Events
                  </label>
                  <br />
                  <label className="my-2" for="floatingInput">
                    Battle Stars - Gaming
                  </label>
                  <div class="form-floating my-2">
                    <input
                      type="text"
                      name="entry.1048863932"
                      placeholder="Team Name"
                      className="form-control"
                    />
                    <label for="floatingInput">Team Name</label>
                  </div>
                  <div class="form-floating my-2">
                    <input
                      id="chk-bsg"
                      type="text"
                      name="entry.646095365"
                      placeholder="Team Leader"
                      className="form-control"
                    />
                    <label for="floatingInput">Team Leader</label>
                  </div>
                  <div class="form-floating my-2">
                    <input
                      type="text"
                      name="entry.1731441081"
                      placeholder="Name of Participant 2"
                      className="form-control"
                    />
                    <label for="floatingInput">Name of Participant 2</label>
                  </div>
                  <div class="form-floating my-2">
                    <input
                      type="text"
                      name="entry.1952753820"
                      placeholder="Name of Participant 3"
                      className="form-control"
                    />
                    <label for="floatingInput">Name of Participant 3</label>
                  </div>
                  <div class="form-floating my-2">
                    <input
                      type="text"
                      name="entry.1076024610"
                      placeholder="Name of Participant 4"
                      className="form-control"
                    />
                    <label for="floatingInput">Name of Participant 4</label>
                  </div>
                  <div class="form-floating my-2">
                    <input
                      type="text"
                      name="entry.537935065"
                      placeholder="Name of Participant 5"
                      className="form-control"
                    />
                    <label for="floatingInput">Name of Participant 5</label>
                  </div>

                  <label className="my-2" for="floatingInput">
                    Mariothon - Hackathon - Fill Team Details{" "}
                  </label>
                  <div class="form-floating my-2">
                    <input
                      type="text"
                      name="entry.1490089437"
                      placeholder="Team Name"
                      className="form-control"
                    />
                    <label for="floatingInput">Team Name</label>
                  </div>
                  <div class="form-floating my-2">
                    <input
                      id="chk-mario"
                      type="text"
                      name="entry.412113697"
                      placeholder="Team Leader"
                      className="form-control"
                    />
                    <label for="floatingInput">Team Leader</label>
                  </div>
                  <div class="form-floating my-2">
                    <input
                      type="text"
                      name="entry.1830996382"
                      placeholder="Name of Participant 2"
                      className="form-control"
                    />
                    <label for="floatingInput">Name of Participant 2</label>
                  </div>
                  <div class="form-floating my-2">
                    <input
                      type="text"
                      name="entry.38853463"
                      placeholder="Name of Participant 3"
                      className="form-control"
                    />
                    <label for="floatingInput">Name of Participant 3</label>
                  </div>
                  <div class="form-floating my-2">
                    <input
                      type="text"
                      name="entry.388852286"
                      placeholder="Name of Participant 4"
                      className="form-control"
                    />
                    <label for="floatingInput">Name of Participant 4</label>
                  </div>

                  <label className="my-2" for="floatingInput">
                    Vlogumentary - Vlogging - Fill Team Details
                  </label>
                  <div class="form-floating my-2">
                    <input
                      type="text"
                      name="entry.1220838364"
                      placeholder="Team Name"
                      className="form-control"
                    />
                    <label for="floatingInput">Team Name</label>
                  </div>
                  <div class="form-floating my-2">
                    <input
                      id="chk-vlg"
                      type="text"
                      name="entry.1582092772"
                      placeholder="Team Leader"
                      className="form-control"
                    />
                    <label for="floatingInput">Team Leader</label>
                  </div>
                  <div class="form-floating my-2">
                    <input
                      type="text"
                      name="entry.1464817276"
                      placeholder="Name of Participant 2"
                      className="form-control"
                    />
                    <label for="floatingInput">Name of Participant 2</label>
                  </div>
                  <div class="form-floating my-2">
                    <input
                      type="text"
                      name="entry.238859477"
                      placeholder="Name of Participant 3"
                      className="form-control"
                    />
                    <label for="floatingInput">Name of Participant 3</label>
                  </div>

                  <label className="my-2" for="floatingInput">
                    Lost In Ages - Treasure Hunt - Fill Team Details
                  </label>
                  <div class="form-floating my-2">
                    <input
                      type="text"
                      name="entry.1178978825"
                      placeholder="Team Name"
                      className="form-control"
                    />
                    <label for="floatingInput">Team Name</label>
                  </div>
                  <div class="form-floating my-2">
                    <input
                      id="chk-lia"
                      type="text"
                      name="entry.1433477492"
                      placeholder="Team Leader"
                      className="form-control"
                    />
                    <label for="floatingInput">Team Leader</label>
                  </div>
                  <div class="form-floating my-2">
                    <input
                      type="text"
                      name="entry.1472692290"
                      placeholder="Name of Participant 2"
                      className="form-control"
                    />
                    <label for="floatingInput">Name of Participant 2</label>
                  </div>
                  <div class="form-floating my-2">
                    <input
                      type="text"
                      name="entry.87631927"
                      placeholder="Name of Participant 3"
                      className="form-control"
                    />
                    <label for="floatingInput">Name of Participant 3</label>
                  </div>
                  <div class="form-floating my-2">
                    <input
                      type="text"
                      name="entry.123946437"
                      placeholder="Name of Participant 4"
                      className="form-control"
                    />
                    <label for="floatingInput">Name of Participant 4</label>
                  </div>
                  <div class="form-floating my-2">
                    <input
                      type="text"
                      name="entry.1053244375"
                      placeholder="Name of Participant 5"
                      className="form-control"
                    />
                    <label for="floatingInput">Name of Participant 5</label>
                  </div>

                  <button
                    className=" tw-px-10 tw-w-fit tw-py-2 tw-rounded tw-bg-black hover:tw-bg-gray-900 tw-text-white tw-font-semibold tw-text-center tw-cursor-pointer"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-12 m-0 p-2">
            <h1 className="tw-text-6xl tw-font-bold">Schedule</h1>
            <img className="w-100 rounded py-3" src={require("./assets/schedule.jpg")} alt="schedule image" />
            
          </div>
        </div>
      </section>
    </div>
  );
}
