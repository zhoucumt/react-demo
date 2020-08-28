import React from "react";
import AddTodo from "../../components/TodoApp/AddTodo";
import TodoList from "../../components/TodoApp/TodoList";
import VisibilityFilters from "../../components/TodoApp/VisibilityFilters";
import "./style.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}
