"use strict";

import domGenerator from "dom-generator";
import timeLine from "./timline";
import "./index.scss";

export default function renderBreakMotor() {
  let motor = domGenerator({
    tag: "div",
    //* map: parent section of map
    attributes: { id: "breakMotor" },
    children: [
      {
        tag: "div",
        attributes: { id: "animationMotor" },
        children: [
          {
            tag: "img",
            attributes: {
              src: "./public/images/motorC.svg",
              id: "motor",
            },
          },
          {
            tag: "img",
            attributes: {
              src: "./public/images/road.svg",
              id: "road",
            },
          },
        ],
      },
    ],
  });
  const motorCycle = motor.querySelector("#motor");
  timeLine(motorCycle);
  return motor;
}
