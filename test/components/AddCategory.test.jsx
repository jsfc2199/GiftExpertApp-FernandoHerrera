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

  test("should llamar a onNewCategory y subir el formulario y limpiar el input una vez se ejecute el formulario con un valor", () => {
    const inputValue = "dragon";
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form"); //con el aria label anterior accedemos al form

    //cambiamos el valor del input
    fireEvent.input(input, { target: { value: inputValue } });

    //simulamos el submit formulario
    fireEvent.submit(form);

    //esperamos que sea vacio porque al hacer submit se limpia el el input
    expect(input.value).toBe("");
  });

  //prueba para evaluar onNewCategory correctamente sin tener una funcion vacia
  /*
  Para ello usamos jest functions
  */
  test("should llamar a onNewCategory", () => {
    const inputValue = "dragon";
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    //cambiamos el valor del input
    fireEvent.input(input, { target: { value: inputValue } });

    //simulamos el submit formulario
    fireEvent.submit(form);

    expect(input.value).toBe("");

    //evaluamos que se haya ejecutado bien el onNewCategory
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("should no llamar a onNewCategory", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    //!no ejecutamos el input

    // const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    //simulamos el submit formulario
    fireEvent.submit(form);

    //evaluamos que se haya ejecutado bien el onNewCategory
    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalledWith();
  });
});
