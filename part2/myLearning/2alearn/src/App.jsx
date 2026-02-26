import Course from "./components/Course";
import Note from "./components/note";

const App = ({ notes }) => {

  const course = {}

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>

      <Course course = {course}/>
    </div>
    
  );
};

export default App;
