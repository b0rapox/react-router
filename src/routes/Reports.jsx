import React from 'react';

// --- ÍCONES SVG ---

// Icone de Relatório/Documento
const DocumentIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path fill="currentColor" d="M0 48C0 21.5 21.5 0 48 0h288c26.5 0 48 21.5 48 48v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48zM240 128h80V96H240v32zm0 64h80V160H240v32zm0 64h80V224H240v32zM48 288h288v32H48v-32zm0 64h288v32H48v-32zm0 64h288v32H48v-32zM48 96h160v32H48V96zm0 64h160v32H48v-32zm0 64h160v32H48v-32z"/>
    </svg>
);

// Icone de Desempenho (Gráfico de Linhas)
const ChartLineIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M64 424.3C77.4 433.2 88.6 441.7 96 448c12.2 10.3 27 15.6 48 16c27.5 .5 47.9-10.2 67.8-31.9c.7-.7 1.4-1.4 2.2-2.1L304 336l32 32c5.4 5.4 12.5 8.1 19.6 8.1s14.2-2.7 19.6-8.1l80-80c10.4-10.4 10.4-27.2 0-37.6s-27.2-10.4-37.6 0L371.3 288 320 236.7 288 204.7c-5.4-5.4-12.5-8.1-19.6-8.1s-14.2 2.7-19.6 8.1l-64 64-16-16c-10.4-10.4-27.2-10.4-37.6 0s-10.4 27.2 0 37.6L188 320l-42 42c-15.6 15.6-38.3 24.3-64 24c-20.5-.3-35.3-6.9-49.8-19.6L0 416V96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H64z"/>
    </svg>
);

// Icone de Configurações/Auditoria
const SettingsIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M495.9 166.4C499.7 167.3 503.5 174.1 503.5 178.6V333.4C503.5 337.9 499.7 344.7 495.9 345.6L448.3 356.5C446.5 356.9 444.7 357.2 443 357.5L437.2 369C433.9 375.3 430.4 380.9 426.6 385.9L403.6 414.9C400.3 419.2 396.9 423.5 393.3 427.7L385.6 443C382.9 448.2 379.7 452.9 376.1 457.1L365.2 504.7C364.3 508.5 357.5 512.3 353 512.3H158.5C154 512.3 147.2 508.5 146.3 504.7L135.4 457.1C131.8 452.9 128.6 448.2 125.9 443L118.2 427.7C114.6 423.5 111.2 419.2 107.9 414.9L84.9 385.9C81.1 380.9 77.6 375.3 74.3 369L68.5 357.5C66.8 357.2 65 356.9 63.2 356.5L15.6 345.6C11.8 344.7 8 337.9 8 333.4V178.6C8 174.1 11.8 167.3 15.6 166.4L63.2 155.5C65 155.1 66.8 154.8 68.5 154.5L74.3 143C77.6 136.7 81.1 131.1 84.9 126.1L107.9 97.1C111.2 92.8 114.6 88.5 118.2 84.3L125.9 69C128.6 63.8 131.8 59.1 135.4 54.9L146.3 7.3C147.2 3.5 154 0 158.5 0H353C357.5 0 364.3 3.5 365.2 7.3L376.1 54.9C379.7 59.1 382.9 63.8 385.6 69L393.3 84.3C396.9 88.5 400.3 92.8 403.6 97.1L426.6 126.1C430.4 131.1 433.9 136.7 437.2 143L443 154.5C444.7 154.8 446.5 155.1 448.3 155.5L495.9 166.4zM256 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/>
    </svg>
);

// Icone de Gestão/Pessoa
const UserGroupIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        <path fill="currentColor" d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm-48 96H448V416h-48v48H96v-48H48V144zM240 416h16v48h-16v-48zM304 416h16v48h-16v-48zm-192 0h16v48H112v-48zM592 144a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zM448 272a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM192 272a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM576 496a48 48 0 1 1 0-96 48 48 0 1 1 0 96z"/>
    </svg>
);

// --- DADOS MOCKADOS DE RELATÓRIOS ---
const reportCategories = [
    {
        title: 'Arquitetura e Código',
        icon: DocumentIcon,
        description: 'Documentos e auditorias de alto nível sobre a estrutura do sistema.',
        reports: [
            { name: 'Análise de Débito Técnico (Q3/2024)', url: '#debt-analysis' },
            { name: 'Roadmap de Migração para Serverless', url: '#serverless-roadmap' },
            { name: 'Relatório de Complexidade Ciclomática (v2.1)', url: '#cyclomatic-complexity' },
            { name: 'Padrões de Design Aplicados e Desvios', url: '#design-patterns' },
        ]
    },
    {
        title: 'Performance e Resiliência',
        icon: ChartLineIcon,
        description: 'Métricas de desempenho, latência e saúde dos serviços em tempo real.',
        reports: [
            { name: 'Latência P95/P99 por Módulo (Últimas 24h)', url: '#p99-latency' },
            { name: 'Análise de Erros 5xx e Retries (Mensal)', url: '#5xx-errors' },
            { name: 'Relatório de Custo-Efetividade de I/O', url: '#io-cost' },
            { name: 'Saturação de Recursos Críticos (CPU/Memory)', url: '#saturation' },
        ]
    },
    {
        title: 'Segurança e Compliance',
        icon: SettingsIcon,
        description: 'Resultados de auditorias de segurança e conformidade regulatória.',
        reports: [
            { name: 'Auditoria OWASP Top 10 (Penetration Test)', url: '#owasp-audit' },
            { name: 'Log de Acesso de Dados Sensíveis (GDPR)', url: '#gdpr-log' },
            { name: 'Relatório de Configuração de Firewalls e WAFs', url: '#waf-config' },
            { name: 'Rastreamento de Vulnerabilidades Críticas (CVE)', url: '#cve-tracking' },
        ]
    },
    {
        title: 'Gestão e Pessoas',
        icon: UserGroupIcon,
        description: 'Relatórios sobre a saúde do time, produtividade e alocação de recursos.',
        reports: [
            { name: 'Produtividade de Pull Requests (Tempo Médio de Merge)', url: '#pr-productivity' },
            { name: 'Alocação de Recursos por Projeto (T3)', url: '#resource-allocation' },
            { name: 'Relatório de Onboarding e Treinamento de Engenheiros', url: '#onboarding-report' },
            { name: 'KPIs de Entrega e Prazo (Último Sprint)', url: '#delivery-kpis' },
        ]
    },
];

// --- COMPONENTE PRINCIPAL: REPORTS ---
const Reports = () => {
    return (
        <div className="reports-wrapper">
            {/* CSS embutido para estilo e responsividade */}
            <style jsx global>{`
                /* Cores e Tipografia */
                :root {
                    --color-primary: #1e40af; /* Dark Blue */
                    --color-secondary: #e0f2fe; /* Light Blue Background */
                    --color-text-dark: #1f2937;
                    --color-text-medium: #4b5563;
                    --color-bg-light: #ffffff;
                    --color-border: #e5e7eb;
                }
                
                .reports-wrapper {
                    font-family: 'Inter', sans-serif;
                    background-color: #f9fafb; /* Lighter background */
                    padding: 2rem;
                    min-height: 100vh;
                }

                /* Título e Subtítulo */
                .reports-header {
                    margin-bottom: 2rem;
                    border-bottom: 2px solid var(--color-border);
                    padding-bottom: 1rem;
                }
                
                .reports-header h1 {
                    font-size: 2.25rem;
                    font-weight: 700;
                    color: var(--color-text-dark);
                    margin: 0;
                }

                .reports-header p {
                    font-size: 1rem;
                    color: var(--color-text-medium);
                    margin-top: 0.5rem;
                }

                /* Grid de Categorias */
                .reports-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 1.5rem;
                }

                /* Card de Categoria */
                .category-card {
                    background-color: var(--color-bg-light);
                    border: 1px solid var(--color-border);
                    border-radius: 0.5rem;
                    padding: 1.5rem;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.03);
                    transition: transform 0.2s, box-shadow 0.2s;
                }

                .category-card:hover {
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
                    transform: translateY(-2px);
                }

                .category-header {
                    display: flex;
                    align-items: center;
                    margin-bottom: 1rem;
                    padding-bottom: 0.5rem;
                    border-bottom: 1px solid var(--color-border);
                }

                .category-header .icon {
                    width: 32px;
                    height: 32px;
                    color: var(--color-primary);
                    margin-right: 0.75rem;
                }

                .category-header h2 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: var(--color-text-dark);
                    margin: 0;
                }
                
                .category-description {
                    font-size: 0.9rem;
                    color: var(--color-text-medium);
                    margin-bottom: 1rem;
                }

                /* Lista de Links de Relatórios */
                .reports-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .reports-list li {
                    margin-bottom: 0.5rem;
                }

                .reports-list a {
                    display: block;
                    padding: 0.5rem 0.75rem;
                    background-color: var(--color-secondary);
                    color: var(--color-text-dark);
                    text-decoration: none;
                    border-radius: 0.375rem;
                    font-size: 0.9rem;
                    transition: background-color 0.15s, color 0.15s;
                    border-left: 3px solid var(--color-primary); /* Barra de destaque */
                }

                .reports-list a:hover {
                    background-color: #dbeafe; /* Slightly darker secondary color */
                    color: var(--color-primary);
                    text-decoration: underline;
                }

                /* Responsividade */
                @media (max-width: 640px) {
                    .reports-wrapper {
                        padding: 1rem;
                    }
                    .reports-header h1 {
                        font-size: 1.75rem;
                    }
                    .reports-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
            
            <header className="reports-header">
                <h1>Centro de Relatórios Analíticos</h1>
                <p>Acesso a todos os relatórios gerenciais e técnicos da Engenharia de Sistemas. Foco em estabilidade, compliance e métricas de alto impacto.</p>
            </header>

            <div className="reports-grid">
                {reportCategories.map((category, index) => (
                    <div key={index} className="category-card">
                        <div className="category-header">
                            <category.icon className="icon" />
                            <h2>{category.title}</h2>
                        </div>
                        <p className="category-description">{category.description}</p>
                        <ul className="reports-list">
                            {category.reports.map((report, rIndex) => (
                                <li key={rIndex}>
                                    <a href={report.url} onClick={(e) => e.preventDefault()}>
                                        {report.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            
            <footer style={{ marginTop: '3rem', textAlign: 'center', fontSize: '0.85rem', color: '#9ca3af' }}>
                <p>Última atualização de dados do sistema: 2024-10-20 (Fictício)</p>
            </footer>
        </div>
    );
};

export default Reports;
