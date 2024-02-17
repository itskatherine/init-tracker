import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InitiativeList from "./components/InitiativeList";
import SortButton from "./components/SortButton";
import PlayerAdder from "./components/PlayerAdder";

function App() {
  const [initList, setInitList] = useState([
    { id: 1, name: "Woody", initiative: 20, mod: 10 },
    { id: 2, name: "Katherine", initiative: 13, id: 2, mod: 12 },
    { id: 3, name: "Kym", initiative: 11, id: 3, mod: 14 },
    { id: 4, name: "Signe", initiative: 24, id: 4, mod: 4 },
  ]);
  return (
    <>
      <Header />
      <InitiativeList initList={initList} />
      <SortButton setInitList={setInitList} />
      <PlayerAdder setInitList={setInitList} />
    </>
  );
}

export default App;
