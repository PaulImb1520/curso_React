import { Hijo } from "./Hijo";
import { useCallback, useMemo, useState } from "react";

export const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  const incrementar = useCallback((value) => {
    setValor((c) => c + value);
  }, []);

  //   const incrementar = (num) => {
  //     setValor(valor + num);
  //   };

  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {valor} </p>

      <hr />

      {numeros.map((n) =>
        useMemo(() => <Hijo key={n} numero={n} incrementar={incrementar} />, [])
      )}
    </div>
  );
};
