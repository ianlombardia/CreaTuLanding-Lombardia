import React, { useEffect } from 'react'

const FetchCountry = () => {

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/name/chile')
        .then((response) => response.json())
        .then((data) => console.log(data[0].flag))
        .catch((error) => console.log(error))
    },[])
  return (
    <div>FetchCountry</div>
  )
}

export default FetchCountry