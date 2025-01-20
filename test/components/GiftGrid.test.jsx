/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { GiftGrid } from "../../src/components/GiftGrid";
import { useFetchGits } from "../../src/hooks/useFetchGifts";

//hacemos el mock de la ruta del custom hook
jest.mock("../../src/hooks/useFetchGifts");
describe("Pruebas en gift grid", () => {
  const category = "one punch";

  test("should mostrar cargando", () => {
    //como estamos mockeando tenemos hacer el efecto que tendría antes de renderizar
    useFetchGits.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GiftGrid category={category} />);

    expect(screen.getByText("Cargando"));
    expect(screen.getByText(category));
  });

  //Prueba donde haremos un mock completo del custom hook useFetchGifts

  test("should mostrar items cuando se cargan las imágenes una vez consumido el custom hook useFetchGifts", () => {
    const gift = [
      {
        id: "ABC",
        title: "saitama",
        url: "https://localhost/saitama.jpg",
      },
      {
        id: "bat",
        title: "batman",
        url: "https://localhost/batman.jpg",
      },
    ];
    useFetchGits.mockReturnValue({
      images: gift,
      isLoading: false,
    });
    render(<GiftGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
