import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import LoaderComponent from './LoaderComponent';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../service/firebase';
import { query, where } from 'firebase/firestore';

const ItemListContainer = ({ mensaje }) => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    const { category } = useParams();


    //firebase
    useEffect(() => {
        setLoader(true);

        const productsCollection = category
            ? query(collection(db, "productos"), where("category", "==", category))
            : collection(db, "productos");

        getDocs(productsCollection)
            .then((res) => {
                const list = res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                });
                setData(list);
            })
            .catch((error) => console.log(error))
            .finally(() => setLoader(false));

    }, [category]);

    const categoriaNombre = {
        futbol: 'FÚTBOL',
        basquet: 'BÁSQUET',
        accesorios: 'ACCESORIOS'
    };
    const categoriaColor = {
        futbol: '#ffc107',
        basquet: '#ffc107',
        accesorios: '#ffc107'
    };

    const titulo = category ? categoriaNombre[category] || 'Categoría' : mensaje;
    const tituloColor = category ? categoriaColor[category] || '#ffc107' : '#ffc107';


    return (
        <>
            {loader ? (
                <LoaderComponent />
            ) : (
                <div className="container mt-4">
                    <h1
                        className="text-center mb-4 fw-bold"
                        style={{
                            color: tituloColor,
                            letterSpacing: '1px',
                            borderBottom: `4px solid #0d47a1`,
                            paddingBottom: '8px'
                        }}
                    >
                        {titulo}
                    </h1>
                    <ItemList data={data} />
                </div>
            )}
        </>
    );
};


export default ItemListContainer;