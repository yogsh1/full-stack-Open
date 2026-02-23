const Header = (props) => {
  console.log(props, "Header");
  return <h1>{props.course}</h1>;
};

export default Header;
