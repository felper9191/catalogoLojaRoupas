import { GiHamburgerMenu } from "react-icons/gi";

import './Cabecalho.css';
import { Link } from "react-router-dom";

const abreMenu = () => {
    document.getElementById('menuNav').style.display = 'flex';
}

const Cabecalho = () => {
    return (
        <div className="header">
                <Link to="/">
                    <img className="logotipo" src="../../img/logoPrimor.png" />
                </Link>
                <button onClick={abreMenu} className="menuHamburger">
                    <GiHamburgerMenu id="iconHamburger" />
                </button>
        </div>
    );
};

export default Cabecalho;