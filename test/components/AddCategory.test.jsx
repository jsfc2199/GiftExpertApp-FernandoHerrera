/* eslint-disable no-undef */

import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en add category", () => {
  test("should cambiar el valor en la caja de texto", () => {
    //como es una funcion podemos enviar una funcion vacia
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole("textbox");

    //disparamos evento para cambiar el valor dentro del input
    fireEvent.input(input, { target: { value: "dragon" } });

    expect(input.value).toBe("dragon");

    //console log del screen que estamos trabajando
    //  screen.debug()
  });
});
