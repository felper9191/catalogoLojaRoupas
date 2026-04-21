import { Link } from 'react-router-dom';
import './Produto.css';

const Produto = ({ path, nome, preco }) => {
    return (
        <div className='produto'>
            <Link to={`/produto/${props.id}`}>
                <div className='conteinerFoto'>
                    <img className="fotoProduto" src={props.path} alt={props.nome}/>
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