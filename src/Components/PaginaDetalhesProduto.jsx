import { useParams, useNavigate } from 'react-router-dom';
import { listaProdutos } from '../dados/produtos'; // Seu array unificado
import HeaderProduto from '../Components/HeaderProduto';
import './PaginaDetalhesProduto.css';

const PaginaDetalhesProduto = () => {
    const { id } = useParams(); // Pega o ID da URL (ex: /produto/5)
    const navigate = useNavigate();

    // Procuramos o produto dentro do array unificado usando o ID
    // Usamos Number(id) porque o que vem da URL é uma string
    const produto = listaProdutos.find(item => item.id === Number(id));

    // Caso o produto não seja encontrado (ex: o usuário digitou um ID que não existe)
    if (!produto) {
        return (
            <div className="produtoNaoEncontrado">
                <h2>Ops! Produto não encontrado.</h2>
                <button onClick={() => navigate('/')}>Voltar para a loja</button>
            </div>
        );
    }

    return (
        <div className="paginaDetalhes">
            {/* Reaproveitamos seu Header, passando o nome do produto como título */}
            <HeaderProduto nomeProduto={produto.nome} />

            <div className="containerDetalhes">
                <div className="imagemProduto">
                    <img src={produto.caminho} alt={produto.nome} />
                </div>

                <div className="infoProduto">
                    <h1 className="nomeDetalhe">{produto.nome}</h1>
                    <p className="categoriaDetalhe">Categoria: {produto.categoria}</p>
                    <p className="precoDetalhe">R$ {produto.preco.toFixed(2).replace('.', ',')}</p>
                    
                    <div className="descricaoFicticia">
                        <h3>Descrição</h3>
                        <p>Este é um item exclusivo da nossa coleção de {produto.categoria}. 
                        Produzido com materiais de alta qualidade para garantir conforto e estilo.</p>
                    </div>

                    <button className="botaoComprar">Adicionar ao Carrinho</button>
                    
                    <button className="botaoVoltar" onClick={() => navigate(-1)}>
                        ← Voltar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaginaDetalhesProduto;