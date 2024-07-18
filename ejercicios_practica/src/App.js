import './App.css';
import { NameList } from './components/NameList';
import { Counter } from './components/Counter';
import { NoteApp } from './components/NoteApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NameList />
        <Counter />
        <NoteApp />
      </header>
    </div>
  );
}

export default App;
