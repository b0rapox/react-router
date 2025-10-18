import React, { useState } from 'react';

// Dados simulados para os cards
const initialArticles = [
  { id: 1, title: 'Revisão Arquitetural de 2025', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 2, title: 'A Persistência do React Puro', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.' },
  { id: 3, title: 'SWC vs Babel: Velocidade e Tradição', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
];

// Ícone de Olho (Visualizar)
const EyeIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path fill="currentColor" d="M288 80c-78.2 0-149.2 46.5-179.9 119.5C80.8 214.8 80 223 80 231.2v4.7c0 8.2 .8 16.5 13.1 31.7c30.7 73 101.7 119.5 179.9 119.5c78.2 0 149.2-46.5 179.9-119.5c12.3-15.2 13.1-23.5 13.1-31.7v-4.7c0-8.2-.8-16.5-13.1-31.7C437.2 126.5 366.2 80 288 80zM352 288c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zm-64-160c159.1 0 288 128.9 288 288s-128.9 288-288 288S0 459.1 0 288S128.9 0 288 0z"/>
    </svg>
);

// Componente Card para os artigos
const ArticleCard = ({ article, onReadMore }) => (
    <div className="card">
        <h3>{article.title}</h3>
        <p className="card-text">{article.text}</p>
        <button className="card-button" onClick={() => onReadMore(article.id)}>
            <EyeIcon className="icon" /> Ler Mais
        </button>
    </div>
);


function App() {
  const [articles, setArticles] = useState(initialArticles);
  const [readArticleId, setReadArticleId] = useState(null);

  // Exemplo de função que simula uma ação (visitar o artigo)
  const handleReadMore = (id) => {
    setReadArticleId(id);
    // Em um app real, isso usaria react-router-dom: navigate(`/artigo/${id}`);
    console.log(`Artigo ${id} lido. Esta é a funcionalidade de exemplo.`);
  };

  return (
    <div className="app-container">
        <header className="app-header">
          <h1>Dashboard de Engenharia</h1>
          <p>Visão tradicional sobre artigos de arquitetura e performance.</p>
        </header>
        
        <section className="cards-section">
          {articles.map(article => (
            <div 
                key={article.id} 
                data-read={readArticleId === article.id}
                className="card-wrapper"
            >
                <ArticleCard 
                    article={article} 
                    onReadMore={handleReadMore} 
                />
            </div>
          ))}
        </section>
        
        {/* Placeholder de status de leitura */}
        <p style={{marginTop: '40px', color: '#4b5563', fontSize: '0.9rem'}}>
            Artigo lido: {readArticleId ? `ID ${readArticleId}` : 'Nenhum selecionado'}
        </p>

      </div>
    
  );
}

export default App;
