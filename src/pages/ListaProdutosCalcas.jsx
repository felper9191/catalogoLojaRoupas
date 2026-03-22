import { useState } from "react";
import Produto from "../Components/Produto";
import './ListaProdutos.css';
import { calcas } from "./ListaTodosProdutos";
import HeaderProduto from "../Components/HeaderProduto";
import { useSearch } from "../Context/SearchContext";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ListaProdutosCalcas = () => {

    const [maisCalcas, setMaisCalcas] = useState(8);
    const { searchTerm, setSearchTerm } = useSearch();
    const location = useLocation();

    const carregarMais = () => {
        setMaisCalcas(maisCalcas + 8);
    }
    
    useEffect(() => {
        setSearchTerm(''); // Redefine o valor do input
    }, [location, setSearchTerm]);

    const filteredList = calcas
        .filter((item) => item.nome.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice(0, maisCalcas);

    return (
        <div className="listaDeProdutos">
            <HeaderProduto nomeProduto = "Calças" />
            <p className="quantidadeItens">{filteredList.length} itens</p>
            <div className="conteinerProduto">
                {filteredList.length > 0 && filteredList.map((value) => <Produto className="caixaProduto" key={value.id} path={value.caminho} nome={value.nome} preco={value.preco} linkDetalhes={`/listaprodutoscalcas/${value.id}`} />)}
            </div> 
            <button id="carregarMais" onClick={carregarMais}>Carregar Mais</button> 
        </div>
    );
};

export default ListaProdutosCalcas;