import { useState } from "react";
import Produto from "../Components/Produto";
import './ListaProdutos.css';
import { jaquetas } from "./ListaTodosProdutos";
import HeaderProduto from "../Components/HeaderProduto";
import { useSearch } from "../Context/SearchContext";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ListaProdutosJaquetas = () => {

    const [maisJaquetas, setMaisJaquetas] = useState(8);
    const { searchTerm, setSearchTerm } = useSearch();
    const location = useLocation();

    const carregarMais = () => {
        setMaisJaquetas(maisJaquetas + 8);
    }

    useEffect(() => {
        setSearchTerm(''); // Redefine o valor do input
    }, [location, setSearchTerm]);
    
    const filteredList = jaquetas
        .filter((item) => item.nome.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice(0, maisJaquetas);

    return (
        <div className="listaDeProdutos">
            <HeaderProduto nomeProduto = "Jaquetas" />
            <p className="quantidadeItens">{filteredList.length} itens</p>
            <div className="conteinerProduto">
                {filteredList.length > 0 && filteredList.map((value) => <Produto className="caixaProduto" key={value.id} path={value.caminho} nome={value.nome} preco={value.preco} />)}
            </div> 
            <button id="carregarMais" onClick={carregarMais}>Carregar Mais</button> 
        </div>
    );
};

export default ListaProdutosJaquetas;