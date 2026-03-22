import { useState } from "react";
import Produto from "../Components/Produto";
import "./ListaProdutos.css";
import { blusas, calcas, camisas, jaquetas, lancamentos, saias, shorts, vestidos } from "./ListaTodosProdutos";
import HeaderProduto from "../Components/HeaderProduto";
import { useSearch } from "../Context/SearchContext";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

let listaHome = [];
listaHome = blusas.concat(calcas, camisas, jaquetas, saias, shorts, vestidos, lancamentos);
listaHome.sort(function() { return 0.5 - Math.random() });

const ListaProdutosHome = () => {
    const [maisProdutos, setMaisProdutos] = useState(8);
    const { searchTerm, setSearchTerm } = useSearch();
    const location = useLocation();

    const carregarMais = () => {
        setMaisProdutos(maisProdutos + 8);
    };

    useEffect(() => {
        setSearchTerm(''); // Redefine o valor do input
    }, [location, setSearchTerm]);

    const filteredList = listaHome
        .filter((item) => item.nome.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice(0, maisProdutos);

    return (
        <div className="listaDeProdutos">
            <HeaderProduto nomeProduto="Início" />
            <p className="quantidadeItens">{filteredList.length} itens</p>
            <div className="conteinerProduto">
                {filteredList.length > 0 && filteredList.map((value, index) => (
                    <Produto className="caixaProduto" key={index} path={value.caminho} nome={value.nome} preco={value.preco} />
                ))}
            </div> 
            <button id="carregarMais" onClick={carregarMais}>Carregar Mais</button>
        </div>  
    );
};

export default ListaProdutosHome;
