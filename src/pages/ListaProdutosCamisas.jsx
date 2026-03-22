import { useState } from "react";
import Produto from "../Components/Produto";
import './ListaProdutos.css';
import { camisas } from "./ListaTodosProdutos";
import HeaderProduto from "../Components/HeaderProduto";
import { useSearch } from "../Context/SearchContext";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ListaProdutosCamisas = () => {

    const [maisCamisas, setMaisCamisas] = useState(8);
    const { searchTerm, setSearchTerm } = useSearch();
    const location = useLocation();

    const carregarMais = () => {
        setMaisCamisas(maisCamisas + 8);
    }

    useEffect(() => {
        setSearchTerm(''); // Redefine o valor do input
    }, [location, setSearchTerm]);
    
    const filteredList = camisas
        .filter((item) => item.nome.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice(0, maisCamisas);

    return (
        <div className="listaDeProdutos">
            <HeaderProduto nomeProduto = "Camisas" />
            <p className="quantidadeItens">{filteredList.length} itens</p>
            <div className="conteinerProduto">
                {filteredList.length > 0 && filteredList.map((value) => <Produto className="caixaProduto" key={value.id} path={value.caminho} nome={value.nome} preco={value.preco} />)}
            </div> 
            <button id="carregarMais" onClick={carregarMais}>Carregar Mais</button> 
        </div>
    );
};

export default ListaProdutosCamisas;