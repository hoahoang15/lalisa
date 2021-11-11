import './App.css';
// import Text from './components/Text';
// import Example from './components/Example';
// import Background from "./components/Background/Background"
// import Image from './components/Image/Image';
// import Button from './components/Button/Button'
// import ActivityWidget from "./components/ActivityWidget/ActivityWidget"
// import ButtonIcon from "./components/ButtonIcon"
import Menu from './components/Menu';

// ctrl + /
function App() {
  return (
    <div className="App">
      {/* <Text/>
      <Example/> */}
      {/* // -> block */}
      {/* <p>P</p>  */}
      {/* // inline block */}
      {/* <span>SPAN</span>
      <strong>STRONG</strong> */}
      {/* <Background/> */}
      {/* <Image/> */}
      {/* <Button/>d */}
      {/* props */}
      {/* <div style={{ display: "flex", gap: "60px" }}>
        <div style={{ width: "224px", height: "97px" }}>
          <ActivityWidget amount={12} />
        </div>
        <div style={{ width: "250px", height: "97px" }}>
          <ActivityWidget amount={13} />
        </div>
      </div> */}
      {/* <ButtonIcon/> */}
      <Menu />
    </div>
  );
}

export default App;
