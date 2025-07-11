// Layout.jsx
// Main layout component: includes sidebar, nav, modals, and page content
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import GradientBackground from "./GradientBackground";
import GlobalHotkeys from "./GlobalHotkeys";
import SearchModal from "./SearchModal";
import ShortcutCheatsheet from "./ShortcutCheatsheet";
import useModalStore from "../store/useModalStore";

const Layout = () => {
  // Modal state setters from global store
  const { setShowSearch, setShowCheatsheet } = useModalStore();

  // Listen for Escape key to close modals
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setShowSearch(false);
        setShowCheatsheet(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [setShowSearch, setShowCheatsheet]);

  return (
    // Main app layout: sidebar, nav, modals, and routed content
    <div className="mt-15 flex h-screen relative bg-gray-50 dark:bg-black text-black dark:text-white">
      <GradientBackground />
      <Sidebar />
      <div className="flex flex-col flex-1 relative z-10">
        <Nav />
        <GlobalHotkeys />
        <SearchModal />
        <ShortcutCheatsheet />
        {/* Main routed page content */}
        <main className="flex-1 overflow-y-auto px-6 md:px-20 lg:px-36 pt-6 pb-20">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
