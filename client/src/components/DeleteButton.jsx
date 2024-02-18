const DeleteButton = ({ setInitList }) => {
  const handleDelete = (idToDelete) => {
    setInitList((currInitList) => {
      const currInitListCopy = currInitList.map((player) => {
        return { ...player };
      });
      return currInitListCopy.filter((player) => player.id !== idToDelete);
    });
  };
  return (
    <button
      onClick={() => {
        handleDelete(id);
      }}
    >
      Bin
    </button>
  );
};

export default DeleteButton;
