export default function TodoItem(todo, setTodos) {
  const { id, title, content, isDone } = todo;
  const deleteTodo = () => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };
  const toggleTodo = () => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <div>
        <button onClick={deleteTodo}>삭제</button>
        <button onClick={toggleTodo}>{isDone ? "취소" : "완료"}</button>
      </div>
    </div>
  );
}
