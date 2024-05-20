import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 스탠다드 시험111",
      content: "리액트 투두리스트 시험",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 스탠다드 시험2222",
      content: "리액트 투두리스트 시험",
      isDone: true,
    },
  ]);
  const workingTodo = todos.filter((todo) => !todo.isDone);
  const doneTodo = todos.filter((todo) => todo.isDone);
  return (
    <>
      <h1>투두리스트 타임어택</h1>
      <TodoForm setTodos={setTodos} todos={todos} />
      <TodoList todos={workingTodo} setTodos={setTodos} title="working" />
      <TodoList todos={doneTodo} setTodos={setTodos} title="isDone" />
    </>
  );
}
