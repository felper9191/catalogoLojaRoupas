import { Link } from 'react-router-dom';
import './Produto.css';

const Produto = ({ path, nome, preco, linkDetalhes }) => {
    return (
        <div className='produto'>
            <Link to={linkDetalhes}>
                <div className='conteinerFoto'>
                    <img className="fotoProduto" src={path}/>
                </div>

                <div className="descricaoProduto">
                    <p>
                        {nome}
                    </p>
                    <p>
                        R$ {preco}
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default Produto;