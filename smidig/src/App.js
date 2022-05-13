
import './App.css';
import OverviewPage from './pages/OverviewPage';
import { Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='navBar'>
      </div>
      <div className='main'>
        <Routes>
          <Route path='/overview' element={<overviewPage/>}/>
        </Routes>

      </div>
      <header className="App-header">
        <p>
          Velkommen guys!
        </p>
      </header>
      <Link to="/overview" component={OverviewPage}><p>overviewPage</p></Link>
    </div>
  )
}

export default App;
