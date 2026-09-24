export function inicializarModais() {
  const botoesAbrirModal = document.querySelectorAll("[data-modal-abrir]");

  botoesAbrirModal.forEach((botaoAbrir) => {
    const idModal = botaoAbrir.dataset.modalAbrir;
    const modal = document.getElementById(idModal);

    if (!modal) return;

    const botaoFechar = modal.querySelector(".modal-fechar");
    const botaoConfirmar = modal.querySelector(".modal-confirmar");

    function abrirModal() {
      modal.hidden = false;
      document.body.classList.add("modal-aberto");

      if (botaoFechar) {
        botaoFechar.focus();
      }
    }

    function fecharModal() {
      modal.hidden = true;
      document.body.classList.remove("modal-aberto");
      botaoAbrir.focus();
    }

    botaoAbrir.addEventListener("click", abrirModal);

    botaoFechar?.addEventListener("click", fecharModal);
    botaoConfirmar?.addEventListener("click", fecharModal);

    modal.addEventListener("click", (evento) => {
      if (evento.target === modal) {
        fecharModal();
      }
    });

    modal.addEventListener("keydown", (evento) => {
      if (evento.key === "Escape") {
        fecharModal();
      }
    });
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