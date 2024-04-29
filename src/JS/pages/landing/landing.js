import main from "../../../components/mainComponent/main";

document.addEventListener("DOMContentLoaded", pageLandingRendering);

function pageLandingRendering() {
  const body = document.body;
  body.appendChild(main());
}
