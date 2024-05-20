import { useState } from "react";

export default function App() {
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(0);

  const handleInputChange = (e) => {
    setValue(+e.target.value);
    console.log(value);
  };

  const handleNumAddition = () => {
    setResult(result + value);
  };
  const handleNumSubtraction = () => {
    setResult(result - value);
  };
  const handleReset = () => {
    setValue(0);
    setResult(0);
  };
  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input type="number" value={value} onChange={handleInputChange} />{" "}
        만큼을 <button onClick={handleNumAddition}>더할게요</button>{" "}
        <button onClick={handleNumSubtraction}>뺄게요</button>
        <button onClick={handleReset}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}
