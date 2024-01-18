/** @jest-environment jsdom*/
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("Pruebas en <App/>", () => {
  const title = "Soy un título";
  const subTitle = "Soy un título";

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
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("Debe motrar el subtitulo enviado por props", () => {
    render(<App title={title} subTitle={subTitle} />);
    expect(screen.getAllByText(subTitle).length).toBe(2);
  });
});
