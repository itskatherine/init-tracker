import PlayerCard from "./PlayerCard";

const InitiativeList = ({ initList }) => {
  return (
    <ul>
      {initList.map((player) => {
        return <PlayerCard player={player} key={player.id}></PlayerCard>;
      })}
    </ul>
  );
};

export default InitiativeList;
