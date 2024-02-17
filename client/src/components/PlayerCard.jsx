const PlayerCard = ({ player }) => {
  const { name, initiative, id } = player;
  return (
    <div>
      <strong>{name}</strong>: {initiative} id: {id}
    </div>
  );
};

export default PlayerCard;
