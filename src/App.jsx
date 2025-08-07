import { Nav } from 'react-bootstrap';
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarBoost from './components/NavBarBoost';


function App() {


  return (
    <>
    <NavBarBoost/>
      <ItemListContainer mensaje='Bienvenido a mi app'/>

    </>
  )
}


export default App

