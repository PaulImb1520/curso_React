export const TodoAdd = ({ handleNewTodo }) => {
  const onSubmit = (event) => {
    const input = document.getElementsByClassName("form-control");
    event.preventDefault();
    if (input[0].value.length <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      description: input[0].value,
      done: false,
    };
    handleNewTodo(newTodo);
    input[0].value = "";
  };
  return (
    <form>
      <input
        id={new Date().getTime()}
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
      />
      <button
        onClick={onSubmit}
        type="submit"
        className="btn btn-outline-primary mt1"
      >
        Agregar
      </button>
    </form>
  );
};
