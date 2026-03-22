import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import './index.css';
import ListaProdutosHome from './pages/ListaProdutosHome.jsx';
import ListaProdutosSaias from './pages/ListaProdutosSaias.jsx';
import ListaProdutosBlusas from './pages/ListaProdutosBlusas.jsx';
import ListaProdutosCalcas from './pages/ListaProdutosCalcas.jsx';
import ListaProdutosVestidos from './pages/ListaProdutosVestidos.jsx';
import ListaProdutosShorts from './pages/ListaProdutosShorts.jsx';
import ListaProdutosCamisas from './pages/ListaProdutosCamisas.jsx';
import ListaProdutosJaquetas from './pages/ListaProdutosJaquetas.jsx';
import ListaProdutosLancamentos from './pages/ListaProdutosLancamentos.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';
import { SearchProvider } from './Context/SearchContext.jsx';
import PaginaDetalhesProduto from './Components/PaginaDetalhesProduto.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchProvider>  {/* Envolvendo com o SearchProvider */}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<App />}>
            <Route path='/' element={<ListaProdutosHome />} />
            <Route path='listaProdutosLancamentos' element={<ListaProdutosLancamentos />} />
            <Route path='listaProdutosBlusas' element={<ListaProdutosBlusas />} />
            <Route path='listaProdutosSaias' element={<ListaProdutosSaias />} />
            <Route path='listaProdutosCalcas' element={<ListaProdutosCalcas />} />
            <Route path='listaProdutosJaquetas' element={<ListaProdutosJaquetas />} />
            <Route path='listaProdutosShorts' element={<ListaProdutosShorts />} />
            <Route path='listaProdutosVestidos' element={<ListaProdutosVestidos />} />
            <Route path='listaProdutosCamisas' element={<ListaProdutosCamisas />} />
            <Route path="listaProdutosCalcas/:id" element={<PaginaDetalhesProduto />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SearchProvider>
  </React.StrictMode>,
);
