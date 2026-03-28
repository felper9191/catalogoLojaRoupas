import React from 'react';
import { useParams } from 'react-router-dom';
import { listaProdutos } from '../dados/produtos';
import './PaginaCategoria.css'; // Crie um CSS padrão para a grade

const PaginaCategoria = () => {
  const { tipo } = useParams(); // Pega o nome da categoria da URL

  // Filtra os produtos. Se não houver 'tipo' na URL, podemos mostrar todos ou lançamentos
  const produtosFiltrados = listaProdutos.filter(
    (item) => item.categoria === tipo
  );

  return (
    <section className="container-produtos">
      <h2 className="titulo-categoria">{tipo?.toUpperCase() || "CATÁLOGO"}</h2>
      
      <div className="grid-produtos">
        {produtosFiltrados.length > 0 ? (
          produtosFiltrados.map((produto) => (
            <div key={produto.id} className="card-produto">
              <img src={produto.caminho} alt={produto.nome} />
              <h3>{produto.nome}</h3>
              <p className="preco">
                {produto.preco.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </p>
              <button className="btn-comprar">Comprar</button>
            </div>
          ))
        ) : (
          <p>Nenhum produto encontrado nesta categoria.</p>
        )}
      </div>
    </section>
  );
};

export default PaginaCategoria;