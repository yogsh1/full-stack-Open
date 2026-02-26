import Part from "./Part";

const Content = (props) => {
  console.log(props, "Content65");
  const { parts } = props;

  console.log(parts, "000000000000");

  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};
export default Content;
