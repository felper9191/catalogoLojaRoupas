import { Link } from 'react-router-dom';
import './Lancamentos.css';

const Lancamentos = () => {
    return (
        <div className="sessaoLancamentos">
            <h2 className='tituloLancamentos'>Lançamentos</h2>
            <Link className="verLancamentos" to="/produtos/lancamentos">Conferir</Link>
        </div>
    );
};

export default Lancamentos;