import { useState } from "react";
import NoteDump from "./components/NoteDump";
import TaskTracker from "./components/TaskTracker";
import IdeaBoard from "./components/IdeaBoard";
import Stats from "./components/Stats";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark:bg-black dark:text-white" : "bg-white text-black"
      } transition-colors duration-300`}
    >
      <header className="pt-6 px-6 flex justify-center">
        <div className="flex items-center justify-between border fixed z-30 w-5/6 backdrop-blur-xs dark:backdrop-blur-xs rounded-full px-4 py-2 shadow-md">
          <h1
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            BrainDump
          </h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-purple-600 dark:hover:bg-purple-600 transition-colors"
            >
              {darkMode ? (
                <i class="ri-sun-line"></i>
              ) : (
                <i class="ri-moon-line"></i>
              )}
            </button>
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 rounded-full hover:bg-purple-600 transition-colors"
            >
              <i className="ri-menu-3-line text-xl"></i>
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-3xl mx-auto p-6 pt-30 space-y-10">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">
            Declutter your mind, one dump at a time.
          </h2>
          <p className="text-lg text-gray-400">
            Your personal mental tracking dashboard — a minimal tool to log
            thoughts, track tasks, and organize random ideas before they vanish
            into the void.
          </p>
          {/* Placeholder for "Start Organizing Now" button - I'll add links later */}
          <a
            href="#app"
            className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Start Organizing Now
          </a>
        </div>
        <div id="app" className="space-y-8">
          <h3 className="text-2xl font-semibold text-center">Core Features</h3>

          <NoteDump />
          <TaskTracker />
          <IdeaBoard />

          <Stats />
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 p-6 text-center text-gray-500">
        <p>Built with React, rage, and a rapidly declining will to live.</p>
        <p>Don’t ask how it works. I don’t know. I blacked out.</p>
        <p>Code so scuffed, even AI refused to explain it.</p>
      </footer>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-64 h-full bg-gray-900 rounded-l-xl shadow-lg z-50 p-4"
          >
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <i className="ri-close-line text-xl hover:bg-purple-600 rounded-full"></i>
            </button>
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <a href="#note-dump" className="text-gray-300 hover:text-white">
                  Note Dump
                </a>
              </li>
              <li>
                <a
                  href="#task-tracker"
                  className="text-gray-300 hover:text-white"
                >
                  Task Tracker
                </a>
              </li>
              <li>
                <a
                  href="#idea-board"
                  className="text-gray-300 hover:text-white"
                >
                  Idea Board
                </a>
              </li>
              <li>
                <a href="#stats" className="text-gray-300 hover:text-white">
                  Stats
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 backdrop-blur-lg bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
