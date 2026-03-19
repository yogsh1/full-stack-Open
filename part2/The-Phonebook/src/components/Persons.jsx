const Persons = (props) => {
  const { personsToShow, deletebtn, btnLabel } = props;
  return (
    <>
      <ol>
        {personsToShow.map((person) => (
          <li key={person.id}>
            {person.name} {person.number} <button onClick={() => deletebtn(person.id)}>{btnLabel}</button>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Persons;
