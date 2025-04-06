import { useState, useEffect } from "react";

function IdeaBoard() {
  const [ideas, setIdeas] = useState(() => JSON.parse(localStorage.getItem("ideas")) || []);
  const [newIdea, setNewIdea] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    localStorage.setItem("ideas", JSON.stringify(ideas));
  }, [ideas]);

  const addIdea = () => {
    if (newIdea.trim()) {
      setIdeas([...ideas, { id: Date.now(), text: newIdea }]);
      setNewIdea("");
    }
  };

  const deleteIdea = (id) => {
    setIdeas(ideas.filter((idea) => idea.id !== id));
  };

  const startEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    setIdeas(ideas.map((idea) =>
      idea.id === id ? { ...idea, text: editText } : idea
    ));
    setEditId(null);
    setEditText("");
  };

  return (
    <section className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
        💡 Idea Board
      </h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={newIdea}
          onChange={(e) => setNewIdea(e.target.value)}
          className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Capture an idea..."
        />
        <button
          onClick={addIdea}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </div>
      <ul className="mt-3 space-y-2">
        {ideas.map((idea) => (
          <li
            key={idea.id}
            className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded"
          >
            {editId === idea.id ? (
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-1 p-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
                <button
                  onClick={() => saveEdit(idea.id)}
                  className="px-2 py-1 bg-purple-600 text-white rounded hover:bg-purple-700"
                >
                  Save
                </button>
              </div>
            ) : (
              <>
                <span className="flex-1">{idea.text}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => startEdit(idea.id, idea.text)}
                    className="px-2 py-1 bg-purple-600 text-white rounded hover:bg-purple-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteIdea(idea.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default IdeaBoard;