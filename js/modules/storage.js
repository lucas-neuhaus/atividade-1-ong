const CHAVE_STORAGE = "voluntarios";

export function obterVoluntarios() {
  const dados = localStorage.getItem(CHAVE_STORAGE);

  if (!dados) {
    return [];
  }

  try {
    return JSON.parse(dados);
  } catch {
    return [];
  }
}

export function salvarVoluntario(voluntario) {
  const voluntarios = obterVoluntarios();

  voluntarios.push(voluntario);

  localStorage.setItem(CHAVE_STORAGE, JSON.stringify(voluntarios));
}

export function obterDadosFormulario(formulario) {
  const formData = new FormData(formulario);

  return Object.fromEntries(formData.entries());
}

export function atualizarResumoCadastros() {
  const resumo = document.getElementById("resumo-cadastros");
  const total = document.getElementById("total-voluntarios");

  if (!resumo || !total) return;

  const voluntarios = obterVoluntarios();

  total.textContent = String(voluntarios.length);
  resumo.hidden = false;
}