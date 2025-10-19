import React from 'react';

// --- Ícones SVG inline para evitar dependências externas ---

// Ícone de Usuário
const UserIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
  </svg>
);

// Ícone de Envelope
const EnvelopeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 393.6c11.4 8.6 27 8.6 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176L0 400c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
  </svg>
);

// Ícone de Comentário
const CommentIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M123.6 391.3c12.9-3.4 25.8 3.5 31.4 15.1l74.6 151.2c2.8 5.6 1.4 12.4-3.5 16.9C227.1 506.7 186.7 512 144 512C64.5 512 0 447.5 0 368C0 274.6 77.8 197.6 171.2 192L176 192L384 192c70.7 0 128 57.3 128 128s-57.3 128-128 128H288L123.6 391.3zM448 320a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM192 144c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64s-28.7-64-64-64z"/>
  </svg>
);

// Ícone de Avião de Papel/Enviar
const PaperPlaneIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M498.1 50.8L448 99.6 142.3 405.8c-2.3 2.3-4.1 4.9-5.3 7.7L31.9 448.9c-1.3 2.7-2 5.6-2 8.6c0 5.4 3.1 10.4 7.9 12.8s10.8 1.4 14.2-2.1L277.6 226.5l4.8-1.5 186.7-186.7c7.5-7.5 18.2-7.5 25.8 0s7.5 18.2 0 25.8L359.8 192 480 312.2l-39.2 150.3c-1.2 4.7-.5 9.7 1.9 14.1s6.1 7.4 11.2 8.3L480 500c5.4 .9 10.7-1.1 14.2-4.6s5.5-8.5 4.6-14L498.1 50.8z"/>
  </svg>
);

// ----------------------------------------------------
// ESTILOS GLOBAIS E ESPECÍFICOS (Embutidos)
// ----------------------------------------------------
const GlobalStyles = () => (
    <style>{`
        /* Variáveis de Cor */
        :root {
            --color-white: #ffffff;
            --color-gray-100: #f3f4f6;
            --color-gray-300: #d1d5db;
            --color-gray-500: #6b7280;
            --color-gray-700: #374151;
            --color-gray-800: #1f2937;
            --color-sky-700: #0369a1;
            --color-sky-800: #075985;
        }
        
        body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', sans-serif;
            background-color: var(--color-gray-100);
            color: var(--color-gray-700);
        }

        .contact-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        .contact-card {
            background-color: var(--color-white);
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
            padding: 3rem;
            max-width: 500px;
            width: 100%;
            border-top: 5px solid var(--color-sky-700); /* Linha de destaque */
        }

        .contact-header h1 {
            font-size: 2rem;
            font-weight: 700;
            color: var(--color-gray-800);
            margin-bottom: 0.5rem;
        }

        .contact-header p {
            color: var(--color-gray-500);
            margin-bottom: 2rem;
            border-bottom: 1px solid var(--color-gray-100);
            padding-bottom: 1rem;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: flex;
            align-items: center;
            font-size: 1rem;
            font-weight: 600;
            color: var(--color-gray-700);
            margin-bottom: 0.5rem;
        }

        .form-group .icon {
            width: 18px;
            height: 18px;
            margin-right: 8px;
            color: var(--color-sky-700);
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 10px 15px;
            border: 1px solid var(--color-gray-300);
            border-radius: 6px;
            font-size: 1rem;
            transition: border-color 0.3s, box-shadow 0.3s;
            box-sizing: border-box; /* Inclui padding e border na largura total */
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
            border-color: var(--color-sky-700);
            outline: none;
            box-shadow: 0 0 0 3px rgba(3, 105, 161, 0.2);
        }

        .form-group textarea {
            resize: vertical;
            min-height: 120px;
        }

        .submit-button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 12px;
            background-color: var(--color-sky-700);
            color: var(--color-white);
            font-weight: 700;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.1s;
        }

        .submit-button:hover {
            background-color: var(--color-sky-800);
        }

        .submit-button:active {
            transform: scale(0.99);
        }
        
        .submit-button .icon-btn {
            width: 18px;
            height: 18px;
            margin-right: 8px;
            color: var(--color-white);
        }

        /* Responsividade */
        @media (max-width: 600px) {
            .contact-container {
                padding: 10px;
            }
            .contact-card {
                padding: 2rem;
            }
            .contact-header h1 {
                font-size: 1.75rem;
            }
        }
    `}</style>
);


// ----------------------------------------------------
// COMPONENTE PRINCIPAL: CONTACT
// ----------------------------------------------------
const Contact = () => {
    // Função de manipulação do submit (apenas um placeholder funcional)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulário Submetido. A implementação de backend (como um Firebase Function ou serviço de email) seria necessária para processar esta requisição.");
        // Em um projeto real, aqui você faria uma chamada fetch/axios para o endpoint do servidor.
        alert('Sua solicitação foi registrada. Retornaremos o contato em breve, após a revisão dos SLAs internos.');
    };

    return (
        <>
            <GlobalStyles />
            <div className="contact-container">
                
                <div className="contact-card">
                    
                    <div className="contact-header">
                        <h1>Solicitação Direta</h1>
                        <p>Para otimizar o tempo e o foco, utilize o formulário apenas para propostas de Engenharia Sênior e sistemas de missão crítica.</p>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        
                        <div className="form-group">
                            <label htmlFor="name">
                                <UserIcon className="icon" /> 
                                Nome (Requisição)
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="Nome da Entidade Solicitante"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">
                                <EnvelopeIcon className="icon" /> 
                                Email (Contato Principal)
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="email.corporativo@dominio.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">
                                <CommentIcon className="icon" /> 
                                Detalhes da Proposta / Escopo
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                required
                                placeholder="Descreva de forma concisa o objetivo principal e o desafio técnico. (Ex: 'Necessidade de migração de legado COBOL para Rust com SLA de 99.999%')."
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="submit-button"
                            >
                                <PaperPlaneIcon className="icon-btn" /> 
                                Enviar Solicitação para Análise
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
