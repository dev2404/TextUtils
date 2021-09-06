import "./App.css";
import Navbar from "./Components/Navbar";
// import FormText from "./Components/FormText";
import About from "./Components/About";

function App() {
  return (
    <>
      <Navbar title="textUtils" about="About Here" />
      <div className="container my-3">
        {/* <FormText heading="Enter Your Text Below TO Analye" /> */}
        <About />
      </div>
    </>
  );
}

export default App;
