// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/navbar";
import FormPage from "./components/FormPage";
import About from "./components/About";
import { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Enable DarkMode");
  const [alert, setAlert] = useState(null);
  const ToggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeText("Disable Darkmode");
      document.body.style.backgroundColor = "#162336";
      displayAlert(" Darkmode have been Enabled ✔ 👍", "success");
    } else {
      setMode("light");
      setModeText("Enable DarkMode");
      document.body.style.backgroundColor = "white";
      displayAlert(" Lightmode have been Enabled ✔ 👍", "success");
    }
  };
  const displayAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="Textutils"
        mode={mode}
        toggleMode={ToggleMode}
        modetext={modeText}
      />
      <Alert alert={alert} />
      <div className="container">
        <FormPage displayAlert={displayAlert} mode={mode} />
        {/* <Routes>
            <Route
              exact
              path="/"
              element={<FormPage displayAlert={displayAlert} mode={mode} />}
            ></Route>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
          </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
