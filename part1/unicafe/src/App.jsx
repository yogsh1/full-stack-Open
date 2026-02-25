import { useState } from "react";
import Button from "./component/Button";
import Statistics from "./component/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = all === 0 ? 0 : ((good - bad) / all).toFixed(2);
  const positive = all === 0 ? 0 : ((good / all) * 100).toFixed(2);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text={"good"} />
      <Button onClick={handleNeutral} text={"neutral"} />
      <Button onClick={handleBad} text={"bad"} />

      <h1>statistics</h1>

      <Statistics
        good={good}
        average={average}
        positive={positive}
        neutral={neutral}
        bad={bad}
        all={all}
      />
    </div>
  );
};

export default App;
