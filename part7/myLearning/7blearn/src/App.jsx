import { useState } from "react";
import useCounter from "./hooks/useCounter";
import useField from "./hooks/useField";

const App = () => {
  const counter = useCounter();

  const left = useCounter();
  const right = useCounter();

  const name = useField("text");
  const born = useField("date");
  const height = useField("number");

  return (
    <div>
      <div>
        <div>{counter.value}</div>
        <button onClick={counter.increase}>plus</button>
        <button onClick={counter.decrease}>minus</button>
        <button onClick={counter.zero}>zero</button>

        <h2>hey i go left, i go right</h2>
        {left.value}
        <button onClick={left.increase}>left</button>
        <button onClick={left.zero}>zero</button>
        <button onClick={right.increase}>right</button>
        {right.value}
      </div>

      <div>
        <form>
          name:
          {/* <input type={name.type} value={name.value} onChange={name.onChange} /> */}
          <input {...name} />
          <br />
          birthdate:
          <input {...born} />
          <br />
          height:
          <input {...height}
          />
        </form>
        <div>
          {name.value} {born.value} {height.value}
        </div>
      </div>
    </div>
  );
};

export default App;
