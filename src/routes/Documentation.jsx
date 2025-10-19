import React from 'react';

// ----------------------------------------------------
// COMPONENTE: DOCUMENTATIONPAGE (Conteúdo puro)
// ----------------------------------------------------
const DocumentationPage = () => {
  return (
    <>
      {/* CSS Mínimo para garantir o estilo do conteúdo */}
      <style>{`
        /* Estilos Globais Mínimos */
        :root {
            --color-white: #ffffff;
            --color-gray-800: #1f2937; /* Para títulos */
            --color-sky-700: #0369a1; /* Para acentuação de links/tópicos */
            --color-gray-300: #d1d5db; /* Para divisores */
        }
        
        body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', sans-serif;
            background-color: #f3f4f6; /* Fundo levemente cinza */
        }

        /* Container que simula a área de conteúdo (onde o Outlet estaria) */
        .content-container {
            padding: 20px 40px;
            padding-top: 20px;
            max-width: 1200px;
            margin: 0 auto;
        }

        /* Estilo do Card/Página de Conteúdo */
        .content-page {
            background-color: var(--color-white);
            padding: 3rem; /* Aumenta o padding para um visual mais limpo */
            border-radius: 8px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            min-height: 700px;
            margin-top: 20px;
        }

        /* Estilos de Tipografia e Títulos */
        .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
        .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
        .text-2xl { font-size: 1.5rem; line-height: 2rem; color: var(--color-sky-700); border-bottom: 2px solid var(--color-gray-300); padding-bottom: 0.5rem; margin-top: 2rem; margin-bottom: 1rem; }
        .text-xl { font-size: 1.25rem; line-height: 1.75rem; color: var(--color-gray-800); margin-top: 1.5rem; margin-bottom: 0.75rem; }
        .font-extrabold { font-weight: 800; color: var(--color-gray-800); }
        .font-bold { font-weight: 700; }
        .mb-4 { margin-bottom: 1rem; }
        .mt-4 { margin-top: 1rem; }
        .mt-8 { margin-top: 2rem; }
        .text-gray-700 { color: #4b5563; line-height: 1.6; }
        
        /* Estilos para Listas */
        .doc-list {
            list-style: disc;
            margin-left: 1.5rem;
            margin-top: 1rem;
            color: var(--color-gray-700);
        }
        
        .doc-list li {
            margin-bottom: 0.5rem;
        }

        /* Destaque para sub-tópicos */
        .doc-section-link {
            display: block;
            margin-left: 1rem;
            margin-bottom: 0.5rem;
            color: var(--color-sky-700);
            text-decoration: none;
            font-weight: 500;
        }
        
        .doc-section-link:hover {
            text-decoration: underline;
        }


        /* Responsividade */
        @media (max-width: 768px) {
            .content-container {
                padding: 15px;
            }
            .content-page {
                padding: 1.5rem;
            }
            .text-4xl { font-size: 1.75rem; }
        }
      `}</style>
      
      {/* Conteúdo que será renderizado */}
      <div className="content-container">
        <div className="content-page documentation-page">
          <h1 className="text-4xl font-extrabold mb-4">Manual Técnico de Referência</h1>
          <p className="text-gray-700">
            **Senior Dev Platform v4.1.0** | Data de Revisão: 2025-10-18 | Código de Conformidade: SD-TR-25-10
          </p>

          <h2 className="text-2xl mt-8">1. Visão Geral e Arquitetura do Sistema</h2>
          <p className="text-gray-700">
            Este manual serve como a referência oficial para o ecossistema de Desenvolvimento Sênior, detalhando a arquitetura, os requisitos de certificação e os padrões de codificação essenciais. A aderência a estes princípios é mandatória para todos os Engenheiros de Software Sêniores.
          </p>
          
          <h3 className="text-xl">1.1. Princípios de Design Imutável</h3>
          <p className="text-gray-700">
            Priorizamos a imutabilidade em nossos componentes críticos de estado. Qualquer modificação no estado principal deve seguir o padrão Command-Query Separation (CQS) e ser auditável via log de eventos.
          </p>

          <h2 className="text-2xl">2. Certificações Oficiais (SD-CERT)</h2>
          <p className="text-gray-700">
            As certificações são a espinha dorsal da nossa progressão de carreira. Elas atestam a proficiência técnica e o alinhamento com a nossa visão tradicional de engenharia robusta.
          </p>
          
          <h3 className="text-xl">2.1. Níveis de Certificação</h3>
          <ul className="doc-list">
            <li>**SD-L3 (Especialista em Domínio):** Foco em performance de banco de dados (SQL Otimizado, NoSQL Particionado) e latência zero.</li>
            <li>**SD-L4 (Arquiteto de Solução):** Requer proficiência em design de microserviços e padrões de resiliência (Circuit Breakers, Bulkheads).</li>
            <li>**SD-L5 (Fellow Engineer):** Nível mais alto. Requer patentes de código ou contribuição significativa para o kernel da plataforma.</li>
          </ul>

          <h3 className="text-xl">2.2. Requisitos Mandatórios</h3>
          <p className="text-gray-700">
            Para iniciar o processo de certificação L4, o engenheiro deve demonstrar um conhecimento aprofundado em pelo menos três das quatro áreas centrais: Algoritmos Clássicos, Sistemas Distribuídos, Teoria de Grafos e Segurança Preditiva.
          </p>

          <h2 className="text-2xl">3. Padrões de Codificação (SD-CODE)</h2>
          <p className="text-gray-700">
            Nosso foco está na manutenibilidade e na clareza. O código deve ser auto-documentado.
          </p>
          
          <h3 className="text-xl">3.1. Convenção de Nomenclatura</h3>
          <ul className="doc-list">
            <li>Interfaces: Prefixo `I` (Ex: `IRepository`).</li>
            <li>Funções Assíncronas: Sufixo `Async`.</li>
            <li>Constantes Globais: `UPPER_SNAKE_CASE` (Visão tradicional).</li>
          </ul>
          
          <h3 className="text-xl">3.2. Estrutura de Módulos</h3>
          <p className="text-gray-700">
            Cada módulo de domínio deve conter obrigatoriamente três camadas: `Controle de Acesso`, `Lógica de Negócios` e `Persistência de Dados`. A comunicação entre módulos é estritamente via API Gateway.
          </p>
          
        </div>
      </div>
    </>
  );
};

export default DocumentationPage;
