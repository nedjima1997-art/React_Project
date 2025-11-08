
import './App.css';
import About from './components/About/About';
import Calculatrice from './components/Calculator';
import Contact from './components/contact/FormContact';

import Service from './components/Services';
import Home from './Home';

function App() {
  return (
    <div className="App">
    <h1>Welcome !</h1>
    <Home/>
    <Contact/>
    <Service/>
    <About name={"Nedjima"} age={28}/>
    <About name={"Ines"} age={19}/>
    <Calculatrice module1={19} module2={9}/>

    </div>
  );
}

export default App;