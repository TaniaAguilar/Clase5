import React from "react";
import ItemListContainer from "../containers/ItemListContainers";
import ItemList from 'contador/src/components/ItemList.js';
const ItemList = ({character}) => {
    return(
<div className = "ItemListContainer">
    <img src={character.image}/>
    <h2>{character.name}</h2>

</div> 
        
    )
}

export default ItemListContainer