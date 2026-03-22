import { useSearch } from "../Context/SearchContext";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import "./HeaderProduto.css";

const HeaderProduto = (props) => {
    const { searchTerm, setSearchTerm } = useSearch();

    return (
        <div className="cabecalhoProduto">
            <h2 className="tituloProduto">{props.nomeProduto}</h2>
            <div className="areaIcones">
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
