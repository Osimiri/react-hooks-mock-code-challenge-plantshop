import React,{useState} from "react";

function PlantCard({name,price,image}) {
  
  const [available,setAvailable] = useState(true)
  function handleClick(e) {
    setAvailable(available => !available)
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {available ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
