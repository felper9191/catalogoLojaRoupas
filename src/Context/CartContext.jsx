import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // Começamos com um carrinho vazio
    const [carrinho, setCarrinho] = useState([]);

    const adicionarAoCarrinho = (produto) => {
        setCarrinho((carrinhoAtual) => {
            // Verifica se o produto já está no carrinho
            const itemExistente = carrinhoAtual.find(item => item.id === produto.id);

            if (itemExistente) {
                // Se já existe, apenas aumenta a quantidade em +1
                return carrinhoAtual.map(item =>
                    item.id === produto.id
                        ? { ...item, quantidade: item.quantidade + 1 }
                        : item
                );
            }

            // Se é um produto novo, adiciona ele no array com quantidade: 1
            return [...carrinhoAtual, { ...produto, quantidade: 1 }];
        });
    };

    // Calcula quantos itens tem no total (ex: 2 blusas + 1 calça = 3 itens)
    const quantidadeTotal = carrinho.reduce((total, item) => total + item.quantidade, 0);

    return (
        <CartContext.Provider value={{ carrinho, adicionarAoCarrinho, quantidadeTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);