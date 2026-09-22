/**
 * Máscaras de entrada para os campos de CPF, Telefone e CEP.
 *
 * Estratégia: a cada evento "input", removemos tudo que não é dígito
 * e reconstruímos a string aplicando a pontuação incrementalmente.
 * Isso garante que o valor SEMPRE fique no formato esperado enquanto
 * o usuário digita, em vez de só validar no submit.
 *
 * Observação sobre o `pattern` do HTML: ele continua no HTML como uma
 * segunda camada de segurança (defesa em profundidade), útil caso o
 * JavaScript falhe em carregar ou seja desabilitado no navegador.
 */

/**
 * Aplica uma máscara genérica em um campo de input.
 * @param {HTMLInputElement} input
 * @param {(digitos: string) => string} formatador
 * @param {number} maxDigitos
 */
function aplicarMascara(input, formatador, maxDigitos) {
  input.addEventListener('input', () => {
    const posicaoCursorOriginal = input.selectionStart;
    const tamanhoAntes = input.value.length;

    const digitos = input.value.replace(/\D/g, '').slice(0, maxDigitos);
    input.value = formatador(digitos);

    // Reposiciona o cursor de forma aproximada, compensando os
    // caracteres de formatação inseridos/removidos.
    const diferenca = input.value.length - tamanhoAntes;
    const novaPosicao = Math.max(0, posicaoCursorOriginal + diferenca);
    input.setSelectionRange(novaPosicao, novaPosicao);
  });
}

function formatarCPF(digitos) {
  return digitos
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function formatarTelefone(digitos) {
  if (digitos.length <= 10) {
    // Fixo: (00) 0000-0000
    return digitos
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d{1,4})$/, '$1-$2');
  }
  // Celular: (00) 00000-0000
  return digitos
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d{1,4})$/, '$1-$2');
}

function formatarCEP(digitos) {
  return digitos.replace(/(\d{5})(\d{1,3})$/, '$1-$2');
}

document.addEventListener('DOMContentLoaded', () => {
  // ---------- Menu responsivo ----------
  const botaoMenu = document.querySelector('.menu-toggle');
  const menuPrincipal = document.getElementById('menu-principal');

  if (botaoMenu && menuPrincipal) {
    botaoMenu.addEventListener('click', () => {
      const estaAberto = menuPrincipal.classList.toggle('is-open');

      botaoMenu.setAttribute('aria-expanded', String(estaAberto));

      const icone = botaoMenu.querySelector('.menu-toggle-icone');

      if (icone) {
        icone.textContent = estaAberto ? '×' : '☰';
      }
    });

    // No mobile, fecha o menu após selecionar um link.
    menuPrincipal.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          menuPrincipal.classList.remove('is-open');
          botaoMenu.setAttribute('aria-expanded', 'false');

          const icone = botaoMenu.querySelector('.menu-toggle-icone');

          if (icone) {
            icone.textContent = '☰';
          }
        }
      });
    });
  }
  const campoCPF = document.getElementById('cpf');
  const campoTelefone = document.getElementById('telefone');
  const campoCEP = document.getElementById('cep');

  if (campoCPF) aplicarMascara(campoCPF, formatarCPF, 11);
  if (campoTelefone) aplicarMascara(campoTelefone, formatarTelefone, 11);
  if (campoCEP) aplicarMascara(campoCEP, formatarCEP, 8);

  // Feedback de validação: quando um campo inválido perde o foco,
  // marcamos aria-invalid para leitores de tela sinalizarem o erro.
  const camposValidaveis = [campoCPF, campoTelefone, campoCEP].filter(Boolean);
  camposValidaveis.forEach((campo) => {
    campo.addEventListener('blur', () => {
      if (campo.value === '') {
        campo.removeAttribute('aria-invalid');
        return;
      }
      campo.setAttribute('aria-invalid', String(!campo.checkValidity()));
    });
  });
});