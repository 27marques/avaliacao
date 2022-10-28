//import logo from './logo.svg';
import { Button, ButtonBase } from '@mui/material';
import './App.css';
import Contador from './components/Contador';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá Mundo</h1>
        <Contador />
        <ButtonBase>Teste</ButtonBase>
        <Button variant="contained">Teste</Button>
      </header>
    </div>
  );
}

export default App;
