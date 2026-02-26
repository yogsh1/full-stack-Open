const Total = (props) => {
  console.log(props, "Total");
  const { parts } = props;
  console.log(parts, "Total2222");

  return (
    <p>
      <b>
        Number of exercises{" "}
        {parts.reduce((sum, part) => (sum += part.exercises), 0)}
      </b>
    </p>
  );
};
export default Total;
