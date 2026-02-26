const Part = (props) => {
  console.log(props, "Part");
  const {name, exercises} = props

  return (
    <p>
      {name} {exercises}
    </p>
  );
};

export default Part;
