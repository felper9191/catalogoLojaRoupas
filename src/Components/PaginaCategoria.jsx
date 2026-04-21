import { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from 'react-router-dom';
import { useSearch } from "../Context/SearchContext";
import { listaProdutos } from "../dados/produtos"; // O array unificado

import Produto from "../Components/Produto";
import HeaderProduto from "../Components/HeaderProduto";
import "./PaginaCategoria.css"

const PaginaCategoria = () => {
    const { tipo } = useParams(); // Pega 'blusas', 'saias', etc., da URL
    const { searchTerm, setSearchTerm } = useSearch();
    const location = useLocation();

    const topoDaPaginaRef = useRef(null);
    // 1. Estado para a paginação (limite inicial de 8 itens)
    const [quantidadeExibida, setQuantidadeExibida] = useState(8);

    // 2. Resetar busca e paginação sempre que mudar de categoria (URL)
    useEffect(() => {
        setSearchTerm(''); 
        setQuantidadeExibida(8); // Volta para 8 itens quando trocar de 'blusas' para 'saias'
    }, [location.pathname, tipo, setSearchTerm]);

    // 3. LOGICA DE FILTRAGEM
    // Primeiro filtramos pela categoria da URL, depois pelo termo de busca
    const produtosDaCategoria = tipo 
        ? listaProdutos.filter(item => item.categoria === tipo) 
        : listaProdutos; // Se não tem tipo (Home), pega o array inteiro
    
    const filteredList = produtosDaCategoria.filter((item) => 
        item.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // 4. Aplicar o limite da paginação (slice)
    const produtosVisiveis = filteredList.slice(0, quantidadeExibida);

    const carregarMais = () => {
        setQuantidadeExibida(prev => prev + 8);
    };

    const tituloExibido = tipo 
        ? tipo.charAt(0).toUpperCase() + tipo.slice(1) 
        : "Nosso Catálogo"; // Título padrão para a Home

    return (
        <div className="listaDeProdutos" ref={topoDaPaginaRef}>
            {/* O título agora é dinâmico com base na URL */}
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
                            path={value.caminho} 
                            nome={value.nome} 
                            preco={value.preco.toFixed(2).replace('.', ',')} 
                            id={value.id}
                        />
                    ))
                ) : (
                    <p>Nenhum produto encontrado.</p>
                )}
            </div> 

            {/* O botão só aparece se houver mais itens para carregar do que os que estão na tela */}
            {quantidadeExibida < filteredList.length && (
                <button id="carregarMais" onClick={carregarMais}>
                    Carregar Mais
                </button>
            )}
        </div>
    );
};

export default PaginaCategoria;