export const ShowIncrement = ({ increment }) => {
  return (
    <button onClick={() => increment(5)} className="btn btn-primary">
      Incrementar
    </button>
  );
};
