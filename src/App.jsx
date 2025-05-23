import "./App.css";
import { Navbar } from "./components/Sidebar/Navbar";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <h1 class="text-3xl font-bold underline mt-10">Hello world!</h1>
    </>
  );
}

export default App;
