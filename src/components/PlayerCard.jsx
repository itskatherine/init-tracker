const PlayerCard = ({ player }) => {
  const { name, initiative, dexterityScore } = player;
  return (
    <div>
      Dex:{dexterityScore} <strong>{name}</strong>: {initiative},
    </div>
  );
};

export default PlayerCard;
