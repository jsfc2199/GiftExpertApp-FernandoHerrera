//todo usar use effect

import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";

// eslint-disable-next-line react/prop-types
export const GiftGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  //forma2 para setear las imagenes
  const getImages = async () => {
    const newImages = await getGifts(category);
    setImages(newImages);
  };
  /*
    El useEffect usa 2 argumentos, un callback o una arrow function en este caso de lo que queremos ejecutar
    El segundo argumento es un arreglo de las dependencias que son las condiciones sobre las cuales queremos volver a ejecutar el callback, si este argumento es vació significa que el hook se va a disparar solo la primera vez que se crea y construye el componente

    Si no se tienen dependencias se puede remover el arreglo

    Al insertar una categorua desde AddCategory, el componente se esta construyendo otra vez, entonces es correcto el funcionamiento
    */
  useEffect(() => {
    //forma 1 como es una promesa podemos usar el then
    // getGifts(category)
    // .then(images => setImages(images));
    getImages(category);
  });

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {images.map((id, title) => {
          return <li key={id}>{title} </li>;
        })}
      </ol>
    </>
  );
};
