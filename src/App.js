import "./App.css";
import CardsList from "./components/cardsList";
import Button from "./components/button";
import Calculate from "./components/calculate";
import Animals from "./components/animals";

function App() {
  const buttonText = "my Button";
  const teams = [
    {
      name: "Dragons United",
      members: [
        "David Miller",
        "Ethan Turner",
        "Natalie Clark",
        "Sophie Gomez",
        "Tom Hanks",
      ],
    },
    {
      name: "Golden Eagles",
      members: [
        "Lisa Ray",
        "Harry Ford",
        "Betty Cooper",
        "George King",
        "Alice Morgan",
      ],
    },
    {
      name: "Mighty Warriors",
      members: [
        "Sam Wilson",
        "John Norton",
        "Emma Cartright",
        "Daniel Lewis",
        "Megan Stone",
      ],
    },
    {
      name: "Falcon Flyer",
      members: [
        "Oscar Wilde",
        "Robert Brown",
        "Victoria Smith",
        "Rachel Adams",
        "Matthew Johns",
      ],
    },
    {
      name: "Storm Breakers",
      members: [
        "Lucas White",
        "Eva Taylor",
        "Charles Anderson",
        "Emily Johnson",
        "Aaron Carter",
      ],
    },
  ];
  const divStyle = {
    color: "red",
    fontSize: "20px",
    backgroundColor: "yellow",
    border: "1px solid black",
    textAlign: "center",
  };

  return (
    <>
      <CardsList teams={teams} />
      <div style={divStyle}>
        Стилизованый при помощи встроеных стилей параграф
      </div>
      <Button buttonText={buttonText} />
      <Calculate />
      <Animals />
    </>
  );
}

export default App;
