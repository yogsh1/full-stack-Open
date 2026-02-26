const Part = (props) => {
  console.log(props, "Part");
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

export default Part;
