const Filter = (props) => {
    const {newFilter, onChange} = props
  return (
    <>
      Filter name2:{" "}
      <input type="text" value={newFilter} onChange={onChange} />
    </>
  );
};

export default Filter;
