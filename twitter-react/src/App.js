import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Login from './Components/LogIn/LogIn';
import NewUser from './Components/NewUser/new';


const App=()=>{

  const [email,setEmail]=useState('login'); 
  const [passw, setPass]=useState(''); 

	return(
		<div>
			{
				email == Login ? <Login/> : <NewUser/>
			}
		</div>
	)
}

export default App 
