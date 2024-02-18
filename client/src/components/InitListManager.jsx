import { useState } from "react";
import InitiativeList from "./InitiativeList";
import PlayerAdder from "./PlayerAdder";
import SortButton from "./SortButton";

import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

const InitListManager = () => {
  const [initList, setInitList] = useState([
    { id: 1, name: "Woody", initiative: 20, mod: 10 },
    { id: 2, name: "Katherine", initiative: 13, mod: 12 },
    { id: 3, name: "Kym", initiative: 11, mod: 14 },
    { id: 4, name: "Signe", initiative: 24, mod: 4 },
  ]);
  return (
    <>
      <InitiativeList
        socket={socket}
        initList={initList}
        setInitList={setInitList}
      />
      <SortButton setInitList={setInitList} />
      <PlayerAdder socket={socket} setInitList={setInitList} />
    </>
  );
};

export default InitListManager;
