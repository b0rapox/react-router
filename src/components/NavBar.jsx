import React from 'react';

// --- DADOS DE NAVEGAÇÃO ---
const navItems = [
    { title: 'Home', url: '/' },
    { title: 'Documentação', url: '/documentation' },
    { title: 'Projetos', url: '/projects' },
    { title: 'Certificações', url: '/certifications' },
    { title: 'Contato', url: '/contact' },
];

// Ícone de Lupa para a barra de pesquisa
const SearchIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L461.7 457c9.5 9.5 9.5 25 0 34.5s-25 9.5-34.5 0L331.3 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
    </svg>
);

// Ícone de Sino (Notificações)
const BellIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path fill="currentColor" d="M224 512c35.3 0 64-28.7 64-64H160c0 35.3 28.7 64 64 64zm-32-160V144c0-44.2 35.8-80 80-80s80 35.8 80 80v208h-32v-208c0-26.5-21.5-48-48-48s-48 21.5-48 48v208h-32zM448 352V304c0-67.4-44.1-125.7-106.8-144.3C338.1 145.4 352 110.1 352 72C352 32.2 319.8 0 280 0c-45.1 0-81.8 35-80 79c-.1 37.3 12.8 72.8 36.4 103C174 178.3 128 236.6 128 304v48h-32v32h384V352h-32z"/>
    </svg>
);

// Ícone de Usuário (Perfil)
const UserIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
    </svg>
);


const NavBar = () => { // Componente principal de navegação
  return (
    <>
      {/* CSS embutido para estilo e responsividade */}
      <style>{`
        /* -------------------------------------- */
        /* Estilos da Navbar */
        /* -------------------------------------- */
        :root {
            --color-sky-600: #0ea5e9;
            --color-white: #ffffff;
            --color-gray-200: #e5e7eb;
            --color-gray-500: #6b7280;
            --color-black: #000000;
        }
        
        body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', sans-serif;
        }

        .navbar-container {
            background-color: var(--color-sky-600); /* Sky 600 */
            padding: 15px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        /* Título/Marca */
        .navbar-brand {
            color: var(--color-white);
            font-size: 1.5rem;
            font-weight: 700;
            text-decoration: none;
            white-space: nowrap;
        }

        /* Links de Navegação */
        .navbar-links {
            display: flex;
            gap: 20px;
            margin-left: 30px;
            align-items: center;
        }

        .nav-link {
            color: var(--color-white);
            font-size: 0.95rem;
            font-weight: 500;
            text-decoration: none;
            padding: 5px 0;
            position: relative;
            transition: color 0.2s;
        }

        .nav-link:hover {
            color: #f0f9ff; /* Sky 50 Light */
        }
        
        /* Efeito de Sublinhado no Hover */
        .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0; /* Ajustado para ficar na parte inferior do padding */
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--color-white);
            transition: width 0.2s ease-out;
        }

        .nav-link:hover::after {
            width: 100%;
        }


        /* Contêiner Central (Pesquisa) */
        .navbar-center {
            flex-grow: 1;
            display: flex;
            justify-content: center;
            max-width: 600px;
            margin: 0 30px; /* Adiciona margem entre links/marca e ícones de ação */
        }

        /* Barra de Pesquisa */
        .search-bar {
            display: flex;
            align-items: center;
            width: 100%;
            background-color: var(--color-white);
            border: 1px solid var(--color-gray-200); 
            border-radius: 0;
            overflow: hidden;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }

        .search-input {
            flex-grow: 1;
            padding: 10px 15px;
            border: none;
            outline: none;
            font-size: 1rem;
        }

        .search-button {
            background-color: var(--color-white);
            border: none;
            padding: 10px 15px;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        
        .search-button:hover {
            box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
        }

        .search-button .icon {
            width: 20px;
            height: 20px;
            color: var(--color-gray-500);
        }

        /* Contêiner da Direita (Ícones de Ação) */
        .navbar-actions {
            display: flex;
            gap: 15px;
        }

        .action-icon {
            background-color: transparent;
            border: none;
            color: var(--color-white);
            padding: 8px;
            cursor: pointer;
            transition: background-color 0.2s;
            border-radius: 4px;
            line-height: 1;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .action-icon:hover {
            background-color: rgba(255, 255, 255, 0.15);
        }
        
        .action-icon .icon {
            width: 22px;
            height: 22px;
        }

        /* Responsividade (Mobile) */
        @media (max-width: 1024px) {
            .navbar-links {
                /* Oculta links em telas menores para priorizar marca e pesquisa */
                display: none; 
            }
        }
        
        @media (max-width: 768px) {
            .navbar-container {
                padding: 10px 15px;
                /* Permite quebra de linha */
                flex-wrap: wrap; 
            }
            .navbar-brand {
                font-size: 1.25rem;
                margin-right: 15px;
            }
            .navbar-center {
                /* Ocupa a linha abaixo da marca/ações em telas pequenas */
                flex-basis: 100%; 
                order: 2; /* Move a pesquisa para baixo */
                margin: 10px 0 0 0;
            }
            .navbar-actions {
                order: 1; 
                margin-left: auto; /* Empurra para a direita */
            }
            .search-input {
                padding: 8px 10px;
                font-size: 0.9rem;
            }
        }
      `}</style>

      <nav className="navbar-container">
        
        {/* Marca/Título */}
        <a href="/" className="navbar-brand">
          SENIOR DEV
        </a>
        
        {/* Links de Navegação */}
        <div className="navbar-links">
            {navItems.map((item) => (
                <a key={item.title} href={item.url} className="nav-link">
                    {item.title}
                </a>
            ))}
        </div>


        {/* Barra de Pesquisa Central */}
        <div className="navbar-center">
          <div className="search-bar">
            <input
              type="text"
              className="search-input"
              placeholder="Buscar módulos ou certificações..."
            />
            <button className="search-button" aria-label="Buscar">
              <SearchIcon className="icon" />
            </button>
          </div>
        </div>

        {/* Ícones de Ação da Direita */}
        <div className="navbar-actions">
          <button className="action-icon" aria-label="Notificações">
            <BellIcon className="icon" />
          </button>
          <button className="action-icon" aria-label="Perfil do Usuário">
            <UserIcon className="icon" />
          </button>
        </div>

      </nav>
    </>
  );
};

export default NavBar;
