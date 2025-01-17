import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("one punch");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  //onChange: metodo para detectar cambios en inputs
  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar Gifts"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      ></input>
    </form>
  );
};
