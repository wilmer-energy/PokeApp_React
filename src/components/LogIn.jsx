import React from 'react';
import { useDispatch } from 'react-redux/es/exports'
import { input } from '../store/slices/userName.slice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Ash from "../images/Ash.png"
import pokeball from "../images/pokeball.png"

const LogIn = () => {
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const [userName, setUserName] = useState("")

    const submit = (e) => {
        e.preventDefault()
        dispatch(input(userName))
       navigate("/pokedex")
    }

    return (
        <div className='logIn'>
            <h2>Hello Trainer!</h2>
            <img src={Ash} alt="" /><br/>
            <span>Give your name to start</span>
            <br/>
            <form onSubmit={submit}>
                <label htmlFor="userName">User Name:  
                    <input type="text" id="userName" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
                </label>
                <button type='submit'>Sign In</button>
            </form>
        </div>
    );
};

export default LogIn;