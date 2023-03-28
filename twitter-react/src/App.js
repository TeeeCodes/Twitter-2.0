import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Login from './Components/LogIn/LogIn';
import NewUser from './Components/NewUser/new';


const App=()=>{

  const [form, setForm]=useState('login'); 
  

  const toggleForm = (formName) => {
	setForm(formName)
  }

	return(
		<div>
			{
				form == Login ? <Login formSwitch={toggleForm}/> : <NewUser/>
			}
		</div>
	)
}

export default App 
