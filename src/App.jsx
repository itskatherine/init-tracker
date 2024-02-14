import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InitiativeList from "./components/InitiativeList";
import SortButton from "./components/SortButton";
import PlayerAdder from "./components/PlayerAdder";

function App() {
  const [initList, setInitList] = useState([
    { name: "Woody", initiative: 20, id: 1, dexterityScore: 10 },
    { name: "Katherine", initiative: 13, id: 2, dexterityScore: 12 },
    { name: "Kym", initiative: 11, id: 3, dexterityScore: 14 },
    { name: "Signe", initiative: 24, id: 4, dexterityScore: 4 },
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
