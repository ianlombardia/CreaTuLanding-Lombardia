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
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import Checkout from './components/Checkout';
import Footer from './components/footer';

function App() {


  return (
    <BrowserRouter>
    <CartProvider>
      <NavBarBoost />
      <Routes>
        <Route path='/' element={<ItemListContainer mensaje='12 STORE'/>} />
        <Route path='/categories/:category' element={<ItemListContainer mensaje='12 STORE' />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<CartContainer />} />
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='*' element={<ErrorComponent />} />
      </Routes>
      
      <Footer/>
    </CartProvider>

    </BrowserRouter>

  )
}

export default App