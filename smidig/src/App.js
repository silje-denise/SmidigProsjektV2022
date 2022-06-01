
import './App.css';
import OverviewPage from './pages/OverviewPage';
import { Link, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {


  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <div className='navBar'>
      </div>
      <div className='main'>

      </div>
      <header className="App-header">
        <p>
          Velkommen guys!
        </p>
      </header>
    </div>
  )
}

export default App;
