import { renderizarRota } from "./modules/router.js";
import { inicializarMenu, inicializarTema } from "./modules/ui.js";

window.addEventListener("DOMContentLoaded", () => {
  inicializarMenu();
  inicializarTema();
  renderizarRota();
});

window.addEventListener("hashchange", renderizarRota);