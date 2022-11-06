import { ButtonClasses, ButtonBase } from '@mui/material'
import './App.css';
import FetchProducts from './components/FetchProducts';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá Mundo</h1>
        <FetchProducts/>
        </header>
    </div>
  );
}

export default App;

