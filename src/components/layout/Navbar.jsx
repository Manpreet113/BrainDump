const Nav = () => {
  console.log("Navbar component loaded");
  return (
    <nav className="w-5/6 flex items-center justify-between px-4 py-2 fixed top-4 backdrop-blur-sm z-10 h-13 border rounded-3xl border-black shadow-md">
      <NavLeft />
      <NavRight />
    </nav>
  );
};

function NavRight() {
  return (
    <div className="flex items-center justify-end space-x-4">
      <button className="font-bold text-xl text-black hover:text-white">
        <i
          className="ri-moon-line rounded-full p-2 w-10 h-10 flex items-center justify-center
  hover:bg-purple-700"
        ></i>
      </button>
      <button className="font-bold text-xl text-black hover:text-white">
        <i
          className="ri-menu-3-line rounded-full p-2 w-10 h-10 flex items-center justify-center
  hover:bg-purple-700"
        ></i>
      </button>
    </div>
  );
}

function NavLeft() {
  return (
    <div className="flex items-center justify-center space-x-4">
      <h1 className="text-2xl font-bold text-black" style={{ fontFamily: 'var(--font-secondary)' }}>BrainDump</h1>
    </div>
  );
}

export default Nav;
