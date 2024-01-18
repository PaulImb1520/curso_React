import CounterApp from "../src/CounterApp";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Pruebas en <CounterApp/>", () => {
  const counter = 100;
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={counter} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar el valor inicial de 100", () => {
    render(<CounterApp value={counter} />);
    //expect(screen.getByRole("heading", { level: 2 }).innerHTML).toBe("100");
    expect(screen.getByText(counter)).toBeTruthy();
  });

  test("El contador debe incrementar con el botón +1", () => {
    render(<CounterApp value={counter} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("101")).toBeTruthy();
  });

  test("El contador debe decrementar con el botón -1", () => {
    render(<CounterApp value={counter} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("99")).toBeTruthy();
  });

  test("El contador se debe reiniciar al pulsar el botón RESET", () => {
    render(<CounterApp value={counter} />);
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("-1"));
    //fireEvent.click(screen.getByText("RESET"));
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    expect(screen.getByText(counter)).toBeTruthy();
  });
});
