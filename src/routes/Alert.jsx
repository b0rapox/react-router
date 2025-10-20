import React, { useState } from 'react';

// --- ÍCONES SVG (Para uma estética limpa e leve) ---

// Ícone de Sino (Alerta)
const BellIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path fill="currentColor" d="M224 0c-17.7 0-32 14.3-32 32V48H32C14.3 48 0 62.3 0 80v200c0 17.7 14.3 32 32 32H64v64c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32v-64h32c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32H256V32c0-17.7-14.3-32-32-32zm-64 48H32V80h128V48zm192 320c0 8.8-7.2 16-16 16H128c-8.8 0-16-7.2-16-16v-64H336v64zm32-128H256v-32h-64v32H96V112h256v176z"/>
    </svg>
);

// Ícone de Monitor (Controle)
const MonitorIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        <path fill="currentColor" d="M96 224a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zM552.1 46.2l-34.4 17.2c-5.7 2.9-12.7 2.9-18.4 0l-34.4-17.2c-15.6-7.8-33.1 8.3-24.8 24.5c.3 .7 .7 1.3 1.1 2l.1 .1c10.4 16.5 24.3 30.4 40.8 40.8l.1 .1c.7 .4 1.3 .7 2 1.1c16.2 8.3 32.3-9.2 24.5-24.8zM448 352a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm-160 32h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32s14.3-32 32-32zM640 160c0-35.3-28.7-64-64-64H384c-11.8 0-23.3 2.6-34 7.2l-17.2 8.6c-18 9-39.7 9-57.7 0l-17.2-8.6c-10.7-4.6-22.2-7.2-34-7.2H64c-35.3 0-64 28.7-64 64V352c0 35.3 28.7 64 64 64H224v16c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32v-16H576c35.3 0 64-28.7 64-64V160zM576 352H64V160H576V352z"/>
    </svg>
);

// --- DADOS MOCKADOS INICIAIS ---
const initialAlertRules = [
    { id: 1, metric: 'Latência P99 (ms)', threshold: 500, status: 'Ativo', priority: 'Crítica', channel: 'Slack' },
    { id: 2, metric: 'Taxa de Erro 5xx (%)', threshold: 1.0, status: 'Ativo', priority: 'Alta', channel: 'PagerDuty' },
    { id: 3, metric: 'Uso de CPU do Serviço X', threshold: 85, status: 'Pausado', priority: 'Média', channel: 'Email' },
    { id: 4, metric: 'Espaço Livre em Disco (%)', threshold: 10, status: 'Ativo', priority: 'Crítica', channel: 'Slack' },
];

// --- COMPONENTE PRINCIPAL: ALERT ---
const Alert = () => {
    // 1. Estados da Aplicação
    const [rules, setRules] = useState(initialAlertRules);
    const [newRule, setNewRule] = useState({ 
        metric: '', 
        threshold: 0, 
        priority: 'Média', 
        channel: 'Email', 
        status: 'Ativo' 
    });

    // 2. Manipuladores de Estado
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setNewRule(prev => ({ 
            ...prev, 
            [id]: id === 'threshold' ? (parseFloat(value) || 0) : value 
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (newRule.metric.trim() && newRule.threshold >= 0) {
            const ruleToAdd = {
                ...newRule,
                id: Date.now(), 
                status: 'Ativo' 
            };
            
            console.log(`[PERSISTÊNCIA] Salvando nova regra: ${ruleToAdd.metric} | Threshold: ${ruleToAdd.threshold}`);
            
            setRules(prev => [...prev, ruleToAdd]);
            setNewRule({ metric: '', threshold: 0, priority: 'Média', channel: 'Email', status: 'Ativo' });
        }
    };

    // Alterna o status da regra (Ativo/Pausado)
    const toggleStatus = (id) => {
        setRules(rules.map(rule =>
            rule.id === id ? { ...rule, status: rule.status === 'Ativo' ? 'Pausado' : 'Ativo' } : rule
        ));
    };


    // 3. Funções de Estilo Condicional
    // As classes de cor ainda usam o padrão Tailwind Básico para manter a legibilidade,
    // mas são definidas diretamente dentro do CSS principal.
    const getPriorityClass = (priority) => {
        switch (priority) {
            case 'Crítica': return 'tag-critical';
            case 'Alta': return 'tag-high';
            case 'Média': return 'tag-medium';
            default: return 'tag-default';
        }
    };

    const getStatusClass = (status) => {
        return status === 'Ativo' 
            ? 'tag-active' 
            : 'tag-paused';
    };


    return (
        <div className="alert-wrapper">
            
            {/* --- ESTILOS CSS PURO (Refatorado sem Tailwind) --- */}
            <style jsx global>{`
                /* Definição de Variáveis (Essencial para CSS moderno) */
                :root {
                    --color-primary: #3b82f6; /* Azul 500 */
                    --color-secondary: #1d4ed8; /* Azul 700 */
                    --color-text-dark: #1f2937; /* Cinza Escuro */
                    --color-text-light: #4b5563; /* Cinza Médio */
                    --color-bg-light: #ffffff;
                    --color-bg-page: #f4f6f8;
                    --color-border: #e5e7eb;
                }
                
                .alert-wrapper {
                    font-family: 'Inter', sans-serif;
                    background-color: var(--color-bg-page);
                    padding: 2rem;
                    min-height: 100vh;
                }

                /* CABEÇALHO PRINCIPAL */
                .alert-header {
                    margin-bottom: 2rem;
                    display: flex;
                    align-items: center; 
                    border-left: 5px solid var(--color-primary);
                    padding-left: 1rem;
                }
                
                /* ESTILO DO ÍCONE CORRIGIDO */
                .alert-header .icon-title {
                    width: 32px; /* 8 no Tailwind */
                    height: 32px; /* 8 no Tailwind */
                    color: var(--color-primary);
                    margin-right: 1rem; 
                    flex-shrink: 0; /* Garante que o ícone não encolha */
                }
                
                .alert-header h1 {
                    font-size: 2rem;
                    font-weight: 700;
                    color: var(--color-text-dark);
                    margin: 0;
                }

                /* SEÇÃO PADRÃO (CARD) */
                .alert-section {
                    background-color: var(--color-bg-light);
                    border: 1px solid var(--color-border);
                    border-radius: 0.5rem;
                    padding: 2rem;
                    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
                    margin-bottom: 2rem;
                }
                
                /* Subtítulo da Seção (h2) */
                .alert-section h2 {
                    font-size: 1.25rem; /* text-xl */
                    font-weight: 600; /* font-semibold */
                    margin-bottom: 1.5rem; /* mb-6 */
                    color: #1f2937; /* text-gray-800 */
                    display: flex; /* flex */
                    align-items: center; /* items-center */
                }

                /* Ícone dentro do H2 */
                .alert-section h2 svg {
                    width: 1.25rem; /* w-5 */
                    height: 1.25rem; /* h-5 */
                    margin-right: 0.5rem; /* mr-2 */
                    color: #4b5563; /* text-gray-600 */
                }

                /* FORMULÁRIO */
                .form-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 1.5rem;
                }

                .form-group label {
                    display: block;
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: var(--color-text-dark);
                    margin-bottom: 0.4rem;
                }
                
                .form-group input, .form-group select {
                    width: 100%;
                    padding: 0.75rem;
                    border: 1px solid var(--color-border);
                    border-radius: 0.375rem;
                    box-shadow: inset 0 1px 1px rgba(0,0,0,0.03);
                    transition: border-color 0.15s;
                    font-size: 0.95rem;
                }
                
                .form-group input:focus, .form-group select:focus {
                    border-color: var(--color-primary);
                    outline: none;
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
                }

                /* BOTÃO DE SUBMISSÃO */
                .submit-button {
                    background-color: var(--color-secondary);
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border: none;
                    border-radius: 0.375rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background-color 0.2s, box-shadow 0.2s;
                    display: inline-flex;
                    align-items: center;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }

                .submit-button:hover {
                    background-color: #1e3a8a; 
                    box-shadow: 0 4px 6px rgba(0,0,0,0.15);
                }

                .submit-button .icon {
                    width: 20px;
                    height: 20px;
                    margin-right: 0.75rem;
                }

                /* TABELA DE REGRAS */
                .alert-table {
                    width: 100%;
                    border-collapse: separate;
                    border-spacing: 0 0.5rem; 
                }

                .alert-table th {
                    text-align: left;
                    padding: 0.75rem 1rem;
                    font-size: 0.85rem;
                    color: #6b7280;
                    text-transform: uppercase;
                    background-color: #f9fafb;
                }

                .alert-table td {
                    text-align: left;
                    padding: 1rem;
                    background-color: var(--color-bg-light);
                    font-size: 0.95rem;
                    color: var(--color-text-dark);
                    border-top: 1px solid var(--color-border);
                    border-bottom: 1px solid var(--color-border);
                }
                
                .alert-table tr:first-child td {
                    border-top: none;
                }

                .alert-table td:first-child { border-left: 1px solid var(--color-border); border-top-left-radius: 0.375rem; border-bottom-left-radius: 0.375rem; }
                .alert-table td:last-child { border-right: 1px solid var(--color-border); border-top-right-radius: 0.375rem; border-bottom-right-radius: 0.375rem; }
                
                /* TAGS DE ESTADO E PRIORIDADE (Substituindo classes Tailwind) */
                .status-tag {
                    display: inline-block;
                    padding: 0.3rem 0.75rem;
                    border-radius: 9999px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    border: 1px solid;
                }

                /* Prioridades */
                .tag-critical { background-color: #fee2e2; color: #b91c1c; border-color: #fca5a5; } /* red */
                .tag-high { background-color: #fffbeb; color: #a16207; border-color: #fde68a; } /* yellow/amber */
                .tag-medium { background-color: #eff6ff; color: #1e40af; border-color: #bfdbfe; } /* blue */
                .tag-default { background-color: #f3f4f6; color: #4b5563; border-color: #d1d5db; } /* gray */

                /* Status Operacional */
                .tag-active { background-color: #dcfce7; color: #15803d; border-color: #a7f3d0; } /* green */
                .tag-paused { background-color: #f3f4f6; color: #4b5563; border-color: #d1d5db; } /* gray */

                /* BOTÃO DE AÇÃO */
                .action-button {
                    background: none;
                    border: 1px solid #d1d5db;
                    color: #4b5563;
                    font-weight: 600;
                    padding: 0.5rem 1rem;
                    border-radius: 0.375rem;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .action-button:hover {
                    background-color: #f3f4f6;
                    border-color: #9ca3af;
                    color: #1f2937;
                }

                /* RESPONSIVIDADE (MEDIA QUERY) */
                @media (max-width: 768px) {
                    .alert-wrapper { padding: 1rem; }
                    .alert-header h1 { font-size: 1.5rem; }
                    
                    /* Tabela Responsiva */
                    .alert-table { border-spacing: 0; }
                    .alert-table thead { display: none; }
                    .alert-table tr {
                        margin-bottom: 1rem;
                        display: block;
                        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                        border: none;
                        border-radius: 0.5rem;
                    }
                    .alert-table td {
                        display: block;
                        width: 100%;
                        text-align: right;
                        padding-left: 50%;
                        position: relative;
                        border: none;
                        border-radius: 0;
                        border-bottom: 1px dotted var(--color-border);
                    }
                    .alert-table td:first-child { border-left: none; border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem;}
                    .alert-table td:last-child { border-right: none; border-bottom: none; border-bottom-left-radius: 0.5rem; border-bottom-right-radius: 0.5rem;}
                    .alert-table td::before {
                        content: attr(data-label);
                        position: absolute;
                        left: 0;
                        width: 50%;
                        padding-left: 1rem;
                        font-weight: 600;
                        text-align: left;
                        color: #4b5563;
                        text-transform: uppercase;
                        font-size: 0.75rem;
                    }
                }
            `}</style>

            <div className="alert-header">
                {/* Aplicando a classe CSS pura 'icon-title' para dimensionamento (32x32px) */}
                <BellIcon className="icon-title" /> 
                <h1>Gerenciamento Centralizado de Regras Críticas</h1>
            </div>

            {/* Seção 1: Definição da Regra */}
            <div className="alert-section">
                <h2>
                    <MonitorIcon />
                    Definir Nova Regra de Estabilidade (SLA)
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="metric">Métrica Monitorada (Critério de Disparo)</label>
                            <input
                                type="text"
                                id="metric"
                                value={newRule.metric}
                                onChange={handleInputChange}
                                placeholder="Ex: Latência P95 > 250ms"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="threshold">Valor Limite (Threshold)</label>
                            <input
                                type="number"
                                id="threshold"
                                value={newRule.threshold}
                                onChange={handleInputChange}
                                placeholder="100 (unidade da métrica)"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="priority">Prioridade de Alerta</label>
                            <select
                                id="priority"
                                value={newRule.priority}
                                onChange={handleInputChange}
                            >
                                <option value="Crítica">1 - Crítica (Intervenção Imediata)</option>
                                <option value="Alta">2 - Alta (Atenção Urgente)</option>
                                <option value="Média">3 - Média (Monitoramento)</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="channel">Canal de Notificação (Essencial)</label>
                            <select
                                id="channel"
                                value={newRule.channel}
                                onChange={handleInputChange}
                            >
                                <option value="Email">Email (Equipe Secundária)</option>
                                <option value="Slack">Slack (Canal do Time)</option>
                                <option value="PagerDuty">PagerDuty (Equipe de Plantão)</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="submit-button">
                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M386.3 3.6c-48.4-15.1-98.3 12.5-120.3 58.7c-22.3 46.5-15.3 102.5 13 141.4l11.4 15.3-25.2 3.6-11.4-15.3c-24.5-32.7-33.8-77.9-28.7-124.6c5.2-47.5-22.1-91.1-66.4-106.3c-4.4-1.5-8.8-2.6-13.3-3.4c-4.1-39.7-37.3-70.1-77.5-70.1c-43.9 0-79.6 35.7-79.6 79.6s35.7 79.6 79.6 79.6c.1 0 .2 0 .4 0c-.5 4.7-1 9.4-1 14.2c0 30 11.2 57.6 29.8 79.8l21.4 25.4c-1.3 2.1-2.5 4.3-3.8 6.4L114.7 348.6c-17.6 27.9-22.7 62.4-16.1 94.6c6.6 32.3 28.5 60.1 58.6 75.3c30.2 15.2 65.6 15.2 95.8 0c30.2-15.2 52.1-43 58.7-75.3c.7-3.4 1.2-6.9 1.5-10.4c1.1-.3 2.2-.6 3.3-1c31.1-11.5 54.1-38.6 57.7-70.3c3.5-31.7-8.3-63.5-31.3-88.8L347 185c-28.3-31.6-43.7-70.5-43.7-111c0-26.6 5.8-52.1 16.5-75.1c-16.7-1.4-33.5-.8-49.8 1.4z"/></svg>
                        Deployar Regra e Monitoramento
                    </button>
                </form>
            </div>

            {/* Seção 2: Tabela de Regras Ativas */}
            <div className="alert-section">
                <h2 className='table-title'>Status Atual e Controle de Regras (SRE View)</h2>
                
                <table className="alert-table">
                    <thead>
                        <tr>
                            <th>Métrica Monitorada</th>
                            <th>Threshold</th>
                            <th>Prioridade</th>
                            <th>Canal de Notificação</th>
                            <th>Status Operacional</th>
                            <th style={{ width: '100px' }}>Controle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rules.map((rule) => (
                            <tr key={rule.id}>
                                <td data-label="Métrica Monitorada">{rule.metric}</td>
                                <td data-label="Threshold">{rule.threshold}</td>
                                <td data-label="Prioridade">
                                    <span className={`status-tag ${getPriorityClass(rule.priority)}`}>
                                        {rule.priority}
                                    </span>
                                </td>
                                <td data-label="Canal de Notificação" style={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
                                    {rule.channel}
                                </td>
                                <td data-label="Status Operacional">
                                    <span className={`status-tag ${getStatusClass(rule.status)}`}>
                                        {rule.status}
                                    </span>
                                </td>
                                <td data-label="Controle">
                                    <button 
                                        onClick={() => toggleStatus(rule.id)} 
                                        className="action-button"
                                    >
                                        {rule.status === 'Ativo' ? 'Pausar' : 'Reativar'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alert;
