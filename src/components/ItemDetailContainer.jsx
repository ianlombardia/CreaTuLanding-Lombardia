
import { useEffect, useState } from 'react';
import { getProducts } from '../mock/AsyncMock';
import { getItem } from '../mock/AsyncMock';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({});
    const {id} = useParams();


    useEffect(() => {
        getItem(id)
        .then((res) => setDetalle(res))
        .catch((error) => console.log(error))

    },[id])


  return (
    <div><ItemDetail detalle={detalle}/></div>
  )
}

export default ItemDetailContainer