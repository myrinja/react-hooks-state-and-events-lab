import React from "react";
import { useState } from "react";

function Item({ name, category }) {

  const[incart,setInCart] = useState(false)

  const toggleCartStatus = () => {
    setInCart(!incart);
  }


  return (
    <li className= {incart? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCartStatus}>{incart ? "Remove From Cart" : "Add to Cart"}</button>
     
    
    </li>
  );
}

export default Item;
