import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import TextForm from './components/TextForm.js';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import React, { useState, Fragment } from 'react';

function App() {

// router
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <TextForm heading="Add your Text here" themeStyle={themeStyle}/>,
//   },
//   {
//     path: "/about",
//     element: <About/>,
//   },
// ]);

  const [btnModeText, setBtnModeText] = useState("Dark Mode");
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)
  const [themeStyle, setThemeStyle] = useState({
      backgroundColor: 'white',
      color: 'black'
  });

  const toggleMode = () => {
    if (mode === "light"){

      // Set dark mode Styles
      setMode("dark");
      setBtnModeText("Light Mode")
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "white";
      setThemeStyle(
        {
            backgroundColor: '#343a40',
            color: 'white'
        }
      );
      showAlert("Dark mode has been enabled", "success");
    }
    else {

       // Set light mode Styles
      setMode("light");
      setBtnModeText("Dark Mode")
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setThemeStyle(
        {
            backgroundColor: 'white',
            color: 'black'
        }
      );
      showAlert("Light mode has been enabled", "success");
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  return (
    <>
      <Router>
        <Fragment>
          <Navbar title="TextUtils" aboutText="About" mode={mode} btnModeText={btnModeText} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          <Routes>
            <Route path="/" exact element={<TextForm heading="Add your Text here" themeStyle={themeStyle}/>} />
            <Route path="/about" element={<About themeStyle={themeStyle}/>} />
          </Routes>
        </Fragment>
      </Router>
    </>
  );
}

export default App;
