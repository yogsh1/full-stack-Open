import { useState } from "react";
import Hello from "./component/Hello";
import Display from "./component/Display";
import Button from "./component/Button";

function App() {
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value", counter);
  // const {counter} = props

  // setTimeout(
  //   () => setCounter(counter + 1), 1000
  // )

  const increaseByOne = () => {
    console.log("increasing, value before", counter);
    setCounter(counter + 1);
  };
  const decreaseByOne = () => {
    console.log("decreasing, value before", counter);
    setCounter(counter - 1);
  };
  const setToZero = () => {
    console.log("resetting to zero, value before", counter);
    setCounter(0);
  };

  // console.log("rendering...", counter);

  const name = "Peter";
  const age = 24;

  return (
    <div>
      <h1>Greetings</h1>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="0" />
      <Button onClick={decreaseByOne} text="minus" />
      <Hello name={"Mala"} age={25 + 12} />
      <Hello name={name} age={age} />
    </div>
  );
}

export default App;
