import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // const removeBodyClass = () => {
  //   document.body.classList.remove("bg-light");
  //   document.body.classList.remove("bg-dark");
  //   document.body.classList.remove("bg-danger");
  //   document.body.classList.remove("bg-success");
  //   document.body.classList.remove("bg-warning");
  // };

  const toggleMode = (cls) => {
    // removeBodyClass();
    // document.body.classList.add("bg-" + cls);

    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0d1b4c";
      // document.title = "TextUtils - Dark mode";
      showAlert("dark mode is here", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // document.title = "TextUtils - Light mode";
      showAlert("light mode is here", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/About" element={<About mode={mode} />}></Route>
            <Route
              exact
              path="/"
              element={<TextForm mode={mode} showAlert={showAlert} />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
