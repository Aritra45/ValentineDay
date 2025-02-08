import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RoseDay from "./Components/RoseDay";
import ProposeDay from "./Components/ProposeDay";
import ChocolateDay from "./Components/ChocolateDay";
import TeddyDay from "./Components/TeddyDay";
import PromiseDay from "./Components/PromiseDay";
import HugDay from "./Components/HugDay";
import KissDay from "./Components/KissDay";
import Valentine from "./Components/ValentineDay";
import { SoundButton } from "./Components/SoundButton";
import "./styles.css";
import ValentineDay from "./Components/ValentineDay";


export default function App() {
  return (
    <Router>
      <SoundButton/>
      <Routes>
        <Route path="/" element={<RoseDay />} />
        <Route path="/propose-day" element={<ProposeDay />} />
        <Route path="/chocolate-day" element={<ChocolateDay />} />
        <Route path="/teddy-day" element={<TeddyDay />} />
        <Route path="/promise-day" element={<PromiseDay />} />
        <Route path="/hug-day" element={<HugDay />} />
        <Route path="/kiss-day" element={<KissDay />} />
        <Route path="/valentine-day" element={<ValentineDay />} />
      </Routes>
    </Router>
  );
}
