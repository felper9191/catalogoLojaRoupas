import { useState } from "react";
import Produto from "../Components/Produto";
import './ListaProdutos.css';
import { lancamentos } from "./ListaTodosProdutos";
import HeaderProduto from "../Components/HeaderProduto";
import { useSearch } from "../Context/SearchContext";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ListaProdutosLancamentos = () => {

    const [maisLancamentos, setMaisLancamentos] = useState(8);
    const { searchTerm, setSearchTerm } = useSearch();
    const location = useLocation();

    const carregarMais = () => {
        setMaisLancamentos(maisLancamentos + 8);
    }

    useEffect(() => {
        setSearchTerm(''); // Redefine o valor do input
    }, [location, setSearchTerm]);
    
    const filteredList = lancamentos
        .filter((item) => item.nome.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice(0, maisLancamentos);

    return (
        <div className="listaDeProdutos">
            <HeaderProduto nomeProduto = "Lançamentos" />
            <p className="quantidadeItens">{filteredList.length} itens</p>
            <div className="conteinerProduto">
                {filteredList.length > 0 && filteredList.map((value) => <Produto className="caixaProduto" key={value.id} path={value.caminho} nome={value.nome} preco={value.preco} />)}
            </div> 
            <button id="carregarMais" onClick={carregarMais}>Carregar Mais</button> 
        </div>
    );
};

export default ListaProdutosLancamentos;