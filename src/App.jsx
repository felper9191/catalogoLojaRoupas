import { Outlet } from 'react-router-dom';
import './App.css'

import Cabecalho from './Components/Cabecalho';
import Lancamentos from './Components/Lancamentos';
import MenuNav from './Components/MenuNav';
import SecaoContato from './Components/SecaoContato';
import Rodape from './Rodape';

function App() {

  return (
    <>
      <header>
        <Cabecalho />
      </header>
      <main>
        <MenuNav />
        <article>
          <Lancamentos />
          <Outlet />
        </article>
        <SecaoContato />
      </main>
      <Rodape />
    </>
  )
}

export default App
