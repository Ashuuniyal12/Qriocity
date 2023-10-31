import "./App.css";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Contact from './pages/Contact'
function App() {
  return (
    <>
      <div className="bg-[#000] z-50 justify-center items-center flex flex-col " >
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
