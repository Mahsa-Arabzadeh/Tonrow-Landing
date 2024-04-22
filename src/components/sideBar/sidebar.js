import domGenerator from "dom-generator";
import "./sidebar.scss";

export default function sidebar(headerData) {
  const sidebarGenerator = document.body.appendChild(
    domGenerator({
      tag: "div",
      attributes: { id: "sidebar", class: "sidebar" },
      children: [
        {
          tag: "div",
          attributes: { class: "sidebar-content" },
          children: headerData
            .slice(1)
            .filter((item) => !item.btnText)
            .map((item) => {
              return {
                tag: "a",
                properties: {
                  textContent: item.linkText,
                },
                attributes: {
                  href: item.LinkAddress || "#",
                },
              };
            }),
        },
      ],
    })
  );

  return sidebarGenerator;
}
