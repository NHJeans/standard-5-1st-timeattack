import { useState } from "react";

export default function TodoForm({ setTodos }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };
  const onChangeContentHandler = (e) => {
    setContent(e.target.value);
    console.log(content);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || content.trim() === "")
      return alert("제목과 내용을 모두 입력하세요");
    const nextTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };
    setTodos((prevTodo) => [nextTodo, ...prevTodo]);
    setTitle("");
    setContent("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={onChangeTitleHandler}
      />
      <input
        type="text"
        placeholder="내용"
        value={content}
        onChange={onChangeContentHandler}
      />
      <button>추가</button>
    </form>
  );
}
