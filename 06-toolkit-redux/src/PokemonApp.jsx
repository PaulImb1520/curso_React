import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />

      <ul>
        <li>Hola mundo</li>
        <li>Hola mundo</li>
        <li>Hola mundo</li>
      </ul>
    </>
  );
};