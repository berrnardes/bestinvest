import "./App.css";
import Sidebar from "./Sidebar2";

function App() {
  return (
    <div className="app bg-indigo-900 flex text-white">
      <Sidebar />

      <div className="p-5 pt-8">
        <h1>Home</h1>
      </div>
    </div>
  );
}

export default App;
