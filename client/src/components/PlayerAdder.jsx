import { useState, useEffect } from "react";

const PlayerAdder = ({ setInitList, socket }) => {
  const [formInput, setFormInput] = useState({ name: "", init: "", mod: 0 });

  useEffect(() => {
    socket.on("player-added", ({ newPlayerWithId }) => {
      setInitList((currInitList) => {
        return [newPlayerWithId, ...currInitList];
      });
      setFormInput({ name: "", init: "", mod: "0" });
    });
  }, [socket]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPlayer = {
      name: formInput.name,
      initiative: parseInt(formInput.init) + parseInt(formInput.mod),
      id: socket.id,
    };
    socket.emit("add-player", { newPlayer });
    setInitList((currInitList) => {
      return [newPlayer, ...currInitList];
    });
    setFormInput({ name: "", init: "", mod: "0" });
  };

  const handleChange = (event, key) => {
    setFormInput((currFormInput) => {
      const formInputCopy = { ...currFormInput };
      formInputCopy[key] = event.target.value;
      return formInputCopy;
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        required
        type="text"
        id="name"
        value={formInput.name}
        onChange={(event) => {
          handleChange(event, "name");
        }}
      ></input>
      <br />
      <label htmlFor="init">Init</label>

      <input
        required
        type="text"
        id="init"
        value={formInput.init}
        onChange={(event) => {
          handleChange(event, "init");
        }}
      ></input>
      <br />
      <label htmlFor="mod">Modifier</label>
      <input
        placeholder="0"
        type="text"
        id="mod"
        value={formInput.mod}
        onChange={(event) => {
          handleChange(event, "mod");
        }}
      ></input>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PlayerAdder;
