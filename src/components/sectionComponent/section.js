import domGenerator from "./dom-generator";

function sectionGenerator() {
  const section = domGenerator({
    tag: "section",
    attributes: { class: "section" },
  });
  return section;
}

export default sectionGenerator;
