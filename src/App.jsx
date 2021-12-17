import React from 'react';
import Admin from './components/Admin';
import './App.css'

const App = (props) => {
  localStorage.setItem('apiUrl', 'https://api.rating.chgk.net')
  //localStorage.removeItem('token')
  return (
    <Admin />
  )
}

export default App;
