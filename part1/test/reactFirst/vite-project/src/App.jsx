import Footer from "./component/Footer";
import Hello from "./component/Hello";

const App = () => {

  const friends = [
    {name: "Pablio escobar", age: 20},
    {name: "Kalu khatri", age: 24},

  ]
  const array = [ "jonathan vole ", "barister ", "nurse ", "solicitor"]
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);

  console.log("something is here component i am");

  const name = 'peter';
  const age = 105;
  return (
    // Using a root element is not the only working option. An array of components is also a valid solution:
    <>
      <h1>Greetings</h1>
      <div>
        {/* In React, the individual things rendered in braces must be primitive values, such as numbers or strings. */}
        <p>{friends[0].name} is {friends[0].age}</p>
        <p>{friends[1].name} is {friends[1].age}</p>
      </div>

      {/* React also allows arrays to be rendered if the array contains values ​​that are eligible for rendering (such as numbers or strings). */}
      <div>
        <p>{array}</p>
      </div>

      <Hello name = "Kalu" age = {50}/>
      <Hello name = "Monster" age = {age}/>
      <Hello name = {name} age = {age - 80}/>

      <Footer />


    </>
  );
  /* return [
    // Using a root element is not the only working option. An array of components is also a valid solution:
    
      <h1>Greetings</h1>,
      <Hello name = "Kalu" age = {50}/>,
      <Hello name = "Monster" age = {age}/>,
      <Hello name = {name} age = {age - 80}/>,

      <Footer />,
    ] */
};


export default App;
