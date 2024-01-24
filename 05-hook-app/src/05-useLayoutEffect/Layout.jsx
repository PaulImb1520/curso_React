import { useFetch, useCounter } from "../hooks";
import { LoadingInfo } from "../03-examples/LoadingInfo";
import { Info } from "../03-examples/Info";

export const Layout = () => {
  const { counter, increment } = useCounter();
  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );
  if (data != null) {
    var { name } = data;
    var location = data.location.name;
  }
  return (
    <>
      <h1>Rick & Morty Info</h1>
      <hr />
      {isLoading ? (
        <LoadingInfo isLoading={isLoading} />
      ) : (
        <Info name={name} location={location} />
      )}

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment()}
      >
        Next character
      </button>
    </>
  );
};
