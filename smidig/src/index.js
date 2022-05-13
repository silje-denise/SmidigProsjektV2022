import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navigation from './components/Navigation';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import {BrowserRouter, NavigationType } from 'react-router-dom';

=======
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import ChooseAvatarPage from './pages/ChooseAvatarPage';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage.jsx'
import MapPage from './pages/MapPage';
import QuizPage from './pages/QuizPage';
>>>>>>> 339b7b23b95f3aeb8c2264561063d70171c866c3

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LandingPage/>}/>
        {/* <Route path={"/overview"} element={<OverviewPage/>}/> */}
        <Route path={"/profile"} element={<ProfilePage/>}/>
        <Route path={"/quiz"} element={<QuizPage/>}/>
        <Route path={"/map"} element={<MapPage/>}/>
        <Route path={"/settings"} element={<SettingsPage/>}/>
        <Route path={"/chooseavatar"} element={<ChooseAvatarPage/>}/>
      </Routes>

  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();