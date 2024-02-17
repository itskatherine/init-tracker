import { useState } from "react";

const PlayerAdder = ({ setInitList }) => {
  const [formInput, setFormInput] = useState({ name: "", init: "", mod: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
    setInitList((currInitList) => {
      const newPlayer = {};
    });
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
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        value={formInput.name}
        onChange={(event) => {
          handleChange(event, "name");
        }}
      ></input>
      <label for="init">Init</label>
      <input
        type="text"
        id="init"
        value={formInput.init}
        onChange={(event) => {
          handleChange(event, "init");
        }}
      ></input>
      <label for="mod">Modifier</label>
      <input
        type="text"
        id="mod"
        value={formInput.mod}
        onChange={(event) => {
          handleChange(event, "mod");
        }}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PlayerAdder;