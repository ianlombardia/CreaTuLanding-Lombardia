import { Nav } from 'react-bootstrap';
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarBoost from './components/NavBarBoost';
import ItemCount from './components/ItemCount';
import { useEffect } from 'react';
import FetchCountry from './examples/FetchCountry';
import FetchApi from './examples/FetchApi';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorComponent from './components/ErrorComponent';

function App() {


  return (
    <BrowserRouter>
      <NavBarBoost />
      <Routes>
        <Route path='/' element={<ItemListContainer mensaje='12 Store' />} />
        <Route path='/categories/:category' element={<ItemListContainer mensaje='12 Store' />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='*' element={<ErrorComponent />} />


      </Routes>


    </BrowserRouter>

  )
}

export default App