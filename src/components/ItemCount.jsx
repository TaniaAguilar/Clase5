import React, {useState} from "react";

const ContadorP = ({ initial, stock, onAdd }) => {
    const [contador, setContador] = useState (initial);

const handleOp = (simbolo) => {
    simbolo === '-' ? setContador(contador -1) : setContador (contador + 1);
   ;

   
};



    return (
        <div>
          <button onClick= { () => handleOp ('-')}>-</button>
          <span> {contador} </span>
          <button onClick={() => handleOp('+')}>+</button>
          <br />
          <button className= {'botoncar'} onClick={onAdd}>Agregar al carrito</button>
            </div>
    );
     
};


export default ContadorP;
