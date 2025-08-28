import { useEffect, useState } from 'react';
import { getProducts } from "../mock/AsyncMock";
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ mensaje }) => {
    const [data, setData] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        getProducts()
            .then((res) => {
                if (category) {
                    setData(res.filter(prod => prod.category === category));
                } else {
                    setData(res);
                }
            })
            .catch((error) => console.log(error, 'error'));
    }, [category]);

    const categoriaNombre = {
        futbol: 'FÚTBOL',
        basquet: 'BÁSQUET',
        accesorios: 'ACCESORIOS'
    };

    const titulo = category ? categoriaNombre[category] || 'Categoría' : mensaje;

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">{titulo}</h1>
            <ItemList data={data} />
        </div>
    );
}


export default ItemListContainer;