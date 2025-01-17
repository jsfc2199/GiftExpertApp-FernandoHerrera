import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GiftExpertApp = () => {
  // const apiKey = "AvcdGeNzW40xzmpObLOlBeUE3mFU67k3";

  //listado persistente usando useState
  //lo inicializamos con un valor, en este caso un arreglo
  const [categories, setCategories] = useState(["One Punch"]);

  //Desestructuramos para romper la relacion y retornar un arreglo nuevo
  const onAddCategory = () => {
    setCategories(["Other category", ...categories]);
  };

  return (
    <>
      <h1>Gift App</h1>
      {/* mandamos una prop al add category, en este caso mandamos la referencia a la funcion */}
      <AddCategory setCategories={setCategories}/>
      <ol>
        {/* usamos una expresion de js en llaves */}
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
