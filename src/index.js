import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutDepartment from "./AboutDepartment";
import AboutGAteways from "./AboutGAteways";
import AboutUniversity from "./AboutUniversity";
import BattleStars from "./events/BattleStars";
import CodeShastra from "./events/CodeShastra";
import Eventz from "./events/Eventz";
import GeekoFiesta from "./events/GeekoFiesta";
import Lensamoment from "./events/Lensamoment";
import LostInAges from "./events/LostInAges";
import Mariothon from "./events/Mariothon";
import Uipicasso from "./events/Uipicasso";
import Vlogumentary from "./events/Vlogumentary";
import Header from "./Header";
import Home from "./Home";

import "./index.css";
import Registration from "./Registration";
import Schedule from "./Schedule";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Registration />} path="/register" />
        <Route element={<Schedule />} path="/schedule" />
        <Route element={<AboutUniversity />} path="/university" />
        <Route element={<AboutDepartment />} path="/department" />
        <Route element={<AboutGAteways />} path="/event" />
        <Route element={<Mariothon />} path="/mariothon" />
        <Route element={<GeekoFiesta />} path="/geek-o-fiesta" />
        <Route element={<CodeShastra />} path="/code-shastra" />
        <Route element={<Uipicasso />} path="/ui-picasso" />
        <Route element={<LostInAges />} path="/lost-in-ages" />
        <Route element={<Lensamoment />} path="/lens-a-moment" />
        <Route element={<Vlogumentary />} path="/vlogumentry" />
        <Route element={<BattleStars />} path="/battle-stars" />
        <Route element={<Eventz />} path="/event-z" />
      </Routes>
    </Header>
  </BrowserRouter>
);
