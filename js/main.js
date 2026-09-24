import { renderizarRota } from "./modules/router.js";

window.addEventListener("DOMContentLoaded", renderizarRota);
window.addEventListener("hashchange", renderizarRota);