import React, {useState} from 'react';
import { Route,
        Routes
        } from 'react-router-dom';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const [mode, setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);  
      }, 1500)
    }

  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = modeColor;
      showAlert("Dark Mode Enabled", "success");
      setInterval(() => {
        document.title = 'Dark Mode'
      }, 2800);
      setInterval(() => {
        document.title = 'TextUtils'
      }, 3000);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
      document.title = 'TextUtils - Light Mode'

    }
  }

  const [blueBtn,setBlueBtn] = useState({
    backgroundColor: 'blue',
    marginRight: '10px'
  })
  const [redBtn,setRedBtn] = useState({
    backgroundColor: 'red',
    marginRight: '10px'
  })
  const [greenBtn,setgreenBtn] = useState({
    backgroundColor: 'green',
    marginRight: '10px'
  })
  const [modeColor, setModeColor] = useState(null);

  const handleSelectBlue = () => {
    setBlueBtn({
      backgroundColor: 'blue',
      marginRight: '10px',
      border: '2px solid black'
    })
    setgreenBtn({
      backgroundColor: 'green',
      marginRight: '10px'
    })
    setRedBtn({
      backgroundColor: 'red',
      marginRight: '10px'
    })
    setModeColor('#060b4d')
  }
  const handleSelectgreen = () => {
    setBlueBtn({
      backgroundColor: 'blue',
      marginRight: '10px'
    })
    setgreenBtn({
      backgroundColor: 'green',
      marginRight: '10px',
      border: '2px solid black'
    })
    setRedBtn({
      backgroundColor: 'red',
      marginRight: '10px'
    })
    setModeColor('#29700b') 
  }
  const handleSelectRed = () => {
    setBlueBtn({
      backgroundColor: 'blue',
      marginRight: '10px'
    })
    setgreenBtn({
      backgroundColor: 'green',
      marginRight: '10px'
    })
    setRedBtn({
      backgroundColor: 'red',
      marginRight: '10px',
      border: '2px solid black'
    })
    setModeColor('#510101')
  }

  return (
    <>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} blueBtn={blueBtn} redBtn={redBtn} greenBtn={greenBtn} handleSelectBlue={handleSelectBlue} handleSelectgreen={handleSelectgreen} handleSelectRed={handleSelectRed} modeColor={modeColor}/>
        <Alert alert={alert}/>        
        <Routes>
          <Route path="/" element={<TextForm heading="Enter text below to analyze" mode={mode}/>}>
          </Route>
          <Route path="/about" element={<About/>}>
          </Route>
        </Routes>
    </>
  );
}
// export {Switch} from 'react-router-dom';
export default App;