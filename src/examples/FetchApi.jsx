import React, { useState, useEffect } from 'react'

const FetchApi = () => {
    const [list, setList]= useState([])
    useEffect(() => {
        fetch('https://dragonball-api.com/api/characters')
        .then ((response) => response.json())
        .then ((res) => setList(res.items))
        .catch((error) => console.log(error))
    },[])
    console.log(list, 'listado de personajes')
  return (
    <div>
    <h1>personajes</h1>
    {list.map((personaje)=> <div className="card" style={{width: "18rem"}} key={personaje.id}>
  <img src={personaje.image}  className="card-img-top" alt={personaje.name}/>  <div className="card-body">
    <h5 className="card-title">{personaje.name}</h5>
    <p className="card-text">{personaje.race}</p>

  </div>
</div>  )}
    </div>
  )

}

export default FetchApi