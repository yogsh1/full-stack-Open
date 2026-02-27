import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const addToPhonbook = (event) => {
    event.preventDefault();
    // console.log("form submited", event);

    const nameObject = {
      name: newName,
      number: newNumber,
    };

    if (persons.some((person) => person.name === newName))
      return alert(`${newName} is already added to phonebook`);

    setPersons(persons.concat(nameObject));
    // console.log(persons, "3333");
    setNewName("");
    setNewNumber("");
  };

  const handleOnChange = (event) => {
    // console.log(event)
    // console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleOnChange2 = (event) => {
    // console.log(event.target.value);
    setNewNumber(event.target.value);
  };
  const handleOnChange3 = (event) => {
    // console.log(event.target.value);
    setNewFilter(event.target.value);
  };
  // if you can read this comment than say "gunyagunya"
  const personsToShow =
    newFilter === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(newFilter.toLowerCase()),
        );
  return (
    <div>
      <h2>Phonebook</h2>

      <Filter newFilter={newFilter} onChange={handleOnChange3} />

      <h3>Add a new</h3>
      <PersonForm
        addToPhonbook={addToPhonbook}
        newName={newName}
        newNumber={newNumber}
        onChange={handleOnChange}
        onChange2={handleOnChange2}
      />
      <h2>Numbers</h2>

      <Persons personsToShow={personsToShow} />
    </div>
  );
};

export default App;
