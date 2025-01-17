import { getGifts } from "../../src/helpers/getGifts";

/* eslint-disable no-undef */
describe("Pruebas en el helper get gifts", () => {
  test("should retornar un arreglo de gifts", async () => {
    const gits = await getGifts("Dragon ball");

    expect(gits.length).toBeGreaterThan(0);

    //Prueba probando la estructura esperada de los gifts
    expect(gits[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
