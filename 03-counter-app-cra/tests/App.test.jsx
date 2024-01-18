/** @jest-environment jsdom*/
import { render } from "@testing-library/react";
import App from "../src/App";

describe("Pruebas en <App/>", () => {
  // test("Debe hacer match con el snapshot", () => {
  //   const title = "Paúl Imbaquingo";
  //   const { container } = render(<App title={title} />);

  //   expect(container).toMatchSnapshot();
  // });

  test("Debe mostrar el título en un h1", () => {
    const title = "Paúl Imbaquingo";
    const { container, findAllByAltText, getByTestId } = render(
      <App title={title} />
    );
    expect(findAllByAltText(title)).toBeTruthy();

    // const h1 = container.querySelector("h1");
    // expect(h1.innerHTML).toContain(title);

    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("Debe mostrar el subtítulo enviado por props", () => {
    const title = "Paúl Imbaquingo";
    const subTitle = "Soy un subtítulo";
    const { getByText } = render(<App title={title} subTitle={subTitle} />);
    expect(getByText(subTitle)).toBeTruthy();
  });
});
