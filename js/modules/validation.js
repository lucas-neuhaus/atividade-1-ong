import { obterDadosFormulario, salvarVoluntario } from "./storage.js";
import { mostrarToastSucesso } from "./ui.js";

function aplicarMascara(input, formatador, maxDigitos) {
  input.addEventListener("input", () => {
    const posicaoCursorOriginal = input.selectionStart;
    const tamanhoAntes = input.value.length;

    const digitos = input.value.replace(/\D/g, "").slice(0, maxDigitos);
    input.value = formatador(digitos);

    const diferenca = input.value.length - tamanhoAntes;
    const novaPosicao = Math.max(0, (posicaoCursorOriginal ?? 0) + diferenca);

    input.setSelectionRange(novaPosicao, novaPosicao);
  });
}

function formatarCPF(digitos) {
  return digitos
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function formatarTelefone(digitos) {
  if (digitos.length <= 10) {
    return digitos
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d{1,4})$/, "$1-$2");
  }

  return digitos
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{1,4})$/, "$1-$2");
}

function formatarCEP(digitos) {
  return digitos.replace(/(\d{5})(\d{1,3})$/, "$1-$2");
}

function definirDataMaxima() {
  const campoData = document.getElementById("data-nascimento");

  if (!campoData) return;

  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const dia = String(hoje.getDate()).padStart(2, "0");

  campoData.max = `${ano}-${mes}-${dia}`;
}

function atualizarEstadoCampo(campo) {
  const container = campo.closest(".campo-formulario");

  if (!container) return;

  container.classList.remove("is-valid", "is-invalid");

  if (campo.value.trim() === "") {
    campo.removeAttribute("aria-invalid");
    return;
  }

  if (campo.checkValidity()) {
    container.classList.add("is-valid");
    campo.setAttribute("aria-invalid", "false");
  } else {
    container.classList.add("is-invalid");
    campo.setAttribute("aria-invalid", "true");
  }
}

export function inicializarValidacao() {
  const formulario = document.querySelector("#app form");

  if (!formulario) return;

  definirDataMaxima();

  const campoCPF = formulario.querySelector("#cpf");
  const campoTelefone = formulario.querySelector("#telefone");
  const campoCEP = formulario.querySelector("#cep");

  if (campoCPF) aplicarMascara(campoCPF, formatarCPF, 11);
  if (campoTelefone) aplicarMascara(campoTelefone, formatarTelefone, 11);
  if (campoCEP) aplicarMascara(campoCEP, formatarCEP, 8);

  const campos = formulario.querySelectorAll(
    "input[required], select[required], textarea[required]",
  );

  campos.forEach((campo) => {
    campo.addEventListener("blur", () => {
      atualizarEstadoCampo(campo);
    });

    campo.addEventListener("input", () => {
      const container = campo.closest(".campo-formulario");

      if (
        container &&
        (container.classList.contains("is-valid") ||
          container.classList.contains("is-invalid"))
      ) {
        atualizarEstadoCampo(campo);
      }
    });

    campo.addEventListener("change", () => {
      atualizarEstadoCampo(campo);
    });
  });

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    let formularioValido = true;
    let primeiroInvalido = null;

    campos.forEach((campo) => {
      const container = campo.closest(".campo-formulario");

      if (!container) return;

      container.classList.remove("is-valid", "is-invalid");

      if (campo.checkValidity()) {
        container.classList.add("is-valid");
        campo.setAttribute("aria-invalid", "false");
      } else {
        container.classList.add("is-invalid");
        campo.setAttribute("aria-invalid", "true");

        formularioValido = false;

        if (!primeiroInvalido) {
          primeiroInvalido = campo;
        }
      }
    });

    if (!formularioValido && primeiroInvalido) {
      primeiroInvalido.focus();
      return;
    }

    const dadosFormulario = obterDadosFormulario(formulario);

    salvarVoluntario(dadosFormulario);
    mostrarToastSucesso();

    formulario.reset();

    campos.forEach((campo) => {
      const container = campo.closest(".campo-formulario");

      container?.classList.remove("is-valid", "is-invalid");
      campo.removeAttribute("aria-invalid");
    });
  });
}
