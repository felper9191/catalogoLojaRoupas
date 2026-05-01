import { useEffect } from "react";
import { useParams, useLocation, useSearchParams } from 'react-router-dom';
import { useSearch } from "../Context/SearchContext";
import { listaProdutos } from "../dados/produtos"; 

import Produto from "../Components/Produto";
import HeaderProduto from "../Components/HeaderProduto";
import "./PaginaCategoria.css"

const PaginaCategoria = () => {
    const { tipo } = useParams(); 
    const { searchTerm, setSearchTerm } = useSearch();
    const location = useLocation();
    
    // Gerencia a URL para manter a quantidade de itens ao voltar a página
    const [searchParams, setSearchParams] = useSearchParams();
    const quantidadeExibida = parseInt(searchParams.get('limit')) || 8;

    // Apenas limpa a barra de busca ao trocar de categoria
    useEffect(() => {
        setSearchTerm(''); 
    }, [location.pathname, setSearchTerm]);

    // LÓGICA DE FILTRAGEM
    const produtosDaCategoria = tipo 
        ? listaProdutos.filter(item => item.categoria === tipo) 
        : listaProdutos; 
    
    const filteredList = produtosDaCategoria.filter((item) => 
        item.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Aplica o limite baseado na URL
    const produtosVisiveis = filteredList.slice(0, quantidadeExibida);

    const carregarMais = () => {
        setSearchParams(parametrosAnteriores => {
            parametrosAnteriores.set('limit', quantidadeExibida + 8);
            return parametrosAnteriores;
        });
    };

    const tituloExibido = tipo 
        ? tipo.charAt(0).toUpperCase() + tipo.slice(1) 
        : "Nosso Catálogo"; 

    return (
        <div className="listaDeProdutos">
            <HeaderProduto nomeProduto={tituloExibido} />
            
            <p className="quantidadeItens">
                Exibindo {produtosVisiveis.length} de {filteredList.length} produtos
            </p>
            
            <div className="conteinerProduto">
                {produtosVisiveis.length > 0 ? (
                    produtosVisiveis.map((value) => (
                        <Produto 
                            className="caixaProduto" 
                            key={value.id} 
                            id={value.id}
                            path={value.caminho} 
                            nome={value.nome} 
                            preco={value.preco} 
                        />
                    ))
                ) : (
                    <p>Nenhum produto encontrado.</p>
                )}
            </div> 

            {quantidadeExibida < filteredList.length && (
                <button id="carregarMais" onClick={carregarMais}>
                    Carregar Mais
                </button>
            )}
        </div>
    );
};

export default PaginaCategoria;