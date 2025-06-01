Financial Manage 💰

Financial Manage é uma aplicação web para gerenciamento financeiro pessoal, permitindo que os usuários acompanhem transações, visualizem saldos e gerenciem suas finanças de forma simples e intuitiva. Construída com Next.js, React e TypeScript, a aplicação utiliza o App Router do Next.js para uma navegação eficiente e uma experiência de usuário moderna.
📋 Visão Geral
Esta aplicação foi desenvolvida como parte do Tech Challenge da FIAP (Fase 1). Ela inclui funcionalidades como:

Visualização do saldo atual 🏦
Registro de novas transações (depósitos, saques, transferências) 📝
Listagem e gerenciamento de transações (adicionar, editar, excluir) 📊
Interface responsiva e acessível 🌐

🚀 Começando
Siga as instruções abaixo para configurar e executar o projeto localmente.
Pré-requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

Node.js (versão 18 ou superior) ⚙️
npm (geralmente instalado com o Node.js) 📦
Git (para clonar o repositório) 🌍

Instalação

Clone o repositório:
git clone https://github.com/Silvio-Hub/Gerenciamento-Financeiro-TC1-FIAP-.git
cd financial-manage

Instale as dependências:
npm install

Execute a aplicação em modo de desenvolvimento:
npm run dev

A aplicação estará disponível em http://localhost:3000.

Scripts Disponíveis
No diretório do projeto, você pode executar os seguintes scripts:

npm run dev:Inicia o servidor de desenvolvimento do Next.js em http://localhost:3000.

npm run build:Gera a build de produção da aplicação.

npm run start:Inicia a aplicação em modo de produção após a build.

npm run lint:Executa o ESLint para verificar problemas de linting no código.

npm run storybook:Inicia o Storybook para visualizar os componentes em http://localhost:6006.

npm run build-storybook:Gera uma build estática do Storybook.

🛠️ Tecnologias Utilizadas

Next.js: Framework React para aplicações web modernas (versão 15.3.2).
React: Biblioteca para construção de interfaces de usuário (versão 19.0.0).
TypeScript: Superset de JavaScript para tipagem estática (versão 5).
Storybook: Ferramenta para desenvolvimento e documentação de componentes (versão 9.0.3).
Phosphor Icons: Ícones leves e personalizáveis para a interface.
React Hook Form: Biblioteca para gerenciamento de formulários.
Tailwind CSS: Framework CSS utilitário para estilização.

📂 Estrutura do Projeto
financial-manage/
├── src/
│ ├── app/ # Páginas do Next.js (App Router)
│ │ ├── dashboard/ # Página do dashboard
│ │ └── transactions/ # Página de transações
│ ├── components/ # Componentes reutilizáveis
│ │ ├── context/ # Contextos (ex.: AccountContext)
│ │ ├── transactions/ # Componentes específicos de transações
│ │ └── ui/ # Componentes de UI genéricos (ex.: TopBar, Input)
│ ├── lib/ # Utilitários e modelos
│ │ ├── models/ # Modelos de dados (ex.: Transaction)
│ │ └── utils/ # Funções utilitárias (ex.: dateUtils)
│ └── styles/ # Estilos globais e módulos CSS
├── .storybook/ # Configurações do Storybook
├── public/ # Arquivos estáticos (ex.: imagens)
├── package.json # Dependências e scripts do projeto
├── tsconfig.json # Configurações do TypeScript
└── README.md # Documentação do projeto

🤝 Contribuição
Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

Faça um fork do repositório.
Crie uma branch para sua feature (git checkout -b feature/nova-feature).
Commit suas alterações (git commit -m 'Adiciona nova feature').
Envie para o repositório remoto (git push origin feature/nova-feature).
Abra um Pull Request.

📜 Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.
📬 Contato
Se você tiver dúvidas ou sugestões, entre em contato comigo:

E-mail: seu-silviocelso.dev@gmail.com 📧
GitHub: Silvio-Hub 🌟

⭐ Obrigado por usar o Financial Manage! ⭐
