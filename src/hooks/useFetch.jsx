import { useState, useEffect } from 'react';

/**
 * Hook personalizado para lidar com a busca de dados de uma API REST.
 * * Este hook encapsula a lógica de estado (loading, data, error) e
 * a busca assíncrona, garantindo a separação de preocupações (Single Responsibility).
 *
 * @param {string} url - O endpoint da API a ser consultado.
 * @returns {{ data: any[], loading: boolean, error: string | null, refetch: () => void }}
 */
const useFetch = (url) => {
    // 1. Estados para gerenciar o ciclo de vida da requisição
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Estado utilizado para forçar uma nova busca (re-execução do useEffect)
    const [fetchKey, setFetchKey] = useState(0);

    // Função para forçar a re-execução da busca
    const refetch = () => setFetchKey(prev => prev + 1);

    useEffect(() => {
        // Sinal de aborto para evitar vazamentos de memória (componentes desmontados)
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = async () => {
            // Garante que o estado de erro seja limpo e o loading seja ativado
            setError(null);
            setLoading(true);

            try {
                // A porta padrão do json-server é 3000.
                const response = await fetch(url, { signal });
                
                if (!response.ok) {
                    // Lançar um erro se o status HTTP não for 2xx
                    throw new Error(`Falha na requisição: ${response.status} ${response.statusText}`);
                }

                const result = await response.json();
                
                // Em um projeto de Sênior, validamos a estrutura. Assumindo que o retorno é um array.
                if (Array.isArray(result)) {
                    setData(result);
                } else {
                    console.error("Dados recebidos não são um array:", result);
                    throw new Error("Formato de dados inesperado da API.");
                }
                
            } catch (err) {
                // Ignorar o erro se foi um abortamento intencional (componente desmontado)
                if (err.name !== 'AbortError') {
                    console.error("Erro ao buscar dados:", err);
                    setError(err.message || 'Erro desconhecido durante o fetch.');
                }
            } finally {
                // Garante que o estado de loading seja desativado, independente do resultado
                if (!signal.aborted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        // Limpeza: aborta a requisição se o componente for desmontado
        return () => {
            abortController.abort();
        };
    // Adicionamos 'url' e 'fetchKey' como dependências. 
    // 'fetchKey' permite forçar a busca (refetch) quando dados são alterados via POST/PUT/DELETE.
    }, [url, fetchKey]); 

    return { data, loading, error, refetch };
};

export default useFetch;
