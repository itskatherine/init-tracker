import PlayerCard from "./PlayerCard";

const InitiativeList = ({ socket, initList, setInitList }) => {
  return (
    <ul>
      {initList.map((player) => {
        return (
          <PlayerCard
            socket={socket}
            player={player}
            key={player.id}
            setInitList={setInitList}
          ></PlayerCard>
        );
      })}
    </ul>
  );
};

export default InitiativeList;
