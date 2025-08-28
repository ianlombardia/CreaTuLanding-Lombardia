import { useState, useEffect, use } from "react";






const ItemCount = () =>{
const [count, setCount]= useState(0);
const [compra,setCompra]= useState(false);  






    // let count = 0;
    const sumar = () => {
        setCount(count + 1);
    }

    const restar = () =>{
        setCount(count -1);
    }
const comprarHandler = () =>{
    serCompra(!compra);
}
useEffect(() => {
    console.log("El componente se ha montado");
}, []);
useEffect(() => {
    console.log("El componente se ha montado",compra);
}, [compra]);

    return(
        <div><button  onClick={restar}>-</button>
        <span>{count}</span>
        <button  onClick={sumar}>+</button>
        <button  onClick={setCompra}>comprar</button>
        </div>


    )

    }



export default ItemCount;

