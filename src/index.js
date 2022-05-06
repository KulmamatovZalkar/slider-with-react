import React from "react";
import { createRoot } from "react-dom/client";
import "./dummyData.js";
import "./index.scss";

import Slider from "./slider/Slider.js";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Slider />);
