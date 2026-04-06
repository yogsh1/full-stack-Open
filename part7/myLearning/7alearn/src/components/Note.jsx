import { useParams } from "react-router-dom";
const Note = (props) => {
  const { note } = props;

  return (
    <div>
      <h2>{note.content}</h2>
      <div>{note.user}</div>
      <div>
        <strong>{note.important ? "important" : ""}</strong>
      </div>
    </div>
  );
};

export default Note;
