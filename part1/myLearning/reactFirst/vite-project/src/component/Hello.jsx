function Hello(props) {
  // prop is an object
  console.log(props);
  return (
    <p>
      Hello {props.name}, you are {props.age} years old{" "}
    </p>
  );
}

export default Hello;
