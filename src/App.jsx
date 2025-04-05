import Layout from "./components/layout/Layout";

const App = () => {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white text-grey-700">
        <Layout />
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">BrainDump 🚀</h1>
          <p className="text-lg">This is where the chaos becomes clarity.</p>
        </div>
      </div>
    );
  };
  
  export default App;
  