import { Link } from 'react-router-dom';
import './MenuNav.css';

const fechaMenu = () => {
    document.getElementById('menuNav').style.display = 'none';
}

const MenuNav = () => {

    return (
        <nav id='menuNav'>
            <button onClick={fechaMenu} id='botaoFechar'>X</button>
            <Link className='linksTipoDeProduto' to="listaProdutosSaias">Saias</Link>
            <Link className='linksTipoDeProduto' to="listaProdutosShorts">Shorts</Link>
            <Link className='linksTipoDeProduto' to="listaProdutosCalcas">Calças</Link>
            <Link className='linksTipoDeProduto' to="listaProdutosCamisas">Camisas</Link>
            <Link className='linksTipoDeProduto' to="listaProdutosBlusas">Blusas</Link>
            <Link className='linksTipoDeProduto' to="listaProdutosVestidos">Vestidos</Link>
            <Link className='linksTipoDeProduto' to="listaProdutosJaquetas">Jaquetas</Link>

            <a className='linksSecoes' href="#contato">Contato</a>
            <Link className='linksSecoes' to="listaProdutos">Sobre</Link>
            <Link className='linksSecoes' to="listaProdutos">Cadastrar</Link>
        </nav>
    );
};

export default MenuNav;