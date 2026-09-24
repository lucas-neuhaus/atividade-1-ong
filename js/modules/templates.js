const projetos = [
  {
    titulo: "Reforço Escolar Comunitário",
    status: "Em Andamento",
    classeBadge: "badge-sucesso",
    descricao:
      "Aulas de português e matemática de segunda a sexta, no contraturno escolar, para crianças e adolescentes de 7 a 14 anos moradores do Vila Aparecida. Vagas limitadas por sala.",
  },
  {
    titulo: "Bola pra Frente",
    status: "Aceitando Voluntários",
    classeBadge: "badge-aviso",
    descricao:
      "Time de futebol comunitário aos sábados de manhã, aberto a crianças e adolescentes de 8 a 16 anos. Além do esporte, o projeto trabalha disciplina, trabalho em equipe e permanência escolar.",
  },
  {
    titulo: "Cestas Solidárias",
    status: "Ação Mensal",
    classeBadge: "badge-info",
    descricao:
      "Distribuição mensal de cestas básicas para famílias cadastradas em situação de vulnerabilidade, com prioridade para famílias com crianças pequenas ou idosos.",
  },
];

function gerarCardsProjetos() {
  return projetos
    .map(
      (projeto) => `
        <article class="col-md-6 col-lg-4">
          <div class="cabecalho-card">
            <h3>${projeto.titulo}</h3>
            <span class="badge ${projeto.classeBadge}">
              ${projeto.status}
            </span>
          </div>

          <p>${projeto.descricao}</p>
        </article>
      `,
    )
    .join("");
}

export function templateHome() {
  return `
    <section aria-labelledby="titulo-quem-somos">
      <h2 id="titulo-quem-somos">Quem nós somos</h2>

      <figure>
        <img
          src="../imagens/cestas-solidarias.png"
          alt="Voluntários de camiseta preta entregando cestas básicas a moradores em uma mesa ao ar livre, com a fachada pintada 'Vila Aparecida, Florianópolis - SC' ao fundo"
          width="1200"
          height="800"
          loading="lazy"
        />

        <figcaption>
          Entrega de cestas básicas na Vila Aparecida, um dos momentos do
          nosso projeto Cestas Solidárias.
        </figcaption>
      </figure>

      <p>
        Há 8 anos, o Instituto Vidas da Vila Aparecida atua dentro da própria
        comunidade, oferecendo reforço escolar, atividades esportivas e apoio
        a famílias em situação de vulnerabilidade. Tudo o que fazemos nasce de
        quem mora e conhece as necessidades daqui.
      </p>
    </section>

    <section aria-labelledby="titulo-missao">
      <h2 id="titulo-missao">Nossa Missão</h2>

      <p>
        Acreditamos que educação e pertencimento comunitário transformam
        trajetórias. Por isso, oferecemos reforço escolar gratuito, um time de
        futebol para crianças e adolescentes, e distribuição mensal de cestas
        básicas para famílias cadastradas.
      </p>
    </section>

    <section aria-labelledby="titulo-contato">
      <h2 id="titulo-contato">Contato</h2>

      <address>
        <p>
          E-mail:
          <a href="mailto:contato@vidasvilaaparecida.org.br">
            contato@vidasvilaaparecida.org.br
          </a>
        </p>

        <p>
          Telefone:
          <a href="tel:+5548999999999">(48) 99999-9999</a>
        </p>

        <p>
          Endereço: Rua da Fonte, 000 — Vila Aparecida, Florianópolis - SC
        </p>
      </address>
    </section>

    <section aria-labelledby="titulo-depoimentos">
      <h2 id="titulo-depoimentos">Depoimentos</h2>

      <article>
        <h3 class="visualmente-oculto">
          Depoimento de Maria das Graças
        </h3>

        <blockquote>
          <p>
            Antes do reforço escolar, meu filho ficava sozinho em casa
            enquanto eu trabalhava. Hoje ele estuda, faz amigos e participa do
            time de futebol. Isso mudou a rotina da nossa família inteira.
          </p>
        </blockquote>

        <footer class="rodape-depoimento">
          <p>Maria das Graças, moradora da Vila Aparecida</p>
        </footer>
      </article>

      <article>
        <h3 class="visualmente-oculto">
          Depoimento de Rafael Andrade
        </h3>

        <blockquote>
          <p>
            Fui voluntário por seis meses dando aula de reforço aos sábados. O
            que mais me marcou foi ver o quanto uma tarde de atenção muda o
            jeito de uma criança encarar a escola.
          </p>
        </blockquote>

        <footer class="rodape-depoimento">
          <p>Rafael Andrade, ex-voluntário</p>
        </footer>
      </article>
    </section>
  `;
}

export function templateProjetos() {
  return `
    <section aria-labelledby="titulo-projetos">
      <h2 id="titulo-projetos">Nossos Projetos</h2>

      <div class="grid-12">
        ${gerarCardsProjetos()}
      </div>
    </section>

    <section id="voluntariado" aria-labelledby="titulo-voluntariado">
      <h2 id="titulo-voluntariado">Como se Voluntariar</h2>

      <p>
        Cada uma das nossas frentes de atuação depende de voluntários para
        funcionar. Confira as oportunidades abertas no momento:
      </p>

      <ul>
        <li>Professor(a) voluntário(a) no reforço escolar</li>
        <li>Técnico(a) ou auxiliar no time de futebol</li>
        <li>Apoio na triagem e entrega das cestas solidárias</li>
      </ul>

      <p>
        <a href="#/cadastro">Quero me cadastrar como voluntário</a>
      </p>
    </section>

    <section id="doacao" aria-labelledby="titulo-doacao">
      <h2 id="titulo-doacao">Como Doar</h2>

      <p>
        As doações sustentam diretamente os três projetos acima. Você pode
        contribuir das seguintes formas:
      </p>

      <dl>
        <dt>Pix</dt>
        <dd>doacoes@vidasvilaaparecida.org.br</dd>

        <dt>Transferência bancária</dt>
        <dd>Banco 000, Agência 0001, Conta 00000-0</dd>

        <dt>Doação de itens</dt>
        <dd>
          Alimentos não perecíveis e materiais escolares podem ser entregues
          na sede, de segunda a sexta, das 9h às 17h.
        </dd>
      </dl>

      <button
        type="button"
        class="botao-modal"
        data-modal-abrir="modal-doacao"
      >
        Ver orientações para doação
      </button>
    </section>

    <div
      class="modal"
      id="modal-doacao"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-doacao-titulo"
      hidden
    >
      <div class="modal-conteudo">
        <div class="modal-cabecalho">
          <h2 id="modal-doacao-titulo">Orientações para doação</h2>

          <button
            type="button"
            class="modal-fechar"
            aria-label="Fechar modal"
          >
            ×
          </button>
        </div>

        <p>
          Antes de realizar uma doação de itens, entre em contato com o
          Instituto para confirmar quais materiais são necessários no momento.
        </p>

        <p>
          Alimentos devem estar dentro do prazo de validade e com a embalagem
          íntegra.
        </p>

        <button type="button" class="modal-confirmar">Entendi</button>
      </div>
    </div>
  `;
}

export function templateCadastro() {
  return `
    <section aria-labelledby="titulo-cadastro">
      <h2 id="titulo-cadastro">Formulário de Cadastro</h2>

      <div class="alerta alerta-info" role="status">
        <strong>Cadastro de voluntários:</strong>
        preencha os campos obrigatórios. Os dados serão validados antes da
        confirmação.

        <button
          type="button"
          class="botao-modal"
          data-modal-abrir="modal-voluntariado"
        >
          Como funciona o voluntariado?
        </button>
      </div>

      <div
        id="resumo-cadastros"
        class="alerta alerta-sucesso"
        role="status"
        aria-live="polite"
        hidden
      >
        <strong>Voluntários cadastrados:</strong>
        <span id="total-voluntarios">0</span>
        <br />
        <span>Os cadastros permanecem armazenados neste navegador.</span>
      </div>

      <form action="#" method="POST" novalidate>
        <fieldset>
          <legend>Dados pessoais</legend>

          <div class="campo-formulario">
            <label for="nome">Nome completo:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              autocomplete="name"
              required
            />
            <p class="mensagem-erro">
              Verifique este campo antes de continuar.
            </p>
          </div>

          <div class="campo-formulario">
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              autocomplete="email"
              required
            />
            <p class="mensagem-erro">
              Verifique este campo antes de continuar.
            </p>
          </div>

          <div class="campo-formulario">
            <label for="data-nascimento">Data de nascimento:</label>
            <input
              type="date"
              id="data-nascimento"
              name="data_nascimento"
              autocomplete="bday"
              max="2026-09-24"
              required
            />
            <p class="mensagem-erro">
              Verifique este campo antes de continuar.
            </p>
          </div>
        </fieldset>

        <fieldset>
          <legend>Documento e contato</legend>

          <div class="campo-formulario">
            <label for="cpf">CPF:</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              inputmode="numeric"
              pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}"
              placeholder="000.000.000-00"
              aria-describedby="cpf-dica"
              required
            />
            <span id="cpf-dica" class="dica-formato">
              Formato: 000.000.000-00
            </span>
            <p class="mensagem-erro">
              Verifique este campo antes de continuar.
            </p>
          </div>

          <div class="campo-formulario">
            <label for="telefone">Telefone:</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              inputmode="numeric"
              autocomplete="tel"
              pattern="\\(\\d{2}\\) \\d{4,5}-\\d{4}"
              placeholder="(00) 00000-0000"
              aria-describedby="telefone-dica"
              required
            />
            <span id="telefone-dica" class="dica-formato">
              Formato: (00) 0000-0000 (fixo) ou
              (00) 00000-0000 (celular)
            </span>
            <p class="mensagem-erro">
              Verifique este campo antes de continuar.
            </p>
          </div>
        </fieldset>

        <fieldset>
          <legend>Endereço</legend>

          <div class="campo-formulario">
            <label for="cep">CEP:</label>
            <input
              type="text"
              id="cep"
              name="cep"
              inputmode="numeric"
              autocomplete="postal-code"
              pattern="\\d{5}-\\d{3}"
              placeholder="00000-000"
              aria-describedby="cep-dica"
              required
            />
            <span id="cep-dica" class="dica-formato">
              Formato: 00000-000
            </span>
            <p class="mensagem-erro">
              Verifique este campo antes de continuar.
            </p>
          </div>

          <div class="campo-formulario">
            <label for="endereco">Endereço (rua e número):</label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              autocomplete="address-line1"
              placeholder="Rua das Palmeiras, 245"
              required
            />
            <p class="mensagem-erro">
              Verifique este campo antes de continuar.
            </p>
          </div>

          <div class="campo-formulario">
            <label for="cidade">Cidade:</label>
            <input
              type="text"
              id="cidade"
              name="cidade"
              autocomplete="address-level2"
              required
            />
            <p class="mensagem-erro">
              Verifique este campo antes de continuar.
            </p>
          </div>

          <div class="campo-formulario">
            <label for="estado">Estado:</label>
            <select
              id="estado"
              name="estado"
              autocomplete="address-level1"
              required
            >
              <option value="" selected disabled>Selecione...</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
            <p class="mensagem-erro">
              Verifique este campo antes de continuar.
            </p>
          </div>
        </fieldset>

        <fieldset>
          <legend>Motivação</legend>

          <div class="campo-formulario">
            <label for="mensagem">Por que quer ser voluntário?</label>
            <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Escreva sua mensagem aqui..."
              required
            ></textarea>
            <p class="mensagem-erro">
              Verifique este campo antes de continuar.
            </p>
          </div>
        </fieldset>

        <button type="submit">Cadastrar</button>
      </form>
    </section>

    <div
      class="modal"
      id="modal-voluntariado"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-voluntariado-titulo"
      hidden
    >
      <div class="modal-conteudo">
        <div class="modal-cabecalho">
          <h2 id="modal-voluntariado-titulo">
            Como funciona o voluntariado?
          </h2>

          <button
            type="button"
            class="modal-fechar"
            aria-label="Fechar modal"
          >
            ×
          </button>
        </div>

        <p>
          Após o cadastro, a equipe da ONG poderá entrar em contato para
          apresentar as atividades disponíveis e alinhar a participação de
          acordo com o perfil e a disponibilidade do voluntário.
        </p>

        <button type="button" class="modal-confirmar">Entendi</button>
      </div>
    </div>

    <div
      id="toast-sucesso"
      class="toast toast-sucesso"
      role="status"
      aria-live="polite"
      aria-atomic="true"
      hidden
    >
      <strong>Cadastro validado!</strong>
      <span>Formulário pronto para envio.</span>

      <button
        type="button"
        class="toast-fechar"
        aria-label="Fechar notificação"
      >
        ×
      </button>
    </div>
  `;
}
