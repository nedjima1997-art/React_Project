import './App.css';
import About from './components/About/About';
import Calculatrice from './components/Calculator';
import Contact from './components/contact/FormContact';
import Service from './components/Services';
import EffectHook from './components/EffectHook';
import EffectWIthCleanup from './components/EffectWithCleanup';
import EffectWithParametres from './components/EffectWithParametres';
import ExoState from './components/ExoState';
import UseStateHook from './components/UseStateHook';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <h1>Welcome to my project</h1>
      {/* <Home />
      <Contact />
      <Service />
      <About name={"Ines"} age={19} />
      <About name={"Dyhia"} age={21} />
      <Calculatrice note1={15} note2={12} />

      <UseStateHook />
      <ExoState />
      <EffectHook/>
       */}
      <EffectWithParametres/>
      <EffectWIthCleanup/>

    </div>
  );
}

export default App;