import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './components/Home';
import EditPage from './components/Edit';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/edit/" element={<EditPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
