import './App.scss';
import './Components/Button/Button'
import Button from './Components/Button/Button';

function App() {
  return (
    <div className="App">
      <Button text='1' type="light" action={() => {}}/>
      <Button text='%' type="dark" action={() => {}}/>
      <Button text='=' type="main" action={() => {}}/>
    </div>
  );
}

export default App;
