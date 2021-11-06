import './App.css';
import Text from './components/Text';
import Example from './components/Example';


function App() {
  return (
    <div className="App">
      <Text/>
      <Example/>
      {/* // -> block */}
      <p>P</p> 
      {/* // inline block */}
      <span>SPAN</span>
      <strong>STRONG</strong>
    </div>
  );
}

export default App;
