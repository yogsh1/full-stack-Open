import Content from "./Content";
import Header from "./Header";
import Total from "./Total";
const Course = (props) => {
  console.log(props, "1111111111111");
  const { course } = props;
  console.log(course, "22222222222");
  return (
    <>
      <Header course={course.name} />
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </>
  );
};

export default Course;
