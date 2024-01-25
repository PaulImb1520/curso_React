import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodos = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };
  const initialState = [
    //   {
    //     id: new Date().getTime(),
    //     description: "Recolectar la piedra del alma",
    //     done: false,
    //   },
  ];

  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatchTodo(action);
  };

  const handleDeleteTodo = (id) => {
    dispatchTodo({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };
  const handleToogleTodo = (id) => {
    dispatchTodo({
      type: "[TODO] Toogle Todo",
      payload: id,
    });
  };

  //   const todosCount = (todos) => {
  //     const completedTodo = todos.length;
  //     return completedTodo;
  //   };

  //   const pendingTodosCount = () => {
  //     const pendindTodos = todos.filter((todo) => !todo.done).length;
  //     return pendindTodos;
  //   };

  return {
    handleNewTodo,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    handleDeleteTodo,
    handleToogleTodo,
    todosCount: todos.length,
    todos,
  };
};
