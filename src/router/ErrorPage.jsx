import { useRouteError } from 'react-router-dom';


import '../styles/ErrorPage.css';

// Ícone de Alerta/Exclamação
const AlertIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M256 32c142.4 0 256 113.8 256 254.5c0 142.9-113.8 256-256 256S0 430.7 0 256C0 113.8 113.8 32 256 32zm0 432c110.5 0 200-89.5 200-200S366.5 78 256 78s-200 89.5-200 200s89.5 200 200 200zm-24-290.4v136.8c0 13.3 10.7 24 24 24s24-10.7 24-24V173.6c0-13.3-10.7-24-24-24s-24 10.7-24 24zm24 212.8c-15.5 0-28 12.5-28 28s12.5 28 28 28s28-12.5 28-28s-12.5-28-28-28z"/>
  </svg>
);

// Ícone de Home (para o botão)
const HomeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
    <path fill="currentColor" d="M575.8 255.6c0 1.5-.1 3-.3 4.5l-42.7 159.9c-2.8 10.5-12.2 18-23.3 18H376c-13.3 0-24 10.7-24 24V448c0 17.7-14.3 32-32 32H256c-17.7 0-32-14.3-32-32V424c0-13.3-10.7-24-24-24H106.5c-11.1 0-20.5-7.5-23.3-18L40.5 260.1c-.2-1.5-.3-3-.3-4.5c0-18.7 15.2-33.9 33.9-33.9H256V192c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v32H541.9c18.7 0 33.9 15.2 33.9 33.9zM256 64V32c0-17.7-14.3-32-32-32H128C57.3 0 0 57.3 0 128v144l68.5 25.8c5.4 2 11 3.2 16.7 3.2H416c13.3 0 24-10.7 24-24V64c0-17.7-14.3-32-32-32H288c-17.7 0-32 14.3-32 32z"/>
  </svg>
);


const ErrorPage = () => {

  const error = useRouteError();
  console.error(error);
  
  return (
    <div className="error-container">
        
        <div className="error-card">
          
          <div className="error-header">
            <AlertIcon className="alert-icon" />
            <h1>Erro 404 - Página Não Encontrada</h1>
            <p>O recurso que você tentou acessar não existe ou foi movido.</p>
          </div>

          <div className="error-body">
              <p>Parece que o endereço que você digitou pode estar incorreto, ou a página não está mais disponível.</p>
              <p>Se você acredita que isso é um erro, por favor, verifique o URL ou volte para a página inicial.</p>
          </div>

          <div>
            {/* Usamos um link simulado para a home (/) */}
            <a href="/" className="home-button">
              <HomeIcon className="icon-btn" /> 
              Voltar à Página Inicial
            </a>
          </div>
        </div>
      </div>
    
  );
};

export default ErrorPage;
