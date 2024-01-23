import { useFetch, useCounter } from "../hooks";
import { LoadingInfo } from "./LoadingInfo";
import { Info } from "./Info";

export const MultipleCustomHooks = () => {
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
