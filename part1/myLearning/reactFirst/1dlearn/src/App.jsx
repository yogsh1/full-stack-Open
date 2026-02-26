import { useState } from "react";
import History from "./components/History";
import Button from "./components/Button";

const App = () => {
  // const [clicks, setClicks] = useState({
  //   left: 0,
  //   right: 0,
  // });
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);
  const [total, setTotal] = useState(0);

  const [value, setValue] = useState(10);
  const [age, setAge] = useState(0);
  const [name, setName] = useState("Enfield in the field");

  if (age > 10) {
    // this doesn't work
    const [foobar, setFoobar] = useState(null);
  }

  for (let i = 0; i < age; i++) {
    // this aldo doesn't work
    const [rightway, setRightWay] = useState(false);
  }

  const notGood = () => {
    // this is also illegal
    const [x, setX] = useState(23902);
  };

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat("L"));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right);
  };

  const handleRightClick = () => {
    setAllClicks(allClicks.concat("R"));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(left + updatedRight);
  };

  const handleClick = () => {
    console.log("button got muttoned");
    setValue(0);
  };

  const setToValue = (newValue) => () => {
    console.log('value now', newValue);

    setValue(newValue);
  }

  const hello = (person) => () => console.log("help me,", person);
 

  /* // component inside of an component
  // just an example but donot define components inside another components
  const Display = (props) => <div>{props.value}</div> */
  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text="left" />
      <Button onClick={handleRightClick} text="right" />
      {right}

      <History allClicks={allClicks} />
      <p>{allClicks.join(" | ")}</p>
      <p>Total clicks: {total}</p>

      <div>
        <Display value = {value}/>

        {value}
        <button onClick={handleClick}>reset to zero</button>
        <button onClick={setToValue(3000)}>click and magic</button>
        <button onClick={setToValue(5555)}>click and magic</button>
        <button onClick={setToValue(value + 1)}>3 click and magic</button>
        <button onClick={() => setValue(value + 1)}>4 click and magic</button>
      </div>

      <div>
        <button onClick={hello("yogsh")}>console secret msg</button>
      </div>
    </div>
  );
};

export default App;


// Display component
const Display = (props) => <div>{props.value}</div>
