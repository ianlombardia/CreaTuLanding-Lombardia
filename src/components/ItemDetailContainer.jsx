
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import LoaderComponent from './LoaderComponent';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../service/firebase';
import { Link } from 'react-router-dom';



const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const [cargando, setCargando] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const { id } = useParams();

  // firebase
 useEffect(() => {
    setCargando(true);
    const docRef = doc(db, "productos", id);

    getDoc(docRef)
      .then((res) => {
        if (res.exists()) {
          setDetalle({ id: res.id, ...res.data() });
        } else {
          setInvalid(true);
        }
      })
      .catch((error) => {
        console.error("Error al obtener el documento:", error);
        setInvalid(true);
      })
      .finally(() => setCargando(false));
  }, [id]);

  if (invalid) {
    return (
      <div className="container mt-5 text-center">
        <h2>El producto con ID "{id}" no existe</h2>
        <Link to='/' className='btn btn-dark mt-3'>Volver al inicio</Link>
      </div>
    );
  }
 
  return (
    <>
      {
        cargando
          ? <LoaderComponent />
          : <ItemDetail detalle={detalle} />
      }

    </>
  )
}


export default ItemDetailContainer