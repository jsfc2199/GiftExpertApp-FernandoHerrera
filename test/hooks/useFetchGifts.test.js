/* eslint-disable no-undef */
import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGits } from "../../src/hooks/useFetchGifts";

describe("Pruebas en hook useFetchGifts", () => {
  test("should return initial state", () => {
    //para ejecutar el useFetch se debe hacer dentro un functional component, por ello usamos el renderHook
    const { result } = renderHook(() => useFetchGits("one punch"));

    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("should return images array and isLoading true", async () => {
    //para ejecutar el useFetch se debe hacer dentro un functional component, por ello usamos el renderHook
    const { result } = renderHook(() => useFetchGits("one punch"));

    //esperamos a que el hook se ejecute
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0), //debe de ser un booleano el callback
      { timeout: 2000 }
    );

    //tomamos el valor actual del resultado de esperar la ejecución del hook
    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
