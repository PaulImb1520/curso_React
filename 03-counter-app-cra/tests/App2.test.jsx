/** @jest-environment jsdom*/
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("Pruebas en <App/>", () => {
  const title = "Soy un título";
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<App title={title} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar el mensaje 'Soy un título'", () => {
    render(<App title={title} />);
    expect(screen.getByText(title)).toBeTruthy;
  });

  test("Debe mostrar el título en un h1", () => {
    render(<App title={title} />);
    expect(screen.getByText(title)).toBeTruthy;
  });
});
