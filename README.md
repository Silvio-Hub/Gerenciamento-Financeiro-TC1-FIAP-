Financial Manage
Visão Geral
Financial Manage é uma aplicação web desenvolvida para ajudar os usuários a gerenciar suas finanças pessoais de forma simples e intuitiva. O projeto permite que os usuários visualizem seu saldo, registrem transações (depósitos, saques e transferências) e acompanhem o histórico de movimentações financeiras. A aplicação foi construída utilizando Next.js com TypeScript, e segue boas práticas de desenvolvimento, como modularidade, componentização e tipagem estrita.
Este projeto foi desenvolvido como parte de um estudo prático para a FIAP Tech Challenge - Fase 1, com foco em criar uma interface amigável para gerenciamento financeiro.
Funcionalidades Principais

Visualização de Saldo: Exibe o saldo atual da conta com opção de ocultar/exibir o valor.
Registro de Transações: Permite adicionar, editar e excluir transações (depósitos, saques e transferências).
Listagem de Transações: Mostra as últimas transações na página de dashboard com barra de rolagem vertical e histórico completo na página de transações.
Responsividade: Interface adaptável para dispositivos móveis e desktops.
Storybook: Documentação interativa dos componentes da aplicação.

Tecnologias Utilizadas

Next.js 14.2.3: Framework React para construção da aplicação.
React 18: Biblioteca para construção de interfaces.
TypeScript: Tipagem estrita para maior segurança e manutenibilidade.
Tailwind CSS: Framework CSS para estilização rápida e responsiva.
Zod: Biblioteca para validação de formulários.
React Hook Form: Gerenciamento de formulários.
Phosphor Icons: Ícones para a interface.
Storybook: Ferramenta para documentação e testes visuais dos componentes.
UUID: Geração de identificadores únicos para transações.

Estrutura do Projeto
Diretórios Principais

src/components/: Contém os componentes reutilizáveis da aplicação.
auth/: Componentes relacionados a autenticação (como LoginForm), que podem ser reintroduzidos no futuro.
context/: Contextos globais, como AccountContext para gerenciamento de estado.
dashboard/: Componentes específicos da página de dashboard (BalanceCard, TransactionList, NewTransactionForm).
transactions/: Componentes específicos da página de transações (TransactionModal, DeleteConfirmationModal).
ui/: Componentes genéricos de UI (TopBar, Input, Button, Modal).

src/app/: Contém as páginas da aplicação.
dashboard/: Página principal para visualização de saldo e últimas transações.
transactions/: Página para listagem e gerenciamento completo de transações.
login/: Página de login (atualmente sem funcionalidade de autenticação ativa).

.storybook/: Configurações e histórias do Storybook para documentação dos componentes.
public/: Arquivos estáticos, como imagens (logo-pc.png, default-user.png, login-bg.jpg).

Arquivos Principais

src/lib/models/: Contém os modelos de dados (Account.ts, Transaction.ts).
package.json: Dependências e scripts do projeto.
.env.local: Variáveis de ambiente (atualmente não utilizadas, mas podem ser usadas para configurações futuras).

Pré-requisitos
Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas:

Node.js (versão 18 ou superior)
npm ou yarn (para gerenciamento de pacotes)

Instalação
Siga os passos abaixo para configurar e rodar o projeto localmente:

Clone o Repositório:
git clone <https://github.com/Silvio-Hub/Gerenciamento-Financeiro-TC1-FIAP->
cd financial-manage

Instale as Dependências:
npm install

Configure as Variáveis de Ambiente (Opcional)\*\*:

Crie um arquivo .env.local na raiz do projeto.
Adicione variáveis de ambiente, se necessário (ex.: para autenticação ou APIs externas). Atualmente, o projeto não requer variáveis de ambiente.

Inicie o Servidor de Desenvolvimento:
npm run dev

A aplicação estará disponível em http://localhost:3000.

(Opcional) Inicie o Storybook:Para visualizar a documentação interativa dos componentes:
npm run storybook

O Storybook estará disponível em http://localhost:6006.

Uso
Páginas Disponíveis

Dashboard (/dashboard): Exibe o saldo atual, as últimas transações e um formulário para adicionar novas transações.
O saldo pode ser ocultado/exibido ao clicar no ícone de olho.
A lista de últimas transações tem uma barra de rolagem vertical para navegação.
Use o formulário para adicionar transações (depósitos, saques ou transferências).

Transações (/transactions): Lista todas as transações realizadas, com opções para adicionar, editar e excluir.
Clique no botão "Adicionar Transação" para abrir o modal de adição.
Use os ícones de lápis e lixeira para editar ou excluir transações.

Login (/login): Página de login, atualmente sem funcionalidade de autenticação ativa. Pode ser reintroduzida no futuro.

Componentes Principais
Os componentes estão documentados no Storybook (npm run storybook):

TopBar: Barra superior com logotipo, nome do usuário e links de navegação.
BalanceCard: Exibe o saldo atual com opção de ocultar/exibir.
TransactionList: Lista as últimas transações com barra de rolagem vertical.
NewTransactionForm: Formulário para adicionar novas transações.
TransactionModal: Modal para adicionar ou editar transações.
DeleteConfirmationModal: Modal para confirmar a exclusão de transações.
Input, Button, Modal: Componentes genéricos de UI.

Desenvolvimento
Adicionar Novos Componentes

Crie o componente em src/components/, organizando-o em uma subpasta apropriada (ex.: src/components/ui/ para componentes genéricos).
Crie um arquivo .stories.tsx correspondente para documentar o componente no Storybook.
Importe e use o componente nas páginas ou outros componentes.

Estilização

O projeto usa Tailwind CSS para estilização. Adicione classes do Tailwind diretamente nos componentes.
Para estilos personalizados, crie arquivos .module.css (ex.: Login.module.css).

Testes Visuais

Use o Storybook (npm run storybook) para testar visualmente os componentes de forma isolada.
Adicione novas histórias para cada variação relevante do componente.
