import DeleteButton from "./DeleteButton";

const PlayerCard = ({ player, setInitList, socket }) => {
  const { name, initiative, id } = player;

  return (
    <div>
      <strong>{name}</strong>: {initiative} id: {id}
      <DeleteButton setInitList={setInitList} id={id} socket={socket} />
    </div>
  );
};

export default PlayerCard;
