import React, {useEffect, useState} from "react";
importIte

const ItemListContainer = () => {
    const [characters, setCharacters] = useState([])
    useEffect(()=>{
fetch ('https://rickandmortyapi.com/api/character')
.then (res => res.json ())
.then (data =>{
    console.log (data);
    setCharacters(data.results);
})
.catch ()

    }, [])
    console.log(characters);

    return (
       <ItemList characters = {characters}/>

     )
}
export default ItemListContainer