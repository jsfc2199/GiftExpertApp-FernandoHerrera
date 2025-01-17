/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react";
import { GiftItem } from "./../../src/components/GiftItem";

describe("Pruebas en gift item", () => {
  const title = "Title";
  const url = "https://url/";
  test("should hacer match con el snapshot", () => {
    const { container } = render(<GiftItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test("should mostrar la imagen con la url y el ALT indicado", () => {
    render(<GiftItem title={title} url={url} />);

    //forma1
    expect(screen.getByRole("img").src).toBe(url);
    expect(screen.getByRole("img").alt).toBe(title);

    //forma2 igual a lo anterior pero desestructurando
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("should mostrar el titulo como un texto dentro del componente", () => {
    render(<GiftItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy()
  });
});
