import {Badge} from 'react-bootstrap';
import { PiShoppingCartBold } from "react-icons/pi";

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <PiShoppingCartBold color='white' fontSize={'1.5rem'}/>
            <Badge bg="success">55</Badge>
            
        </div>
    );
}

export default CartWidget;