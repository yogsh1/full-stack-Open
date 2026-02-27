const PersonForm = (props) => {
  const {addToPhonbook, newName, newNumber, onChange, onChange2} = props;
  return (
    <>
      <form onSubmit={addToPhonbook}>
        <div>
          name: <input value={newName} onChange={onChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={onChange2} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
