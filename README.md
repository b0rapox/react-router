## 💻 SeniorDev: Content and Navigation System

Este projeto é um framework React minimalista, focado na orquestração de páginas de alto valor (como Documentação, Certificações e Contato) utilizando o princípio de Single-File Component para o ambiente de Canvas. A arquitetura de navegação simula um sistema de rotas robusto através do React Router.

## 🏗️ Arquitetura e Elementos Chave

O projeto é estruturado em torno de um componente principal que gerencia o layout e a navegação, seguido por componentes de conteúdo isolados, garantindo a separação de preocupações (SPA clássica).

# 1. Componentes de Rota (Páginas)

Os seguintes componentes representam as rotas de conteúdo da aplicação. Todos são projetados como Standalone Components (todo o React/CSS/Lógica em um único arquivo, conforme o mandate da plataforma):

Componente

Foco Principal

Estilo / Propósito

DocumentationPage

Referência Técnica

Conteúdo elaborado e formal, simulando documentação oficial de sistemas.

# Projects

Portfólio de Engenharia

Galeria de cards visualmente impactante, destacando a complexidade e o impacto técnico dos projetos.

Certifications

Proficiência Sênior

Cards detalhados de certificações, utilizando ícones para transmitir autoridade e mérito.

Contact

Solicitação Direta

Formulário profissional e limpo, focado em receber propostas de alto nível (Engenharia Sênior).

# 2. Navegação com React Router DOM

Para gerenciar a navegação de forma eficiente e aderente aos padrões de mercado, utilizamos o react-router-dom (ou sua simulação via estado/contexto neste ambiente).

Elemento

Utilização

Princípio de Engenharia

BrowserRouter

Componente root (configuração de histórico).

Integridade de URL: Garante URLs limpas e histórico de navegação funcional.

Routes / Route

Mapeamento das URLs (/docs, /projects, etc.) para os Componentes de Rota.

Separação de Preocupações: Desacopla a definição do caminho da lógica de renderização.

NavBar

Componente de layout (Header).

Consistência Visual: Mantém a barra de pesquisa e links de navegação estáticos, enquanto o conteúdo muda.

Outlet

Componente presente no layout (e.g., App.jsx)

Layout Padrão (Wrapper): Renderiza o componente da rota ativa dentro do template principal (abaixo do NavBar).

## 🛠️ Instalação e Execução

Este projeto utiliza uma toolchain moderna (Vite, HMR, etc.). O setup é mínimo, seguindo a tradição de manter a complexidade na infraestrutura e a simplicidade no código de aplicação.

Clone o repositório:

git clone [SEU_REPO_AQUI]


Instale as dependências:

npm install
# Dependências essenciais: react, react-dom, react-router-dom


Execute em modo de desenvolvimento:

npm run dev


⚠️ Nota: A ausência de arquivos CSS externos (como ../styles/Contact.css) é uma decisão de design forçada pelo ambiente de Single-File Mandate. Todo o estilo é CSS-in-JS (via <style> tag ou styled-components/equivalente) para garantir a portabilidade e a execução imediata.
