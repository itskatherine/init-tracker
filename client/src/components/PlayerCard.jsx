const PlayerCard = ({ player }) => {
  const { name, initiative } = player;
  return (
    <div>
    <strong>{name}</strong>: {initiative},
    </div>
  );
};

export default PlayerCard;
