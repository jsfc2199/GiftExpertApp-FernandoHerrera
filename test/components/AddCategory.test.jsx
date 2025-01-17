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

  test('should llamar a onNewCategory y subir el formulario y limpiar el input una vez se ejecute el formulario con un valor', () => {
    const inputValue = "dragon"
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form"); //con el aria label anterior accedemos al form

    //cambiamos el valor del input
    fireEvent.input(input, { target: { value: inputValue } });

    //simulamos el submit formulario
    fireEvent.submit(form)

    //esperamos que sea vacio porque al hacer submit se limpia el el input
    expect(input.value).toBe('')
    
  })
  
});
