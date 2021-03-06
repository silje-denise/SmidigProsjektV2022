import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import ChooseAvatarPage from './pages/ChooseAvatarPage';
import LandingPage from './pages/LandingPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import SettingsPage from './pages/SettingsPage.jsx'
import MapPage from './pages/MapPage';
import MapPageAdrian from './pages/MapPageAdrian';
import QuizPage from './pages/QuizPage';
import OverviewPage from './pages/OverviewPage';
import GamesLandingPage from './pages/GamesLandingPage.jsx';
import HistoryPage from './pages/HistoryPage';
import HistoryInfoContainer from './components/group3/HistoryInfoContainer.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  
  <BrowserRouter >
      <Routes>
        <Route path={"/"} element={<LandingPage/>}/>
        <Route path={"/overview"} element={<OverviewPage/>}/> 
        <Route path={"/profile"} element={<ProfilePage/>}/>
        <Route path={"/quiz"} element={<QuizPage/>}/>
        <Route path={"/games"} element={<GamesLandingPage/>}/>
        <Route path={"/map"} element={<MapPage/>}/>
        <Route path={"/settings"} element={<SettingsPage/>}/>
        <Route path={"/chooseavatar"} element={<ChooseAvatarPage/>}/>
        <Route path={"/history"} element={<HistoryPage/>}/>
        <Route path={"/history-info"} element={<HistoryInfoContainer/>}/>
      </Routes>

  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();