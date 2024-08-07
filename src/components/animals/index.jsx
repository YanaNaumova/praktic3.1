import { useState } from "react";

function Animals() {
  const [animals, setAnimals] = useState([]);
  const animalsList = ["Lion", "Elephant", "Giraffe", "Penguin", "Kangaroo"];

  function addAnimal() {
    const index = Math.floor(Math.random() * animalsList.length);
    setAnimals((prevAnimals) => [...prevAnimals, animalsList[index]]);
  }
  return (
    <>
      <button onClick={addAnimal}>Добавить животное</button>
      {animals.map((animal, index) => {
        return <p key={index}>{animal}</p>;
      })}
    </>
  );
}

export default Animals;
