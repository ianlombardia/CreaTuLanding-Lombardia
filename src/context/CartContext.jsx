import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, qty) => {
        if (isInCart(item.id)) {
            setCart(cart.map(prod => {
                if (prod.id === item.id) {
                    return { ...prod, quantity: prod.quantity + qty };
                }
                return prod;
            }));
        } else {
            setCart([...cart, { ...item, quantity: qty }]);
        }
    };

    const updateItemQuantity = (id, qty) => {
        if (qty <= 0) {
            removeItem(id);
        } else {
            setCart(cart.map(prod => {
                if (prod.id === id) {
                    return { ...prod, quantity: qty };
                }
                return prod;
            }));
        }
    };

    const increaseItemQuantity = (id) => {
        setCart(cart.map(prod => {
            if (prod.id === id) {
                return { ...prod, quantity: prod.quantity + 1 };
            }
            return prod;
        }));
    };

    const decreaseItemQuantity = (id) => {
        setCart(cart.map(prod => {
            if (prod.id === id) {
                const newQty = prod.quantity - 1;
                if (newQty <= 0) {
                    return null;
                }
                return { ...prod, quantity: newQty };
            }
            return prod;
        }).filter(Boolean));
    };

    const clear = () => {
        setCart([]);
    };

    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id));
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    };

    const total = () => {
        return cart.reduce((acc, prod) => acc + (prod.quantity * prod.price), 0);
    };

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            updateItemQuantity,
            increaseItemQuantity,
            decreaseItemQuantity,
            clear,
            removeItem,
            cartQuantity,
            total
        }}>
            {children}
        </CartContext.Provider>
    );
};
