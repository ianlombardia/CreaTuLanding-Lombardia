import './App.css'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarBoost from './components/NavBarBoost';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorComponent from './components/ErrorComponent';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
// import Checkout from './components/Checkout';
import Footer from './components/footer';
import { Toaster } from 'react-hot-toast';
import CheckoutHookForm from './components/CheckoutHookForm';

function App() {


  return (
    <BrowserRouter>
    <CartProvider>
      <NavBarBoost />
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path='/' element={<ItemListContainer mensaje='12 STORE'/>} />
        <Route path='/categories/:category' element={<ItemListContainer mensaje='12 STORE' />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<CartContainer />} />
        <Route path='/Checkout' element={<CheckoutHookForm />} />
        <Route path='*' element={<ErrorComponent />} />
      </Routes>
      
      <Footer/>
    </CartProvider>

    </BrowserRouter>

  )
}

export default App