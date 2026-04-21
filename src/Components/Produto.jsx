import { Link } from 'react-router-dom';
import './Produto.css';

const Produto = ({ path, nome, preco, id }) => {
    return (
        <div className='produto'>
            <Link to={`/produto/${id}`}>
                <div className='conteinerFoto'>
                    <img className="fotoProduto" src={path} alt={nome}/>
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