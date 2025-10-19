import React from 'react';

// --- DADOS DO PROJETO (Fictícios, mas com foco técnico) ---
const projectsData = [
    {
        title: "Kernel de Processamento de Alto Desempenho (HPC)",
        tag: "Core",
        status: "Produção Estável",
        description: "Reescrita em **Rust** do motor de alocação de memória para processamento paralelo, alcançando 99.99% de Uptime e redução de latência em 40%. Aplicação do padrão Zero-Cost Abstraction.",
        tech: ["Rust", "C++", "CUDA", "Kubernetes"],
    },
    {
        title: "API Gateway Distribuído (Edge Cache)",
        tag: "Infra",
        status: "Implementação L4",
        description: "Desenvolvimento de um Gateway que utiliza cache distribuído em nós de borda (Edge Caching) para otimizar requisições geolocalizadas e aplicar políticas de segurança L7.",
        tech: ["Go", "Envoy", "Redis Cluster", "SD-L4"],
    },
    {
        title: "Sistema Preditivo de Falhas (AI/ML)",
        tag: "DevOps",
        status: "Piloto Interno",
        description: "Modelo de **Machine Learning** para prever falhas em hardware de data center com base em logs de telemetria e padrões de carga, melhorando o MTBF em 25%.",
        tech: ["Python", "TensorFlow", "Prometheus", "Kafka"],
    },
    {
        title: "Mecanismo de Consistência Eventual",
        tag: "Database",
        status: "Design Finalizado",
        description: "Implementação de um mecanismo de consenso baseado em CRDTs (Conflict-free Replicated Data Types) para garantir consistência eventual em ambientes multi-região.",
        tech: ["Java", "Gossip Protocol", "CRDTs", "SD-L5"],
    },
];

// ----------------------------------------------------
// ESTILOS GLOBAIS E ESPECÍFICOS (Embutidos)
// ----------------------------------------------------
const GlobalStyles = () => (
    <style>{`
        /* Variáveis de Cor */
        :root {
            --color-white: #ffffff;
            --color-gray-200: #e5e7eb;
            --color-gray-300: #d1d5db;
            --color-gray-700: #4b5563;
            --color-gray-800: #1f2937;
            --color-sky-700: #0369a1;
        }
        
        body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', sans-serif;
            background-color: #f3f4f6;
        }

        /* Container que simula a área de conteúdo */
        .content-container {
            padding: 20px 40px;
            padding-top: 20px;
            max-width: 1200px;
            margin: 0 auto;
        }

        /* Estilo de Tipografia */
        .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
        .font-extrabold { font-weight: 800; color: var(--color-gray-800); }
        .font-bold { font-weight: 700; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mt-8 { margin-top: 2rem; }
        .text-gray-700 { color: var(--color-gray-700); line-height: 1.6; }

        /* Estilos específicos para a Galeria de Projetos */
        .projects-header {
            margin-bottom: 2rem;
            border-bottom: 2px solid var(--color-gray-300);
            padding-bottom: 1rem;
            background-color: var(--color-white); /* Garante que o header fique sobre o fundo branco */
            padding-top: 2rem;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            padding: 2rem 3rem 1rem 3rem; /* Padding do título */
        }
        
        .projects-wrapper {
            background-color: var(--color-white);
            border-radius: 8px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            padding: 3rem;
            padding-top: 1rem;
        }
        
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        .project-card {
            border: 1px solid var(--color-gray-200);
            border-radius: 8px;
            padding: 1.5rem;
            transition: transform 0.3s, box-shadow 0.3s;
            display: flex;
            flex-direction: column;
            min-height: 250px;
            background-color: #fcfcfc; /* Fundo levemente off-white */
        }
        .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
            border-color: var(--color-sky-700);
        }
        .project-tag {
            display: inline-block;
            background-color: var(--color-sky-700);
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.75rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
            text-transform: uppercase;
        }
        .project-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--color-gray-800);
            margin-bottom: 0.5rem;
        }
        .project-description {
            font-size: 0.95rem;
            color: var(--color-gray-700);
            flex-grow: 1;
        }
        .project-status {
            font-size: 0.875rem;
            font-weight: 600;
            color: var(--color-sky-700);
            border-top: 1px dashed var(--color-gray-300);
            padding-top: 0.75rem;
            margin-top: 1rem;
        }
        .project-tech {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: 0.75rem;
        }
        .tech-badge {
            background-color: #e5f5ff;
            color: #0369a1;
            padding: 3px 8px;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 500;
        }
        
        /* Responsividade */
        @media (max-width: 768px) {
            .content-container {
                padding: 15px;
            }
            .projects-wrapper {
                padding: 1.5rem;
            }
            .projects-grid {
                grid-template-columns: 1fr;
            }
            .projects-header {
                padding: 1.5rem 1.5rem 1rem 1.5rem;
            }
        }
    `}</style>
);


// ----------------------------------------------------
// COMPONENTE PRINCIPAL: PROJECTS
// ----------------------------------------------------
const Projects = () => {
    return (
        <>
            <GlobalStyles />
            <div className="content-container">
                <div className="projects-header">
                    <h1 className="text-4xl font-extrabold">Portfólio de Engenharia de Alto Nível</h1>
                </div>
                
                <div className="projects-wrapper">
                    <p className="text-gray-700 mb-8">
                        Esta seção detalha os projetos de **impacto e sistemas críticos** desenvolvidos. O foco é em arquitetura robusta, performance e aderência aos padrões globais de engenharia, refletindo a visão tradicional e a excelência técnica.
                    </p>

                    <div className="projects-grid">
                        {projectsData.map((project, index) => (
                            <div key={index} className="project-card">
                                <span className="project-tag">{project.tag}</span>
                                <h2 className="project-title">{project.title}</h2>
                                <p className="project-description mb-4">{project.description}</p>
                                
                                <div className="project-tech">
                                    {project.tech.map((techItem, techIndex) => (
                                        <span key={techIndex} className="tech-badge">{techItem}</span>
                                    ))}
                                </div>

                                <p className="project-status">Status: **{project.status}**</p>
                            </div>
                        ))}
                    </div>
                    
                    <p className="text-gray-700 mt-8">
                        *Regra: O sucesso de um projeto não é medido pelo hype, mas pela **estabilidade do kernel** e pela documentação técnica (SD-TR-25-10).*
                    </p>
                </div>
            </div>
        </>
    );
};

export default Projects;
