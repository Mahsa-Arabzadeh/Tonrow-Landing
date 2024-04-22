import domGenerator from "dom-generator";

function renderBreakMotor() {
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
            attributes: { src: "./public/images/motorC.svg", id: "motor" },
          },
          {
            tag: "img",
            attributes: { src: "./public/images/road.svg", id: "road" },
          },
        ],
      },
    ],
  });
  // return map;
  document.body.append(motor);
}

export default renderBreakMotor;
