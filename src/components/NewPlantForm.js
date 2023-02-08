import React , {useState} from "react";

function NewPlantForm({renderPlants}) {
  
  const [newPlant,setNewPlant]= useState({
    name: "",
    image: "",
    price: ""
  })
  
  function handleNewPlant(e){
    setNewPlant({...newPlant, [e.target.name]: e.target.value})
  }

  //use to populate use State to be added to main array
  function handleSubmit(e){
    e.preventDefault();
    const newPlantObj = {
      name: newPlant.name,
      image: newPlant.image,
      price: newPlant.price
    }
    renderPlants(newPlantObj)
    console.log(newPlant)
    e.target.reset();

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((response) => renderPlants(response));
  }
  

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNewPlant} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleNewPlant} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleNewPlant} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
