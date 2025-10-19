import React from 'react';

// --- Ícones SVG para Certificações (Fictícios) ---

// Ícone de Medalha/Certificado
const AwardIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path fill="currentColor" d="M373.9 14.8c-1.3-4.5-5.2-7.8-10.2-7.8H214.3c-5 0-8.9 3.3-10.2 7.8L166 84.8H64C28.7 84.8 0 113.5 0 148.8V224c0 17.7 14.3 32 32 32H544c17.7 0 32-14.3 32-32V148.8c0-35.3-28.7-64-64-64H409.9L373.9 14.8zM448 288c-10.9 0-21.4 2.8-30.4 7.9C369.6 302.2 320 336 320 336s-49.6-33.8-97.6-40.1c-9-5.1-19.5-7.9-30.4-7.9c-26.5 0-48 21.5-48 48c0 10.9 2.8 21.4 7.9 30.4C190.2 370.4 224 416 224 416s-33.8 49.6-40.1 97.6c-5.1 9-7.9 19.5-7.9 30.4c0 26.5 21.5 48 48 48s48-21.5 48-48c0-10.9-2.8-21.4-7.9-30.4c-6.3-48-40.1-97.6-40.1-97.6s33.8-49.6 40.1-97.6c5.1-9 7.9-19.5 7.9-30.4c0-26.5-21.5-48-48-48z"/>
    </svg>
);

// Ícone de Engrenagem (para Certificação Técnica)
const CogIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11.3-14 22.2-22.2 32.8l-4.7 5.9c-11.3 14.1-22.6 27.5-35 39.8l-2.4 2.4c-9.1 9.1-21.4 13.6-33.8 13.6c-5.8 0-11.6-1.1-17.1-3.4l-40.1-16.7c-12.7 1.8-25.7 2.7-39.2 2.7c-13.5 0-26.5-.9-39.2-2.7l-40.1 16.7c-5.5 2.3-11.3 3.4-17.1 3.4c-12.4 0-24.7-4.5-33.8-13.6l-2.4-2.4c-12.4-12.3-23.7-25.7-35-39.8l-4.7-5.9c-8.2-10.6-15.6-21.5-22.2-32.8l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4c-1.1-8.3-1.7-16.8-1.7-25.4s.6-17.1 1.7-25.4l-43.3-39.4c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11.3 14-22.2 22.2-32.8l4.7-5.9c11.3-14.1 22.6-27.5 35-39.8l2.4-2.4c9.1-9.1 21.4-13.6 33.8-13.6c5.8 0 11.6 1.1 17.1 3.4l40.1 16.7c12.7-1.8 25.7-2.7 39.2-2.7c13.5 0 26.5 .9 39.2 2.7l40.1-16.7c5.5-2.3 11.3-3.4 17.1-3.4c12.4 0 24.7 4.5 33.8 13.6l2.4 2.4c12.4 12.3 23.7 25.7 35 39.8l4.7 5.9c8.2 10.6 15.6 21.5 22.2 32.8l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0 128a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"/>
    </svg>
);

// Ícone de Estrela (para Reconhecimento/Expertise)
const StarIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.9 0s-22.7 7-28 18L195 150.3 51.4 171.5c-11.4 1.7-20.1 10.1-22.6 21.5s-.6 24.5 6.8 32.7l103.6 100.7L124.8 432c-2 11.3 2.8 23.1 13.6 29s23.9 3.5 34.9-3.5L288.9 358.6l127.9 74.6c11 6.5 23.4 8.7 34.9 3.5s15.5-17.7 13.6-29l-24.3-132.8L533.5 225.7c7.4-8.3 7.9-20.8 6.8-32.7s-11.3-19.8-22.6-21.5L381.9 150.3 316.9 18z"/>
    </svg>
);


// --- DADOS DAS CERTIFICAÇÕES (Fictícios) ---
const certificationsData = [
    {
        icon: <CogIcon className="cert-icon" />,
        title: "Arquiteto de Sistemas Distribuídos (SD-L4)",
        level: "Nível: Elite",
        description: "Certificação em design e implementação de arquiteturas escaláveis e resilientes com microserviços, filas de mensagens e padrões de consistência eventual.",
        issuedBy: "Senior Dev Foundation",
        year: "2024",
    },
    {
        icon: <StarIcon className="cert-icon" />,
        title: "Especialista em Performance de Kernel (SD-L3)",
        level: "Nível: Avançado",
        description: "Proficiência em otimização de código de baixo nível (Rust/C++), gerenciamento de memória e otimização de threads para aplicações de alta performance.",
        issuedBy: "Global Tech Institute",
        year: "2023",
    },
    {
        icon: <AwardIcon className="cert-icon" />,
        title: "Segurança de Software (OWASP Top 10)",
        level: "Nível: Profissional",
        description: "Validação de expertise em identificar e mitigar as principais vulnerabilidades de segurança em aplicações web e APIs, conforme padrões OWASP.",
        issuedBy: "CyberGuard Academy",
        year: "2022",
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
            --color-gray-100: #f3f4f6;
            --color-gray-200: #e5e7eb;
            --color-gray-300: #d1d5db;
            --color-gray-600: #4b5563;
            --color-gray-700: #374151;
            --color-gray-800: #1f2937;
            --color-sky-700: #0369a1; /* Azul principal */
            --color-sky-600-light: #0ea5e9; /* Azul mais claro para detalhes */
        }
        
        body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', sans-serif;
            background-color: var(--color-gray-100);
            color: var(--color-gray-700);
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
        .text-2xl { font-size: 1.5rem; line-height: 2rem; color: var(--color-sky-700); }
        .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
        .font-extrabold { font-weight: 800; color: var(--color-gray-800); }
        .font-bold { font-weight: 700; }
        .font-semibold { font-weight: 600; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mt-4 { margin-top: 1rem; }
        .mt-8 { margin-top: 2rem; }
        .text-gray-700 { color: var(--color-gray-700); line-height: 1.6; }
        .text-gray-600 { color: var(--color-gray-600); }

        /* Estilos da Seção de Certificações */
        .certifications-header {
            margin-bottom: 2rem;
            border-bottom: 2px solid var(--color-gray-300);
            padding-bottom: 1rem;
            background-color: var(--color-white);
            padding: 2rem 3rem 1rem 3rem;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }
        
        .certifications-wrapper {
            background-color: var(--color-white);
            border-radius: 8px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            padding: 3rem;
            padding-top: 1rem;
        }
        
        .certifications-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        .certification-card {
            border: 1px solid var(--color-gray-200);
            border-radius: 8px;
            padding: 1.5rem;
            transition: transform 0.3s, box-shadow 0.3s;
            display: flex;
            flex-direction: column;
            min-height: 220px;
            background-color: #fcfcfc;
            text-align: center;
        }
        .certification-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
            border-color: var(--color-sky-700);
        }
        .cert-icon {
            width: 50px;
            height: 50px;
            color: var(--color-sky-600-light);
            margin: 0 auto 1rem auto;
        }
        .cert-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--color-gray-800);
            margin-bottom: 0.5rem;
        }
        .cert-level {
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--color-sky-700);
            margin-bottom: 0.75rem;
        }
        .cert-description {
            font-size: 0.95rem;
            color: var(--color-gray-600);
            flex-grow: 1;
            margin-bottom: 1rem;
        }
        .cert-info {
            font-size: 0.85rem;
            color: var(--color-gray-600);
            border-top: 1px dashed var(--color-gray-300);
            padding-top: 0.75rem;
            margin-top: auto; /* Empurra para o final do card */
        }
        
        /* Responsividade */
        @media (max-width: 768px) {
            .content-container {
                padding: 15px;
            }
            .certifications-wrapper {
                padding: 1.5rem;
            }
            .certifications-grid {
                grid-template-columns: 1fr;
            }
            .certifications-header {
                padding: 1.5rem 1.5rem 1rem 1.5rem;
            }
        }
    `}</style>
);


// ----------------------------------------------------
// COMPONENTE PRINCIPAL: CERTIFICATIONS
// ----------------------------------------------------
const Certifications = () => {
    return (
        <>
            <GlobalStyles />
            <div className="content-container">
                <div className="certifications-header">
                    <h1 className="text-4xl font-extrabold">Certificações de Engenharia Senior</h1>
                </div>
                
                <div className="certifications-wrapper">
                    <p className="text-gray-700 mb-8">
                        As certificações representam o compromisso contínuo com a **excelência técnica e a proficiência em arquiteturas de sistemas complexos**. Cada certificação valida um conjunto de habilidades críticas para o Engenheiro Sênior.
                    </p>

                    <div className="certifications-grid">
                        {certificationsData.map((cert, index) => (
                            <div key={index} className="certification-card">
                                {cert.icon}
                                <h2 className="cert-title">{cert.title}</h2>
                                <p className="cert-level">{cert.level}</p>
                                <p className="cert-description">{cert.description}</p>
                                <p className="cert-info">Emitido por: {cert.issuedBy} ({cert.year})</p>
                            </div>
                        ))}
                    </div>
                    
                    <p className="text-gray-700 mt-8">
                        *Nota: Todas as certificações são periodicamente revisadas para garantir a aderência às tecnologias e metodologias mais recentes da indústria.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Certifications;
