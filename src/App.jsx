import React, { useContext, useEffect, useState } from 'react';
import { Context } from './state';
import { fetchAuthentication } from './sagas/authenticationSaga';
import Admin from './components/Admin';
import Login from './components/Login';

const App = (props) => {
  //localStorage.removeItem('token')
  
  const token = localStorage.getItem('token')

  return (
    <>
      {token ? (
        <Admin></Admin>
      ) : (
        <Login></Login>
      )}
    </>
  )
}

export default App;
