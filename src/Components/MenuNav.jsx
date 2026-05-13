import { Link } from 'react-router-dom';
import './MenuNav.css';

const fechaMenu = () => {
    document.getElementById('menuNav').style.display = 'none';
}

const MenuNav = () => {

    return (
        <nav id='menuNav'>
            <button onClick={fechaMenu} id='botaoFechar'>X</button>
            <Link className='linksTipoDeProduto' to="/produtos/saias">Saias</Link>
            <Link className='linksTipoDeProduto' to="/produtos/shorts">Shorts</Link>
            <Link className='linksTipoDeProduto' to="/produtos/calcas">Calças</Link>
            <Link className='linksTipoDeProduto' to="/produtos/camisas">Camisas</Link>
            <Link className='linksTipoDeProduto' to="/produtos/blusas">Blusas</Link>
            <Link className='linksTipoDeProduto' to="/produtos/vestidos">Vestidos</Link>
            <Link className='linksTipoDeProduto' to="/produtos/jaquetas">Jaquetas</Link>

            <Link className='linksSecoes' to="#">Contato</Link>
            <Link className='linksSecoes' to="#">Sobre</Link>
            <Link className='linksSecoes' to="#">Cadastrar</Link>
        </nav>
    );
};

export default MenuNav;