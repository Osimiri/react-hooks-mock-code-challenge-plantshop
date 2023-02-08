import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants,setPlants]= useState([])

  useEffect(() => {                         
    fetch ('http://localhost:6001/plants')
    .then((response) => response.json())
    .then(data=> setPlants(data) )
    },[])

    // console.log(plants)

  function renderPlants(newPlant){
    const renderingArray = [...plants,newPlant]
    setPlants(renderingArray)
  }
  
  const [search,setSearch]= useState("")

  const searchedPlants = plants.filter(plant => {
    if (search === ""){
      return true; 
    }
    return (plant.name.toLowerCase().includes(search.toLowerCase()))
  });

  function handleChange(e){
    // console.log(e.target.value)
    setSearch(e.target.value);
  }
  return (
    <main>
      <NewPlantForm renderPlants={renderPlants} />
      <Search handleChange={handleChange} />
      <PlantList plants={searchedPlants}/>
    </main>
  );
}

export default PlantPage;
