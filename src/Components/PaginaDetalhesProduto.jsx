import { useParams } from 'react-router-dom';

const PaginaDetalhesProduto = () => {

    let listaProdutos = [];
    listaProdutos = blusas.concat(calcas, camisas, jaquetas, saias, shorts, vestidos, lancamentos);

    const { id } = useParams(); // Obtém a categoria e o ID
    const produto = listaProdutos.find((item) => item.id === parseInt(id));
   // Encontra o produto correspondente
  
    if (!produto) {
      return <p>Produto não encontrado.</p>; // Se o id for inválido
    }

    return (
        <>
            {produto.length > 0 && produto.map((value, index) => (
                <div className='paginaDetalhes' key={index}>
                    <div className='areaImagens'>

                    </div>
                    <div className='areaDetalhes'>
                        <div className="detalhes">{value.nome}</div>
                        <div className="detalhes">{value.preco}</div>
                        <div className="detalhes">{value.nome}</div>
                        <div className="detalhes">{value.nome}</div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default PaginaDetalhesProduto;