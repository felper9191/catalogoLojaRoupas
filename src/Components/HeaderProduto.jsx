import { useSearch } from "../Context/SearchContext";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import "./HeaderProduto.css";

const HeaderProduto = (props) => {
    const { searchTerm, setSearchTerm, ordenacao, setOrdenacao } = useSearch();

    return (
        <div className="cabecalhoProduto">
            <h2 className="tituloProduto">{props.nomeProduto}</h2>
            <div className="areaIcones">
                    <select 
                        className="seletorOrdenacao"
                        value={ordenacao} 
                        onChange={(e) => setOrdenacao(e.target.value)}
                    >
                        <option value="padrao">Destaques</option>
                        <option value="menor-preco">Menor Preço</option>
                        <option value="maior-preco">Maior Preço</option>
                        <option value="az">Nome: A-Z</option>
                    </select>

                <FaUser className="iconsHeaderProduto" />
                <FaShoppingCart className="iconsHeaderProduto" />
                <FaSearch className="iconsHeaderProduto" />
                <input 
                    type="text" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="campoBusca" />
            </div>
        </div>
    );
};

export default HeaderProduto;
