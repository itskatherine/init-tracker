const PlayerAdder = () => {
  const [nameInput, setNameInput] = "";
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event, value) => {
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        value={nameInput}
        onChange={(event) => {
          handleChange(event, "name");
        }}
      ></input>
      <label for="dex">Dex</label>
      <input type="text" id="dex"></input>
      <label for="init">Init</label>
      <input type="text" id="init"></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PlayerAdder;
