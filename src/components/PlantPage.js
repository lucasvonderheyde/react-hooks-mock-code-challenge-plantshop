import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState, useEffect } from "react";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchPlants, setSearchPlants] = useState("")



  const filteredPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(searchPlants.toLowerCase())
  })


  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(plantsResponse => setPlants(previousValue => plantsResponse))
  }, [])

  return (
    <main>
      <NewPlantForm setPlants={setPlants} />
      <Search setSearchPlants={setSearchPlants} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
