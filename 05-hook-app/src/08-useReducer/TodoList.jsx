export const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <ul className="list-group">
        {todos.map((element, index) => (
          <li
            key={todos[index].id}
            className="list-group-item d-flex justify-content-between"
          >
            <span
              className={`align-self-center ${
                todos[index].done && "text-decoration-line-through"
              }`}
              onClick={() => onToggleTodo(todos[index].id)}
            >
              {todos[index].description}
            </span>
            <button
              onClick={() => onDeleteTodo(todos[index].id)}
              className="btn btn-danger"
            >
              Borrar
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
