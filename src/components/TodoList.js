import React from "react";

import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filterdTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterdTodos.map((todo) => (
          <Todo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
