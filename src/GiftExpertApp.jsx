import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

export const GiftExpertApp = () => {
  

  //listado persistente usando useState
  //lo inicializamos con un valor, en este caso un arreglo
  const [categories, setCategories] = useState([]);

  //Desestructuramos para romper la relacion y retornar un arreglo nuevo
  //Modificamos para que el add category se encargue solo de emitir un valor y sea el padre el que maneje el estado
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gift App</h1>
      {/* mandamos una prop al add category, en este caso mandamos la referencia a la funcion */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(event) => onAddCategory(event)}
      />

      {/* usamos una expresion de js en llaves */}
      {categories.map((category) => {
        // usamos ya el componente de giftGrid
        return <GiftGrid key={category} category={category} />;
      })}
    </>
  );
};
