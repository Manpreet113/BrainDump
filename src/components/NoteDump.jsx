import { useState, useEffect } from "react";

function NoteDump() {
  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem("notes")) || []);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, { id: Date.now(), text: newNote }]);
      setNewNote("");
    }
  };

  return (
    <section className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
        📝 Note Dump
      </h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Dump your thoughts..."
        />
        <button
          onClick={addNote}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </div>
      <ul className="mt-3 space-y-2">
        {notes.map((note) => (
          <li
            key={note.id}
            className="p-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded"
          >
            {note.text}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default NoteDump;