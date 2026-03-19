import { useEffect, useState } from "react";
import Note from "./components/Note";
import axios from "axios";
import noteService from "./services/notes";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note.");
  const [showAll, setShowAll] = useState(true);

  /*   const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3001/notes").then((response) => {
      console.log("promise fulfilled");
      setNotes(response.data);
    });
  }
  // By default, effects run after every completed render, but you can choose to fire it only when certain values have changed.
  useEffect(hook, []); */

  useEffect(() => {
    /* console.log("effect");

    const eventHandler = (response) => {
      console.log("promise fulfilled");
      setNotes(response.data);
    };

    const promise = axios.get("http://localhost:3001/notes");
    promise.then(eventHandler); */

    noteService.getAll().then((initialNotes) => {
      // console.log(initialNotes)
      setNotes(initialNotes);
    });
  }, []);

  console.log("render", notes.length, "notes");

  const addNote = (event) => {
    // console.log(event);
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    };
    console.log(noteObject, "kokokokoko");

    /* axios.post("http://localhost:3001/notes", noteObject).then((response) => {
      console.log(response);
      setNotes(notes.concat(response.data));
      setNewNote("");
    }); */

    noteService.create(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
      setNewNote("");
    });
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const toggleImportanceOf = (id) => {
    // const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };
    // console.log(changedNote)

    /* axios.put(url, changedNote).then((response) => {
      setNotes(notes.map((note) => (note.id === id ? response.data : note)));
    }); */

    noteService.update(id, changedNote).then((returnedNote) => {
      setNotes(notes.map((note) => (note.id === id ? returnedNote : note)));
    }).catch(err => {
      alert(`the note '${note.content}' was already deleted from the server`)
      setNotes(notes.filter(n => n.id !== id))
    });;
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
