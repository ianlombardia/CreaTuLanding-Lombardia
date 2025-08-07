import "../css/NavBar.css";
import CartWidget from "./CartWidget";

const NavBar = () => {

    return (
        <nav className='nav-container'>
            <img src='../logo-boca.png' alt='Logo' />


            <a className='nav-a'>NUEVOS</a>
            <a className='nav-a'>FUTBOL</a>
            <a className='nav-a'>BASQUET</a>
            <a className='nav-a'>ACCESORIOS</a>

            <CartWidget />
            

        </nav>


    )
}
export default NavBar;