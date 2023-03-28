import React from 'react'
import { useState } from 'react';

const NewUser = (props) => {
    const [email,setEmail]= useState(''); 
    const [pass, setPass]= useState('');
    const [name, setName] = useState(''); 
    const [dataInput, setDataInput] = useState('');

    const submit = () =>{
        const info={
            email:email,
            pass:pass
        }
        setDataInput([info]);
    }

	return(
    <div>
        <form action="" onSubmit={submit}> 
            <div>
            <label htmlFor=''>Full Name</label>
            <input value={name} name='' id="" placeholder=''/>
            </div>
            <div> 
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/> 
            </div> 
            <div> 
                <label htmlFor="passw">Password</label>
                <input type="password" name="passw" id="passw" value={pass} onChange={(e) => setPass(e.target.value)}/> 
            </div>  
            <button type="submit">Login</button>
        </form>
    </div>
	)
}

export default NewUser