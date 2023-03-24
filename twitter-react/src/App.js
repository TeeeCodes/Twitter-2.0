import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

import Login from './Components/LogIn/LogIn';

const App=()=>{

  const [email,setEmail]=useState(''); 
  const [passw, setPass]=useState(''); 

	return(
		<div>
		<Login/>
		</div>
	)
}

export default App 
