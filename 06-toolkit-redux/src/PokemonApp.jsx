import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  //const {pokemons, isLoading, page} = useSelector((state) => state.pokemons);
  const { pokemons } = useSelector((state) => state.pokemons);
  const isLoading = useSelector((state) => state.pokemons.isLoading);
  const page = useSelector((state) => state.pokemons.page);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);
  const handleNextPage = () => {
    dispatch(getPokemons(page));
  };
  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Cargando: {isLoading ? "True" : "False"}</span>

      <ul>
        {pokemons.map((element) => (
          <li key={element.name}>{element.name}</li>
        ))}
      </ul>

      <button disabled={isLoading} onClick={handleNextPage}>
        Siguientes 10
      </button>
    </>
  );
};
