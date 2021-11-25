import './App.css';
import Header from './components/Header';
import Display from './components/Display';
import InputArea from './components/InputArea';
import Timer from './components/Timer';
import Restart from './components/Restart';

function App() {
  return (
    <div className="App">
      <Header />
      <Display />
      <div className="form">
        <InputArea />
        <Timer />
        <Restart />
      </div>
    </div>
  );
}

export default App;
