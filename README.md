# Instituto Vidas da Vila Aparecida

Aplicação web institucional desenvolvida para o Instituto Vidas da Vila Aparecida, uma ONG fictícia voltada a ações comunitárias de educação, esporte e apoio a famílias.

O projeto foi desenvolvido durante as atividades da disciplina de Front-End, evoluindo de uma estrutura HTML para uma aplicação responsiva com JavaScript, acessibilidade, tema escuro, build de produção e publicação automatizada.

## Funcionalidades

- navegação em SPA com rotas baseadas em hash;
- páginas de Home, Projetos e Cadastro;
- apresentação dos projetos sociais da instituição;
- formulário de cadastro com validação;
- histórico de cadastros;
- menu responsivo com submenu;
- modal e componentes de interface;
- navegação por teclado e recursos de acessibilidade;
- modo escuro com persistência da preferência do usuário;
- layout responsivo para diferentes tamanhos de tela.

## Tecnologias utilizadas

- HTML5;
- CSS3;
- JavaScript;
- ES Modules;
- Vite;
- Git e GitHub;
- GitHub Actions;
- GitHub Pages.

O CSS utiliza variáveis para o Design System, Grid, Flexbox, media queries e estados de interação. O JavaScript é organizado em módulos responsáveis por rotas, templates, interface e funcionalidades da aplicação.

## Pré-requisitos

Para executar o projeto localmente, é necessário ter instalado:

- Node.js 24 ou versão compatível com o Vite utilizado;
- npm;
- Git, caso o projeto seja obtido por clonagem do repositório.

## Instalação

Clone o repositório:

```bash
git clone https://github.com/lucas-neuhaus/vidas-da-vila.git
```

Acesse a pasta do projeto:

```bash
cd vidas-da-vila
```

Instale as dependências:

```bash
npm install
```

## Execução em desenvolvimento

Inicie o servidor de desenvolvimento do Vite:

```bash
npm run dev
```

O terminal exibirá o endereço local utilizado para acessar a aplicação no navegador.

## Build de produção

Para gerar a versão otimizada para produção:

```bash
npm run build
```

O Vite processa e minifica os arquivos da aplicação e gera o resultado na pasta `dist`.

Para testar localmente a build gerada:

```bash
npm run preview
```

## Testes e validação

O projeto foi validado manualmente durante o desenvolvimento e após a geração da build de produção.

Foram verificados:

- navegação entre as rotas;
- formulário e validações;
- abertura e fechamento de modais;
- navegação por teclado;
- estados visuais de foco;
- modo claro e modo escuro;
- persistência do tema após recarregar a página;
- carregamento dos recursos na build de produção;
- funcionamento da aplicação publicada no GitHub Pages.

Também foram realizadas verificações de acessibilidade e desempenho com o Lighthouse.

## Acessibilidade

A aplicação utiliza HTML semântico e recursos complementares de acessibilidade, incluindo:

- landmarks como `header`, `nav`, `main` e `footer`;
- link para pular diretamente ao conteúdo principal;
- gerenciamento de foco durante a navegação;
- estados de foco visíveis;
- atributos WAI-ARIA em elementos interativos;
- melhorias de acessibilidade em formulários e modais;
- contraste adaptado aos temas claro e escuro.

## Otimização

O Vite é utilizado para gerar a build de produção e processar os recursos da aplicação.

A imagem principal da Home utiliza AVIF. A versão original em PNG possuía aproximadamente 2,9 MB, enquanto a versão utilizada na build possui cerca de 92 KB, reduzindo significativamente o volume transferido.

## Versionamento

O projeto utiliza uma organização inspirada no GitFlow:

- `main`: versão estável e publicada;
- `develop`: integração contínua das alterações;
- `feature/*`: desenvolvimento isolado de novas funcionalidades;
- `fix/*`: correções específicas;
- `docs/*`: alterações de documentação.

As alterações são integradas por Pull Requests antes de chegarem à versão de produção.

As mensagens de commit seguem o padrão Conventional Commits, utilizando prefixos como:

- `feat:` para novas funcionalidades;
- `fix:` para correções;
- `docs:` para documentação.

O versionamento das entregas segue os princípios de Versionamento Semântico (SemVer), no formato `MAJOR.MINOR.PATCH`.

## Deploy e CI/CD

A aplicação é publicada no GitHub Pages.

O processo de deploy é automatizado pelo GitHub Actions. Quando uma versão é integrada à branch `main`, o workflow:

1. obtém o código do repositório;
2. configura o ambiente Node.js;
3. instala as dependências com `npm ci`;
4. executa `npm run build`;
5. envia o conteúdo da pasta `dist`;
6. publica a nova versão no GitHub Pages.

O Vite está configurado com o caminho base correspondente ao nome do repositório para que os recursos sejam carregados corretamente em produção.

## Projeto publicado

A versão de produção está disponível em:

https://lucas-neuhaus.github.io/vidas-da-vila/

## Repositório

Código-fonte:

https://github.com/lucas-neuhaus/vidas-da-vila