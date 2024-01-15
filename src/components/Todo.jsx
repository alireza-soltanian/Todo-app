import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export const Todo = ({ task, togglecompleted, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => togglecompleted(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <FaEdit
          icon={FaEdit}
          onClick={() => editTodo(task.id)}
        />
        <FaTrash icon={FaTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};
