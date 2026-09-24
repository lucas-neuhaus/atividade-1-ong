import { renderizarRota } from "./modules/router.js";
import { inicializarMenu } from "./modules/ui.js";

window.addEventListener("DOMContentLoaded", () => {
  inicializarMenu();
  renderizarRota();
});

window.addEventListener("hashchange", renderizarRota);