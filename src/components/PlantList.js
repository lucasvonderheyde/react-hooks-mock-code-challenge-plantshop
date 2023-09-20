import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  return (
    <ul className="cards">{
      plants.map((plant, index) => {
       return <PlantCard key={index} {...plant} />
      })
    }</ul>
  );
}

export default PlantList;
