import PropTypes from "prop-types";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    //usamos el callback para tener las categorias actuales
    // setCategories((categories) => [inputValue, ...categories]); 

    //lo anterior valido pero lo haremos solo emitiendo el valor
    onNewCategory(inputValue.trim()) //emitimos el valor

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

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
