import React from 'react';


// Função auxiliar para renderizar blocos de links
const LinkSection = ({ title, links }) => (
    <div>
        <h3 className="section-title">{title}</h3>
        <div>
            {links.map((link, index) => (
                <a key={index} href={link.href} className="footer-link">
                    {link.text}
                </a>
            ))}
        </div>
    </div>
);

// Componente Footer - Rodapé principal
const Footer = () => {
    
    // Definição dos estilos CSS puros (simulando um arquivo Footer.css)
    const pureCSS = `
        /* Variáveis de Estilo para Consistência */
        :root {
            --color-dark: #1f2937; /* Fundo escuro principal */
            --color-accent: #3b82f6; /* Azul de destaque */
            --color-light: #ffffff;
            --color-text-dimmed: #9ca3af; /* Texto secundário */
            --color-text-dimmer: #6b7280; /* Texto de copyright */
            --font-family: 'Inter', sans-serif;
        }

        /* Estilo Principal do Rodapé */
        .footer-container {
            background-color: var(--color-dark);
            color: var(--color-light);
            padding: 3rem 0 2rem 0;
            border-top: 4px solid var(--color-accent);
            box-shadow: 0 -10px 15px -3px rgba(0, 0, 0, 0.1);
            font-family: var(--font-family);
        }

        .footer-content {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 1rem;
        }

        /* Grid de Conteúdo (Links e Marca) - Padrão mobile-first */
        .footer-links-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 2.5rem;
            border-bottom: 1px solid #374151;
            padding-bottom: 2.5rem;
            margin-bottom: 2rem;
        }
        
        /* A coluna de marca ocupa o espaço total em telas pequenas */
        @media (max-width: 767px) {
            .brand-column {
                grid-column: 1 / -1;
            }
        }

        /* Títulos de Seção */
        .section-title {
            font-size: 1.125rem;
            font-weight: 600;
            color: var(--color-light);
            margin-bottom: 1rem;
            border-bottom: 1px solid var(--color-accent);
            padding-bottom: 0.25rem;
            display: inline-block;
        }

        /* Links */
        .footer-link {
            font-size: 0.875rem;
            color: var(--color-text-dimmed);
            line-height: 1.5;
            text-decoration: none;
            transition: color 0.3s ease;
            display: block;
            margin-top: 0.5rem;
        }

        .footer-link:hover {
            color: var(--color-accent);
        }

        /* Marca */
        .brand-logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 1.25rem;
        }

        .brand-icon {
            width: 2.25rem;
            height: 2.25rem;
            color: var(--color-accent);
        }

        .brand-text {
            font-size: 1.875rem;
            font-weight: 800;
            color: var(--color-light);
        }

        .brand-description, .contact-info {
            font-size: 0.875rem;
            color: var(--color-text-dimmed);
            line-height: 1.6;
        }
        
        .contact-info {
            margin-top: 1rem;
        }

        /* Seção Inferior (Copyright e Sociais) */
        .footer-bottom {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            font-size: 0.875rem;
            color: var(--color-text-dimmer);
            text-align: center;
        }
        
        .copyright-text {
            order: 2; /* Move para baixo em mobile */
            margin-top: 1.5rem;
        }

        /* Media Query para Desktop */
        @media (min-width: 768px) {
            .footer-bottom {
                flex-direction: row;
                text-align: left;
            }
            .copyright-text {
                order: 1;
                margin-top: 0;
            }
        }

        /* Links Sociais */
        .social-links {
            order: 1; /* Move para cima em mobile */
            display: flex;
            gap: 1.5rem;
        }

        .social-link {
            color: var(--color-text-dimmer);
            transition: color 0.3s ease;
            display: block;
        }

        .social-link:hover {
            color: var(--color-accent);
        }

        .social-icon {
            width: 1.75rem;
            height: 1.75rem;
        }
    `;

    // Para um projeto React tradicional, você moveria este <style> para um arquivo CSS
    // ou usaria um CSS-in-JS. Aqui, inserimos diretamente no DOM (porém, em um contexto real,
    // o React não suporta tags <style> inline com texto. Faremos o que o Canvas suporta)

    // Dados estáticos do rodapé
    const linksEmpresa = [
        { text: "Sobre Nós", href: "#" },
        { text: "Equipe Sênior", href: "#" },
        { text: "Oportunidades", href: "#" },
        { text: "Código de Conduta", href: "#" },
    ];

    const linksServicos = [
        { text: "Arquitetura Cloud", href: "#" },
        { text: "Engenharia de Dados", href: "#" },
        { text: "Refatoração Legada", href: "#" },
        { text: "Assessoria Técnica", href: "#" },
    ];

    const linksRecursos = [
        { text: "Documentação de API", href: "#" },
        { text: "Guias Técnicos", href: "#" },
        { text: "Eventos", href: "#" },
        { text: "Fórum de Suporte", href: "#" },
    ];

    return (
        <>
            {/* INJEÇÃO DE ESTILOS: Em um projeto real, você usaria import 'Footer.css' */}
            <style dangerouslySetInnerHTML={{ __html: pureCSS }} />
            
            <footer className="footer-container">
                <div className="footer-content">
                    
                    {/* Grid de Conteúdo Principal */}
                    <div className="footer-links-grid">
                        
                        {/* 1. Coluna da Marca e Contato */}
                        <div className="brand-column">
                            <div className="brand-logo">
                                {/* Ícone de Engrenagem (usando SVG) */}
                                <svg className="brand-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <span className="brand-text">Engenharia S.A.</span>
                            </div>
                            <p className="brand-description">
                                Padrões de código impecáveis e arquiteturas que resistem ao tempo. O foco é na longevidade e performance.
                            </p>
                            <div className="contact-info">
                                <p><strong>Email:</strong> contato@engseniorsa.dev</p>
                                <p><strong>Telefone:</strong> +55 11 9876-5432</p>
                            </div>
                        </div>

                        {/* 2. Coluna de Links: Empresa */}
                        <LinkSection title="Empresa" links={linksEmpresa} />

                        {/* 3. Coluna de Links: Serviços */}
                        <LinkSection title="Serviços" links={linksServicos} />

                        {/* 4. Coluna de Links: Recursos */}
                        <LinkSection title="Recursos" links={linksRecursos} />
                        
                    </div>

                    {/* Seção Inferior: Direitos Autorais e Sociais */}
                    <div className="footer-bottom">

                        {/* Ícones de Redes Sociais */}
                        <div className="social-links">
                            {/* GitHub (SVG) */}
                            <a href="#" className="social-link" aria-label="GitHub">
                                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.827-.015-1.62-2.784.604-3.37-1.34-3.37-1.34-.455-1.15-.935-1.46-1.022-1.47-.74-.504-.056-.777.042-.76.646.055.99.66 1.127.994.58 1.006 1.522.716 1.897.545.058-.423.228-.716.417-.883-1.448-.163-2.964-.72-2.964-3.218 0-.712.254-1.298.675-1.756-.068-.163-.292-.83.064-1.734 0 0 .546-.176 1.791.674C10.742 7.7 11.374 7.584 12 7.584c.626 0 1.258.116 1.815.324 1.244-.85 1.79-.674 1.79-.674.357.904.133 1.571.065 1.734.42.458.674 1.044.674 1.756 0 2.506-1.516 3.053-2.97 3.21.235.203.447.6.447 1.206 0 .883-.008 1.597-.008 1.812 0 .268.18.575.688.484C21.139 20.2 24 16.448 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd" />
                                </svg>
                            </a>
                            {/* LinkedIn (SVG) */}
                            <a href="#" className="social-link" aria-label="LinkedIn">
                                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.263-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            {/* Email (SVG) */}
                            <a href="mailto:contato@engseniorsa.dev" className="social-link" aria-label="Email">
                                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </a>
                        </div>
                        
                        {/* Direitos Autorais */}
                        <p className="copyright-text">
                            &copy; 2025 Engenharia S.A. Todos os direitos reservados.
                        </p>
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;
