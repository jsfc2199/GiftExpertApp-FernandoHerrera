import { useState } from "react";

export const GiftExpertApp = () => {
  // const apiKey = "AvcdGeNzW40xzmpObLOlBeUE3mFU67k3";

  //listado persistente usando useState
  //lo inicializamos con un valor, en este caso un arreglo
  const [categories, setCategories] = useState(["One Punch"]);
  return (
    <>
      <h1>Gift App</h1>
      <ol>
        {/* usamos una expresion de js en llaves */}
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
