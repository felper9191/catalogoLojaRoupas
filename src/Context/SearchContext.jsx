import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');
    // NOVO: Adicionamos o estado de ordenação com o valor inicial 'padrao'
    const [ordenacao, setOrdenacao] = useState('padrao');

    return (
        <SearchContext.Provider value={{ 
            searchTerm, 
            setSearchTerm, 
            ordenacao,       // Exportando o valor
            setOrdenacao     // Exportando a função que muda o valor
        }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => useContext(SearchContext);