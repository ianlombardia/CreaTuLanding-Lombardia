import {Badge} from 'react-bootstrap';
import { PiShoppingCartBold } from "react-icons/pi";
import ItemCount from './ItemCount';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <PiShoppingCartBold color='white' fontSize={'1.5rem'}/>
            <Badge bg="success">10</Badge>
            
        </div>
    );
}

export default CartWidget;