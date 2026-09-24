import {
  templateHome,
  templateProjetos,
  templateCadastro,
} from "./templates.js";

import { inicializarModais } from "./ui.js";
import { inicializarValidacao } from "./validation.js";

const routes = {
  "/home": templateHome,
  "/projetos": templateProjetos,
  "/cadastro": templateCadastro,
};

function obterRotaAtual() {
  return window.location.hash.slice(1) || "/home";
}

function obterTemplateDaRota(rota) {
  if (rota.startsWith("/projetos")) {
    return templateProjetos;
  }

  return routes[rota] || templateHome;
}

function rolarParaSecao(rota) {
  const secoes = {
    "/projetos/voluntariado": "voluntariado",
    "/projetos/doacao": "doacao",
  };

  const idSecao = secoes[rota];

  if (!idSecao) return;

  const secao = document.getElementById(idSecao);

  if (secao) {
    secao.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

export function renderizarRota() {
  const app = document.getElementById("app");

  if (!app) return;

  const rota = obterRotaAtual();
  const template = obterTemplateDaRota(rota);

  app.replaceChildren();
  app.insertAdjacentHTML("afterbegin", template());

  inicializarModais();
  inicializarValidacao();

  app.focus();

  rolarParaSecao(rota);
}
