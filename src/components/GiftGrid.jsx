
import { GiftItem } from "./GiftItem";
import { useFetchGits } from "../hooks/useFetchGifts";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export const GiftGrid = ({ category }) => {
//   const [images, setImages] = useState([]);

  const {images, isLoading} = useFetchGits(category)
  //forma2 para setear las imagenes

  //lo cambiamos por un custom hook que nos de las imagenes y el estado si esta cargando o no la app
//   const getImages = async () => {
//     const newImages = await getGifts(category);
//     setImages(newImages);
//   };
  /*
    El useEffect usa 2 argumentos, un callback o una arrow function en este caso de lo que queremos ejecutar
    El segundo argumento es un arreglo de las dependencias que son las condiciones sobre las cuales queremos volver a ejecutar el callback, si este argumento es vació significa que el hook se va a disparar solo la primera vez que se crea y construye el componente

    Si no se tienen dependencias se puede remover el arreglo

    Al insertar una categorua desde AddCategory, el componente se esta construyendo otra vez, entonces es correcto el funcionamiento
    */

    //! Se debe tener si o si el arreglo vacio de las dependencias sino se desbordara la app

    //lo llevamos al useFetchGifts
//   useEffect(() => {
//     //forma 1 como es una promesa podemos usar el then
//     // getGifts(category)
//     // .then(images => setImages(images));
//     getImages(category);
//   }, []);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando</h2>}
      <ol>
        
        {images.map((img) => {
            //con ...img esparcimos todas las propiedades de la imagen a los props del componente
          return <GiftItem key={img.id} {...img}/>;
        })}
      </ol>
    </>
  );
};

GiftGrid.propTypes = {
  category: PropTypes.string.isRequired
}
