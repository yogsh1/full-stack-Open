import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { useEffect } from "react";
// import axios from "axios";
import personsService from "./services/persons";
const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    /* axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
      }); */

    personsService.getAll().then((personsData) => {
      setPersons(personsData);
    });
  }, []);
  // console.log('sup!!', persons.length);

  const addToPhonbook = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    };

    const existingPerson = persons.find((person) => person.name === newName);
    // console.log(existingPerson);
    if (existingPerson) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with the new one?`,
        )
      ) {
        // send the update to the server using the existing person's ID

        personsService
          .update(existingPerson.id, nameObject)
          .then((returnedPerson) => {
            // update the react state with the new data from the server
            setPersons(
              persons.map((person) =>
                person.id !== existingPerson.id ? person : returnedPerson,
              ),
            );
            setNewName("");
            setNewNumber("");
          });
      }
      return;
    }

    personsService.create(nameObject).then((returnedData) => {
      setPersons(persons.concat(returnedData));
      setNewName("");
      setNewNumber("");
    });
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
  const deletebtn = (id) => {
    // console.log(persons, "you r hm")
    console.log(id, "ifd");

    // console.log("dltd");
    if (window.confirm("Are you sure about that")) {
      personsService.deleteIt(id).then((deletedData) => {
        console.log(deletedData);
        setPersons((prev) => prev.filter((person) => person.id !== id));
      });
    }
  };
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

      <Persons
        personsToShow={personsToShow}
        deletebtn={deletebtn}
        btnLabel={"Delete"}
      />
    </div>
  );
};

export default App;
