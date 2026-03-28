import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import './index.css';

// IMPORTAÇÕES ESSENCIAIS
import ListaProdutosHome from './pages/ListaProdutosHome.jsx';
import PaginaCategoria from './Components/PaginaCategoria.jsx'; // O novo componente único
import PaginaDetalhesProduto from './Components/PaginaDetalhesProduto.jsx';

// COMPONENTES AUXILIARES
import ScrollToTop from './Components/ScrollToTop.jsx';
import { SearchProvider } from './Context/SearchContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<App />}>
            {/* 1. Página Inicial */}
            <Route path="/" element={<ListaProdutosHome />} />

            {/* 2. ROTA DINÂMICA: Substitui todas as listas individuais */}
            {/* O ":tipo" vai aceitar 'blusas', 'saias', 'calcas', etc. */}
            <Route path="produtos/:tipo" element={<PaginaCategoria />} />

            {/* 3. Página de Detalhes (Generalizada) */}
            {/* Agora qualquer produto, de qualquer categoria, usa essa rota */}
            <Route path="produto/:id" element={<PaginaDetalhesProduto />} />

            {/* Rota de fallback (Opcional: para quando o link não existe) */}
            <Route path="*" element={<h2>Página não encontrada</h2>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SearchProvider>
  </React.StrictMode>,
);