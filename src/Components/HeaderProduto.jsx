import { useCart } from '../Context/CartContext';
import { useSearch } from "../Context/SearchContext";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import "./HeaderProduto.css";

const HeaderProduto = (props) => {
    const { searchTerm, setSearchTerm, ordenacao, setOrdenacao } = useSearch();
    const { quantidadeTotal } = useCart();

    return (
        <div className="cabecalhoProduto">
            <h2 className="tituloProduto">{props.nomeProduto}</h2>
            <div className="areaIcones">
                <div className="controleBuscaGrupo">
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
                    <div className="containerBuscaIcone">
                        <input 
                            type="text" 
                            value={searchTerm} 
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="campoBusca"
                            placeholder="Buscar produtos..."
                        />
                        <span className="iconeBuscaContainer">
                            <FaSearch className="iconsHeaderProduto" />
                        </span>
                    </div>
                </div>

                <div className="grupoIcones">
                    <button type="button" className="iconBotao" aria-label="Perfil">
                        <FaUser className="iconsHeaderProduto" />
                    </button>

                    <button type="button" className="iconeCarrinhoContainer" aria-label="Carrinho">
                        <FaShoppingCart className="iconsHeaderProduto" />
                        {quantidadeTotal > 0 && (
                            <span className="badgeCarrinho">{quantidadeTotal}</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeaderProduto;
