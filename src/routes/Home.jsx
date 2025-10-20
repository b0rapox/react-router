import { useFetcher } from "react-router-dom";

// --- DADOS DA DASHBOARD (Mock Data) ---
const performanceData = [
    { module: 'UserAuth', latency: '25ms', errors: '0.01%', deploy: 'v3.1.2' },
    { module: 'PaymentGateway', latency: '85ms', errors: '0.15%', deploy: 'v2.0.5', urgent: true },
    { module: 'InventoryService', latency: '40ms', errors: '0.00%', deploy: 'v4.5.0' },
    { module: 'NotificationEngine', latency: '15ms', errors: '0.02%', deploy: 'v1.1.8' },
    { module: 'BillingEngine', latency: '30ms', errors: '0.00%', deploy: 'v1.0.0' },
];

const trendData = [
    { metric: 'Adoção de Microserviços', value: '95%', trend: 'Estável' },
    { metric: 'Cobertura de Testes Unitários', value: '78%', trend: 'Crescente (Risco Médio)' },
    { metric: 'Taxa de Rollbacks', value: '1.2%', trend: 'Decrescente' },
    { metric: 'Uso de Containerização', value: '100%', trend: 'Estável' },
];

const architecturalRecs = [
    'Migrar PaymentGateway para infraestrutura dedicada (isolamento de latência).',
    'Implementar Circuit Breaker no InventoryService para resiliência em falhas upstream.',
    'Padronizar Logs & Metrics na v2.0, focando em rastreabilidade de ponta a ponta (Tracing).',
    'Auditoria de Segurança: Focar em vulnerabilidades OWASP no UserAuth v3.1.2.',
];

const latestDeploys = [
    { env: 'Production', module: 'InventoryService', time: '2h atrás', status: 'OK' },
    { env: 'Staging', module: 'UserAuth', time: '12h atrás', status: 'OK' },
    { env: 'Production', module: 'BillingEngine', time: '1 dia atrás', status: 'Rollback' },
    { env: 'Dev', module: 'NotificationEngine', time: '1 dia atrás', status: 'OK' },
];

// --- ÍCONES (SVG Inline) ---
const TableIcon = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
    </svg>
);
const ChartIcon = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
    </svg>
);
const CubeIcon = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10m0-4l-8-4m8 4l8-4m-8 4L4 7m8 4l8-4m-8 4v10m-8-4v4"></path>
    </svg>
);
const SettingsIcon = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
);


// --- ESTILOS CSS PURO (INCLUÍDO INLINE PARA CUMPRIR RESTRIÇÃO DE ARQUIVO ÚNICO) ---
const pureCSS = `
    /* Variáveis */
    :root {
        --color-primary: #1f2937; /* Dark Gray */
        --color-secondary: #f3f4f6; /* Light Gray Background */
        --color-accent: #3b82f6; /* Blue */
        --color-text-light: #ffffff;
        --color-text-dark: #1f2937;
        --color-warning: #f59e0b;
        --color-error: #ef4444;
        --color-success: #10b981;
        --color-border: #e5e7eb;
        --font-family: 'Inter', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: var(--font-family);
        background-color: var(--color-secondary);
        color: var(--color-text-dark);
    }

    .app-wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    
    .home-container {
        flex-grow: 1;
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 1rem;
        width: 100%;
    }


    .nav-brand {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--color-accent);
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    /* Layout Principal (Grid) */
    .content-grid {
        display: grid;
        grid-template-columns: 1fr; /* 1 coluna em mobile */
        gap: 2rem;
        padding-bottom: 4rem;
    }

    /* Media Query para Desktop */
    @media (min-width: 1024px) {
        .content-grid {
            grid-template-columns: 3fr 1fr; /* 3/4 e 1/4 em desktop */
        }
    }

    /* Coluna Principal (Main Content) */
    .main-content h1 {
        font-size: 2.25rem;
        font-weight: 800;
        color: var(--color-primary);
        margin-top: 50px;
        margin-bottom: 0.5rem;
    }

    .main-content > p {
        font-size: 1.125rem;
        color: #4b5563;
        margin-bottom: 2rem;
        border-bottom: 2px solid var(--color-accent);
        padding-bottom: 1rem;
    }
    
    /* Blocos de Conteúdo e Tabelas */
    .data-table-container, .card-section {
        background-color: var(--color-text-light);
        border-radius: 8px;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        padding: 20px;
        margin-bottom: 2rem;
    }
    
    .data-table-container h2, .card-section h2 {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--color-primary);
        margin-top: 0;
        margin-bottom: 1.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--color-border);
    }
    
    .icon {
        width: 24px;
        height: 24px;
        margin-right: 10px;
        color: var(--color-accent);
    }

    .data-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        font-size: 0.95rem;
    }

    .data-table th, .data-table td {
        padding: 12px 15px;
        text-align: left;
    }
    
    .data-table th {
        background-color: #e5e7eb;
        color: var(--color-primary);
        font-weight: 700;
        border-bottom: 2px solid var(--color-border);
    }

    .data-table td {
        border-bottom: 1px solid var(--color-border);
    }

    .data-table tr:hover {
        background-color: #f9fafb;
    }

    .data-table tr:last-child td {
        border-bottom: none;
    }
    
    .high-latency {
        color: var(--color-error);
        font-weight: 600;
    }

    /* Lista de Recomendações (Architecture) */
    .rec-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    .rec-item {
        background-color: #fffbef;
        border-left: 4px solid var(--color-warning);
        padding: 15px;
        margin-bottom: 10px;
        border-radius: 4px;
        font-size: 1rem;
        color: #4b5563;
        line-height: 1.5;
        transition: background-color 0.2s;
    }

    .rec-item:hover {
        background-color: #fef3c7;
    }

    /* Grid de Tendências */
    .trend-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
    }

    .trend-card {
        background-color: var(--color-secondary);
        padding: 15px;
        border-radius: 6px;
        border: 1px solid var(--color-border);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    }

    .trend-metric {
        font-size: 0.875rem;
        color: #6b7280;
        margin-bottom: 0.25rem;
        display: block;
    }

    .trend-value {
        font-size: 1.75rem;
        font-weight: 800;
        color: var(--color-primary);
        line-height: 1.2;
    }

    .trend-status {
        font-size: 0.8rem;
        margin-top: 0.5rem;
        padding: 3px 8px;
        border-radius: 4px;
        display: inline-block;
        font-weight: 500;
    }

    .trend-status.stable { background-color: #dcfce7; color: var(--color-success); }
    .trend-status.growing { background-color: #fef3c7; color: var(--color-warning); }
    .trend-status.decreasing { background-color: #fee2e2; color: var(--color-error); }


    /* Coluna Lateral (Sidebar) */
    .sidebar {
        background-color: var(--color-text-light);
        border-radius: 8px;
        padding: 20px;
        margin-top: 50px;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        height: fit-content;
    }

    .sidebar h3 {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--color-primary);
        margin-top: 0;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid var(--color-border);
        padding-bottom: 0.5rem;
    }

    .sidebar-menu {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .sidebar-menu a, .deploy-item {
        display: flex;
        align-items: center;
        padding: 10px;
        background-color: var(--color-secondary);
        border-radius: 4px;
        color: var(--color-primary);
        text-decoration: none;
        font-weight: 500;
        transition: background-color 0.2s, box-shadow 0.2s;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    }

    .sidebar-menu a:hover {
        background-color: #e5e7eb;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .deploy-list {
        list-style: none;
        padding: 0;
        margin-top: 15px;
    }
    
    .deploy-item {
        justify-content: space-between;
        margin-bottom: 10px;
        font-size: 0.875rem;
    }
    
    .deploy-status.ok { color: var(--color-success); font-weight: 700; }
    .deploy-status.rollback { color: var(--color-error); font-weight: 700; }

    .status-box {
        margin-top: 30px;
        padding: 15px;
        border: 1px solid var(--color-border);
        border-radius: 6px;
        background-color: #f9fafb;
    }
    
    .status-box p {
        font-size: 0.9rem;
        margin: 0;
        color: #6b7280;
    }
    
    /* Novo Estilo para Rodapé */
    .footer {
        background-color: var(--color-primary);
        color: #9ca3af; /* Cinza claro */
        padding: 1.5rem 1rem;
        text-align: center;
        margin-top: auto;
        font-size: 0.875rem;
        border-top: 4px solid var(--color-accent);
    }
    .footer a {
        color: var(--color-accent);
        text-decoration: none;
        margin: 0 5px;
        transition: color 0.2s;
    }
    .footer a:hover {
        color: var(--color-text-light);
    }
`;



// --- COMPONENTE HOME/DASHBOARD (Contém a lógica principal do painel) ---
const HomeDashboard = () => {
    // Itens de menu da sidebar
    const menuItems = [
        { title: 'Relatórios Detalhados', url: '/reports' },
        { title: 'Configurações de Alerta', url: '/alert' },
        { title: 'Dados', url: '/loadrules' },
    ];

    // Função para obter a classe de status de tendência
    const getTrendClass = (trend) => {
        if (trend.includes('Estável')) return 'stable';
        if (trend.includes('Crescente')) return 'growing';
        if (trend.includes('Decrescente')) return 'decreasing';
        return '';
    };

    return (
        <>
            {/* 1. Navbar (apenas marca, sem links) */}

            <div className="home-container">
                
                {/* 2. Layout Principal com Grid (Main Content + Sidebar) */}
                <div className="content-grid">
                    
                    {/* Coluna Principal */}
                    <main className="main-content">
                        <h1>Visão Geral do Sistema (Q4/2024)</h1>
                        <p>
                            Como Engenheiro Sênior, esta dashboard foca na performance e estabilidade dos módulos críticos. 
                            Priorizamos a arquitetura que minimiza latência e maximiza a resiliência, seguindo as melhores práticas tradicionais de engenharia. **Dados atualizados em tempo real.**
                        </p>

                        {/* Bloco 1: Estabilidade dos Módulos Críticos */}
                        <div className="data-table-container">
                            <h2><TableIcon className="icon" /> Estabilidade dos Módulos Críticos</h2>
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Módulo</th>
                                        <th>Latência Média</th>
                                        <th>Taxa de Erros</th>
                                        <th>Deploy Atual</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {performanceData.map((data, index) => (
                                        <tr key={index}>
                                            <td>{data.module}</td>
                                            <td className={data.urgent ? 'high-latency' : ''}>
                                                {data.latency}
                                            </td>
                                            <td>{data.errors}</td>
                                            <td>{data.deploy}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p style={{fontSize: '0.85rem', color: '#6b7280', marginTop: '15px'}}>
                                *Latências acima de 50ms (como PaymentGateway) requerem investigação urgente. A resiliência está em risco.
                            </p>
                        </div>
                        
                        {/* Bloco 2: Análise de Tendências Arquiteturais (Novo) */}
                        <div className="card-section">
                            <h2><ChartIcon className="icon" /> Análise de Tendências Arquiteturais</h2>
                            <div className="trend-grid">
                                {trendData.map((item, index) => (
                                    <div key={index} className="trend-card">
                                        <span className="trend-metric">{item.metric}</span>
                                        <div className="trend-value">{item.value}</div>
                                        <span className={`trend-status ${getTrendClass(item.trend).toLowerCase()}`}>
                                            {item.trend}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <p style={{fontSize: '0.85rem', color: '#6b7280', marginTop: '15px'}}>
                                *A Cobertura de Testes deve atingir 90% para mitigar riscos de regressão em refatorações.
                            </p>
                        </div>

                        {/* Bloco 3: Recomendações e Plano de Ação (Novo) */}
                        <div className="card-section">
                            <h2><CubeIcon className="icon" /> Recomendações Arquiteturais Urgentes</h2>
                            <ul className="rec-list">
                                {architecturalRecs.map((rec, index) => (
                                    <li key={index} className="rec-item">
                                        {rec}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </main>

                    {/* Coluna Lateral (Sidebar) */}
                    <aside className="sidebar">
                        <h3>Ações Rápidas</h3>
                        <div className="sidebar-menu">
                            {menuItems.map((item, index) => (
                                <a key={index} href={item.url}>
                                    {item.title.includes('Configurações') ? <SettingsIcon className="icon" /> : <ChartIcon className="icon" />}
                                    {item.title}
                                </a>
                            ))}
                        </div>
                        
                        <div className="status-box">
                            <p>
                                **Status:** Todos os serviços críticos rodando em conformidade.
                                <br/>**Exceção:** PaymentGateway em alerta L2 devido a picos de latência (85ms).
                            </p>
                        </div>

                        <h3 style={{marginTop: '30px'}}>Últimos Deploys</h3>
                        <ul className="deploy-list">
                            {latestDeploys.map((deploy, index) => (
                                <li key={index} className="deploy-item">
                                    <span>{deploy.module} ({deploy.env})</span>
                                    <span>
                                        <span className={`deploy-status ${deploy.status.toLowerCase()}`}>
                                            {deploy.status}
                                        </span>
                                        {' - '}
                                        {deploy.time}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>
            </div>
        </>
    );
};

// --- COMPONENTE PRINCIPAL (APP) ---
const App = () => {
    return (
        <div className="app-wrapper">
            {/* Injeção dos estilos CSS puros (Necessário para a plataforma) */}
            <style dangerouslySetInnerHTML={{ __html: pureCSS }} />
            
            {/* Renderiza o conteúdo principal e o rodapé */}
            <HomeDashboard />
        </div>
    );
};

export default App;
