import { useState } from "react";

const SortButton = ({ setInitList }) => {
  const [isSorted, setIsSorted] = useState(false);
  const handleClick = () => {
    setIsSorted((currIsSorted) => !currIsSorted);
    setInitList((currInitList) => {
      const initListCopy = currInitList.map((player) => {
        return { ...player };
      });

      const sortedList = initListCopy.sort(
        (firstPlayer, secondPlayer) =>
          firstPlayer.initiative - secondPlayer.initiative
      );
      return isSorted ? sortedList.reverse() : sortedList;

      //add more functionality for when players get equal initiatives
    });
  };
  return <button onClick={handleClick}>Sort</button>;
};

export default SortButton;
