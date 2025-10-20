import React, { useState, useEffect } from 'react';

// URL da API REST mockada (json-server)
const API_URL = 'http://localhost:3000/rules';

// --- INÍCIO: HOOK CUSTOMIZADO useFetch (CSS PURO) ---
/**
 * Hook para lidar com a busca de dados.
 */
const useFetch = (url, fetchKey) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = async () => {
            setError(null);
            setLoading(true);
            
            try {
                const response = await fetch(url, { signal });
                
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: Falha ao buscar dados.`);
                }

                const result = await response.json();
                
                if (Array.isArray(result)) {
                    setData(result);
                } else {
                    throw new Error("Formato de dados inesperado.");
                }
                
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err.message || 'Erro de rede desconhecido.');
                }
            } finally {
                if (!signal.aborted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            abortController.abort();
        };
    }, [url, fetchKey]); 

    return { data, loading, error };
};
// --- FIM: HOOK CUSTOMIZADO useFetch ---


// --- INÍCIO: COMPONENTE PostRuleForm (Escrita) ---
/**
 * Formulário para adicionar uma nova regra via POST.
 */
const PostRuleForm = ({ onRuleAdded, onCancel }) => {
    const [metric, setMetric] = useState('');
    const [threshold, setThreshold] = useState('');
    const [priority, setPriority] = useState('low');
    const [submitting, setSubmitting] = useState(false);
    const [postError, setPostError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setPostError(null);
        setSuccess(false);

        if (!metric || !threshold) {
            setPostError('Métrica e Limite são obrigatórios.');
            setSubmitting(false);
            return;
        }

        const newRule = {
            metric,
            threshold: parseFloat(threshold), 
            priority,
            active: true 
        };

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newRule),
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: Falha ao criar a regra.`);
            }

            await response.json();
            
            setSuccess(true);
            
            // Força o recarregamento na lista e volta para a visualização principal
            onRuleAdded(); 

        } catch (err) {
            setPostError(err.message || 'Erro desconhecido ao enviar.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="form-card">
            <h3 className="form-title">Adicionar Nova Regra</h3>
            <form onSubmit={handleSubmit} className="form-grid">
                
                {/* Campo Métrica */}
                <div className="form-group">
                    <label htmlFor="metric">Métrica (Ex: latency_p95)</label>
                    <input
                        id="metric"
                        type="text"
                        value={metric}
                        onChange={(e) => setMetric(e.target.value)}
                        required
                        disabled={submitting}
                        className="form-input"
                    />
                </div>

                {/* Campo Limite (Threshold) */}
                <div className="form-group">
                    <label htmlFor="threshold">Limite Numérico</label>
                    <input
                        id="threshold"
                        type="number"
                        step="0.01"
                        value={threshold}
                        onChange={(e) => setThreshold(e.target.value)}
                        required
                        disabled={submitting}
                        className="form-input"
                    />
                </div>

                {/* Campo Prioridade */}
                <div className="form-group full-width">
                    <label htmlFor="priority">Prioridade</label>
                    <select
                        id="priority"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        disabled={submitting}
                        className="form-input"
                    >
                        <option value="low">Baixa</option>
                        <option value="medium">Média</option>
                        <option value="high">Alta</option>
                        <option value="critical">Crítica</option>
                    </select>
                </div>

                {/* Feedback de Status */}
                {postError && (
                    <div className="feedback-error full-width">Erro: {postError}</div>
                )}
                {success && (
                    <div className="feedback-success full-width">Regra Adicionada com Sucesso! Redirecionando...</div>
                )}
                
                {/* Botões de Ação */}
                <div className="form-actions full-width">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="button secondary"
                        disabled={submitting}
                    >
                        Voltar
                    </button>
                    <button
                        type="submit"
                        className="button primary"
                        disabled={submitting}
                    >
                        {submitting ? 'Criando...' : 'Criar Regra'}
                    </button>
                </div>
            </form>
        </div>
    );
};
// --- FIM: COMPONENTE PostRuleForm ---

/**
 * Componente principal para carregar e exibir (e permitir adicionar) regras.
 */
const LoadRules = () => {
    // Estado para forçar o refetch após uma adição de regra
    const [fetchKey, setFetchKey] = useState(0); 
    // Estado para gerenciar a visualização: 'list' ou 'form'
    const [view, setView] = useState('list');

    // 1. Uso do Hook para carregar os dados
    const { data: rules, loading, error } = useFetch(API_URL, fetchKey);

    // 2. Função de callback que força o recarregamento (aumentando o fetchKey)
    const handleRuleAdded = () => {
        // Volta para a lista
        setView('list');
        // Força o useFetch a buscar a lista atualizada do servidor
        setFetchKey(prev => prev + 1);
    };

    // Mapeia prioridades para cores CSS
    const priorityClasses = {
        'low': 'priority-low',
        'medium': 'priority-medium',
        'high': 'priority-high',
        'critical': 'priority-critical'
    };

    // Renderização do cabeçalho da lista de regras
    const renderHeader = () => (
        <div className="list-header">
            <h3 className="list-title">Regras de Alerta ({rules?.length || 0})</h3>
            <a 
                href="#"
                onClick={(e) => { e.preventDefault(); setView('form'); }}
                className="add-link"
                role="button"
            >
                {/* Ícone '+' em SVG puro */}
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Adicionar Nova Regra
            </a>
        </div>
    );

    // Renderização dos cards de regras
    const renderRuleList = () => (
        <div className="rule-list">
            {rules && rules.map(rule => (
                <div 
                    key={rule.id} 
                    className="rule-card"
                >
                    <div className="rule-header">
                        <span className="rule-id">ID: {rule.id}</span>
                        <span className={`rule-priority ${priorityClasses[rule.priority] || ''}`}>
                            {rule.priority.toUpperCase()}
                        </span>
                    </div>
                    
                    <h4 className="rule-metric">{rule.metric}</h4>
                    
                    <p className="rule-threshold">
                        Limite: <span className="value-highlight">{rule.threshold}</span>
                    </p>
                    
                    <div className="rule-footer">
                        <span className={`rule-status ${rule.active ? 'status-active' : 'status-inactive'}`}>
                            {rule.active ? 'Ativa' : 'Inativa'}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );

    // Renderização de Status (Loading/Error)
    const renderStatus = () => {
        if (error) {
            return (
                <div className="status-box error-box">
                    <strong>ERRO CRÍTICO (Falha no Fetch): </strong>
                    <span>{error}</span>
                    <button 
                        onClick={() => setFetchKey(prev => prev + 1)}
                        className="button primary retry-button"
                    >
                        Tentar Novamente
                    </button>
                </div>
            );
        }

        if (loading) {
            return (
                <div className="status-box loading-box">
                    <div className="spinner"></div>
                    <p>Carregando Regras Críticas... Aguarde.</p>
                </div>
            );
        }
        
        return null;
    };


    return (
        <div className="app-container">
            <style>
                {/* CSS PURO PARA ESTILIZAÇÃO COMPLETA */}
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

                    :root {
                        --color-primary: #3b82f6; /* Blue 500 */
                        --color-primary-dark: #2563eb; /* Blue 600 */
                        --color-bg: #f9fafb; /* Gray 50 */
                        --color-card-bg: #ffffff;
                        --color-text-dark: #1f2937; /* Gray 800 */
                        --color-text-medium: #4b5563; /* Gray 600 */
                        --color-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

                        --color-low: #10b981; /* Green */
                        --color-medium: #f59e0b; /* Yellow/Amber */
                        --color-high: #f97316; /* Orange */
                        --color-critical: #ef4444; /* Red */
                    }

                    .app-container {
                        font-family: 'Inter', sans-serif;
                        min-height: 100vh;
                        background-color: var(--color-bg);
                        padding: 30px 20px;
                    }

                    .main-header {
                        margin-bottom: 30px;
                        padding-bottom: 10px;
                        border-bottom: 4px solid var(--color-primary);
                        display: inline-block;
                    }

                    .main-header h1 {
                        font-size: 2.5rem;
                        font-weight: 800;
                        color: var(--color-text-dark);
                        margin: 0;
                    }

                    /* --- Status Boxes --- */
                    .status-box {
                        padding: 20px;
                        border-radius: 8px;
                        margin-bottom: 20px;
                        font-weight: 600;
                        text-align: center;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 15px;
                    }

                    .loading-box {
                        background-color: #eff6ff; /* Blue 50 */
                        color: var(--color-primary-dark);
                        border: 1px solid var(--color-primary);
                    }
                    .loading-box p { margin: 0; }

                    .error-box {
                        background-color: #fee2e2; /* Red 100 */
                        color: var(--color-critical);
                        border: 1px solid var(--color-critical);
                    }
                    .error-box strong { font-weight: 700; margin-right: 5px; }
                    .retry-button {
                        background-color: var(--color-critical);
                        color: white;
                    }
                    .retry-button:hover {
                        background-color: #dc2626; /* Red 600 */
                    }
                    
                    /* Spinner CSS */
                    .spinner {
                        border: 4px solid #bfdbfe; /* Light Blue */
                        border-top: 4px solid var(--color-primary);
                        border-radius: 50%;
                        width: 30px;
                        height: 30px;
                        animation: spin 1s linear infinite;
                    }

                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }

                    /* --- List Header and Add Link --- */
                    .list-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding-bottom: 15px;
                        margin-bottom: 20px;
                        border-bottom: 2px solid #e5e7eb;
                    }

                    .list-title {
                        font-size: 1.8rem;
                        font-weight: 700;
                        color: var(--color-text-dark);
                        margin: 0;
                    }

                    .add-link {
                        background-color: var(--color-primary);
                        color: var(--color-card-bg);
                        padding: 10px 18px;
                        border-radius: 6px;
                        font-weight: 600;
                        text-decoration: none;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        box-shadow: 0 4px 6px rgba(59, 130, 246, 0.4);
                        transition: background-color 0.2s, transform 0.2s;
                    }

                    .add-link:hover {
                        background-color: var(--color-primary-dark);
                        transform: translateY(-2px);
                    }

                    .add-link .icon {
                        width: 20px;
                        height: 20px;
                    }


                    /* --- Rule Cards (List View) --- */
                    .rule-list {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                        gap: 20px;
                    }

                    .rule-card {
                        background-color: var(--color-card-bg);
                        padding: 20px;
                        border-radius: 12px;
                        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
                        border: 1px solid #e5e7eb;
                        transition: box-shadow 0.3s, transform 0.3s;
                    }

                    .rule-card:hover {
                        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
                        transform: translateY(-5px);
                    }

                    .rule-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 12px;
                        border-bottom: 1px dashed #e5e7eb;
                        padding-bottom: 8px;
                    }

                    .rule-id {
                        font-size: 0.75rem;
                        font-family: monospace;
                        color: var(--color-text-medium);
                    }

                    .rule-priority {
                        font-size: 0.7rem;
                        font-weight: 700;
                        padding: 4px 10px;
                        border-radius: 9999px; /* Pill shape */
                        text-transform: uppercase;
                        border: 1px solid;
                    }

                    .priority-low { background-color: #d1fae5; color: var(--color-low); border-color: #a7f3d0; }
                    .priority-medium { background-color: #fef3c7; color: var(--color-medium); border-color: #fcd34d; }
                    .priority-high { background-color: #ffedd5; color: var(--color-high); border-color: #fdba74; }
                    .priority-critical { background-color: #fee2e2; color: var(--color-critical); border-color: #fca5a5; }

                    .rule-metric {
                        font-size: 1.25rem;
                        font-weight: 700;
                        color: var(--color-text-dark);
                        margin-top: 0;
                        margin-bottom: 5px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    .rule-threshold {
                        font-size: 0.9rem;
                        color: var(--color-text-medium);
                        margin: 0;
                    }

                    .value-highlight {
                        font-weight: 700;
                        color: var(--color-primary-dark);
                    }

                    .rule-footer {
                        margin-top: 15px;
                        padding-top: 10px;
                        border-top: 1px solid #f3f4f6;
                    }

                    .rule-status {
                        font-size: 0.8rem;
                        font-weight: 600;
                    }

                    .status-active { color: var(--color-low); }
                    .status-inactive { color: var(--color-critical); }

                    /* --- Form Styles (PostRuleForm) --- */
                    .form-card {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 30px;
                        background-color: var(--color-card-bg);
                        border-radius: 12px;
                        box-shadow: var(--color-shadow);
                    }
                    
                    .form-title {
                        font-size: 1.8rem;
                        font-weight: 700;
                        color: var(--color-text-dark);
                        margin-bottom: 25px;
                        padding-bottom: 10px;
                        border-bottom: 2px solid #e5e7eb;
                    }

                    .form-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 20px;
                    }

                    .full-width {
                        grid-column: 1 / -1;
                    }

                    .form-group label {
                        display: block;
                        font-size: 0.9rem;
                        font-weight: 600;
                        color: var(--color-text-dark);
                        margin-bottom: 5px;
                    }

                    .form-input {
                        width: 100%;
                        padding: 10px 12px;
                        border: 1px solid #d1d5db;
                        border-radius: 6px;
                        box-sizing: border-box;
                        font-size: 1rem;
                        transition: border-color 0.2s, box-shadow 0.2s;
                    }
                    
                    .form-input:focus {
                        border-color: var(--color-primary);
                        outline: none;
                        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
                    }
                    
                    /* Feedback Messages */
                    .feedback-error, .feedback-success {
                        padding: 12px;
                        border-radius: 6px;
                        font-weight: 600;
                    }
                    .feedback-error {
                        background-color: #fee2e2;
                        color: var(--color-critical);
                        border: 1px solid #fca5a5;
                    }
                    .feedback-success {
                        background-color: #d1fae5;
                        color: var(--color-low);
                        border: 1px solid #a7f3d0;
                        animation: fadeOut 3s forwards;
                    }
                    @keyframes fadeOut {
                        0% { opacity: 1; }
                        80% { opacity: 1; }
                        100% { opacity: 0; height: 0; padding: 0; margin: 0; border: none; }
                    }

                    /* Buttons */
                    .form-actions {
                        display: flex;
                        justify-content: space-between;
                        padding-top: 15px;
                    }
                    
                    .button {
                        padding: 10px 20px;
                        border: none;
                        border-radius: 6px;
                        font-weight: 700;
                        cursor: pointer;
                        transition: background-color 0.2s, transform 0.2s, opacity 0.2s;
                    }

                    .button.primary {
                        background-color: var(--color-primary);
                        color: white;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                    }

                    .button.primary:hover:not(:disabled) {
                        background-color: var(--color-primary-dark);
                        transform: translateY(-1px);
                    }

                    .button.secondary {
                        background-color: #e5e7eb; /* Gray 200 */
                        color: var(--color-text-dark);
                    }

                    .button.secondary:hover:not(:disabled) {
                        background-color: #d1d5db; /* Gray 300 */
                    }

                    .button:disabled {
                        opacity: 0.6;
                        cursor: not-allowed;
                    }

                    /* Media Queries for Responsiveness */
                    @media (max-width: 768px) {
                        .main-header h1 {
                            font-size: 2rem;
                        }
                        .list-title {
                            font-size: 1.5rem;
                        }
                        .list-header {
                            flex-direction: column;
                            align-items: flex-start;
                            gap: 15px;
                        }
                        .add-link {
                            width: 100%;
                            justify-content: center;
                        }
                        .form-grid {
                            grid-template-columns: 1fr;
                        }
                    }
                `}
            </style>

            <header className="main-header">
                <h1>Painel de Regras</h1>
            </header>

            {renderStatus()}

            {/* Visualização Principal */}
            {!loading && !error && (
                <div className="content-view">
                    {view === 'list' ? (
                        <>
                            {renderHeader()}
                            {renderRuleList()}
                        </>
                    ) : (
                        <PostRuleForm 
                            onRuleAdded={handleRuleAdded} 
                            onCancel={() => setView('list')} 
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default LoadRules;
