export function inicializarMenu() {
  const botaoMenu = document.querySelector(".menu-toggle");
  const menuPrincipal = document.getElementById("menu-principal");

  if (!botaoMenu || !menuPrincipal) return;

  botaoMenu.addEventListener("click", () => {
    const estaAberto = menuPrincipal.classList.toggle("is-open");

    botaoMenu.setAttribute("aria-expanded", String(estaAberto));

    const icone = botaoMenu.querySelector(".menu-toggle-icone");

    if (icone) {
      icone.textContent = estaAberto ? "×" : "☰";
    }
  });

  menuPrincipal.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth >= 768) return;

      menuPrincipal.classList.remove("is-open");
      botaoMenu.setAttribute("aria-expanded", "false");

      const icone = botaoMenu.querySelector(".menu-toggle-icone");

      if (icone) {
        icone.textContent = "☰";
      }
    });
  });
}

export function inicializarModais() {
  const botoesAbrirModal = document.querySelectorAll("[data-modal-abrir]");

  botoesAbrirModal.forEach((botaoAbrir) => {
    const idModal = botaoAbrir.dataset.modalAbrir;
    const modal = document.getElementById(idModal);

    if (!modal) return;

    const botaoFechar = modal.querySelector(".modal-fechar");
    const botaoConfirmar = modal.querySelector(".modal-confirmar");

    function obterElementosFocaveis() {
      return Array.from(
        modal.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((elemento) => !elemento.hidden);
    }

    function abrirModal() {
      modal.hidden = false;
      document.body.classList.add("modal-aberto");

      const elementosFocaveis = obterElementosFocaveis();
      elementosFocaveis[0]?.focus();
    }

    function fecharModal() {
      modal.hidden = true;
      document.body.classList.remove("modal-aberto");
      botaoAbrir.focus();
    }

    function controlarTeclado(evento) {
      if (evento.key === "Escape") {
        fecharModal();
        return;
      }

      if (evento.key !== "Tab") return;

      const elementosFocaveis = obterElementosFocaveis();

      if (elementosFocaveis.length === 0) {
        evento.preventDefault();
        return;
      }

      const primeiroElemento = elementosFocaveis[0];
      const ultimoElemento =
        elementosFocaveis[elementosFocaveis.length - 1];

      if (
        evento.shiftKey &&
        document.activeElement === primeiroElemento
      ) {
        evento.preventDefault();
        ultimoElemento.focus();
        return;
      }

      if (
        !evento.shiftKey &&
        document.activeElement === ultimoElemento
      ) {
        evento.preventDefault();
        primeiroElemento.focus();
      }
    }

    botaoAbrir.addEventListener("click", abrirModal);

    botaoFechar?.addEventListener("click", fecharModal);
    botaoConfirmar?.addEventListener("click", fecharModal);

    modal.addEventListener("click", (evento) => {
      if (evento.target === modal) {
        fecharModal();
      }
    });

    modal.addEventListener("keydown", controlarTeclado);
  });
}

let temporizadorToast;

export function mostrarToastSucesso() {
  const toast = document.getElementById("toast-sucesso");

  if (!toast) return;

  const botaoFechar = toast.querySelector(".toast-fechar");

  function fecharToast() {
    toast.hidden = true;
    clearTimeout(temporizadorToast);
  }

  toast.hidden = false;

  clearTimeout(temporizadorToast);

  temporizadorToast = setTimeout(() => {
    fecharToast();
  }, 4000);

  botaoFechar?.addEventListener("click", fecharToast, { once: true });
}