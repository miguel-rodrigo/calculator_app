import './App.scss';
import Button from './Components/Button/Button';
import Screen from './Components/Screen/Screen'

function App() {
  return (
    <div className="App">
      <Screen currentOp='+' currentNumbers='1234.56' />
      <div className="button-row">
        <Button text='%' type="dark" action={() => {}}/>
        <Button text='CE' type="dark" action={() => {}}/>
        <Button text='C' type="dark" action={() => {}}/>
        <Button text='Del' type="dark" action={() => {}}/>
      </div>
      <div className="button-row">
        <Button text='1/x' type="dark" action={() => {}}/>
        <Button text='x^2' type="dark" action={() => {}}/>
        <Button text='SQRT' type="dark" action={() => {}}/>
        <Button text='/' type="dark" action={() => {}}/>
      </div>
      <div className="button-row">
        <Button text='7' type="light" action={() => {}}/>
        <Button text='8' type="light" action={() => {}}/>
        <Button text='9' type="light" action={() => {}}/>
        <Button text='x' type="dark" action={() => {}}/>
      </div>
      <div className="button-row">
        <Button text='4' type="light" action={() => {}}/>
        <Button text='5' type="light" action={() => {}}/>
        <Button text='6' type="light" action={() => {}}/>
        <Button text='-' type="dark" action={() => {}}/>
      </div>
      <div className="button-row">
        <Button text='1' type="light" action={() => {}}/>
        <Button text='2' type="light" action={() => {}}/>
        <Button text='3' type="light" action={() => {}}/>
        <Button text='+' type="dark" action={() => {}}/>
      </div>
      <div className="button-row">
        <Button text='+/-' type="light" action={() => {}}/>
        <Button text='0' type="light" action={() => {}}/>
        <Button text=',' type="light" action={() => {}}/>
        <Button text='=' type="main" action={() => {}}/>
      </div>
    </div>
  );
}

export default App;
