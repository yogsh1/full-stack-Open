const History = (props) => {
  const {allClicks} = props;
  console.log(allClicks)
  // This is called conditional rendering
  if (allClicks.length === 0) {
    return <div>the app is used by pressing the buttons.</div>;
  }
  return <div>button press history: {allClicks.join(' | ')}</div>;
};

export default History;
