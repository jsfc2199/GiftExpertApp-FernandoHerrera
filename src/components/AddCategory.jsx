import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    //usamos el callback para tener las categorias actuales
    setCategories((categories) => [inputValue, ...categories]);
    setInputValue("");
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
