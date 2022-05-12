import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter } from 'react-router-dom';
import ChooseAvatarPage from './pages/ChooseAvatarPage';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';
import TempPage from './pages/TempPage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <BrowserRouter>
    {/*<App />*/}
    {/* <LandingPage /> */}
    {/* <ChooseAvatarPage/> */}
    {/* <ProfilePage/> */}
    <SettingsPage />
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();