/*
Es un hook que crearemos de cero, y sirven para mantener el estado o cosas similares, y puede ser reutilizado
Supongamos que los gifts los fuéramos a usar en otro componente, es mejor llamar a un hook que volver a escribir el mismo código que ya hicimos
*/

import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";

export const useFetchGits = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifts(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    //forma 1 como es una promesa podemos usar el then
    // getGifts(category)
    // .then(images => setImages(images));
    getImages(category);
  }, []);

  return {
    images,
    isLoading,
  };
};
