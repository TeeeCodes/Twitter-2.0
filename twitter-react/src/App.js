import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './Components/LogIn/LogIn';
import TodoList from './Components/CRUD/Post';
import SignUp from './Components/NewUser/New';
import Navbar from './Components/Dashboard/Nav';
import Home from './Components/Dashboard/Home';





const App=()=>{


	return(
		<div className='page'>
			<BrowserRouter>
				<Routes>
					<Route index='/' element={<Login/>} />
					<Route path='signup' element={<SignUp/>} />
					<Route path='dashboard' element={<div><TodoList/><Navbar/></div>} />
					<Route path='home' element={<div><Home/><Navbar/><TodoList/></div>} />
					

					
					
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App 
