/* eslint-disable no-undef */

import { render } from "@testing-library/react";
import { GiftItem } from "./../../src/components/GiftItem";

describe("Pruebas en gift item", () => {
  test("should hacer match con el snapshot", () => {
    const title = "Title";
    const url = "url";

    const { container } = render(<GiftItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });
});
