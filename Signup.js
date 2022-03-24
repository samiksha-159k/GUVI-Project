import React from 'react';
import { useState } from 'react/cjs/react.development';
import '../index.css';

function Signup() {

    const[name, setname]= useState('')
    const[username, setusername]= useState('')
    const[password, setpassword]= useState('')
    const[confirmpassword, setconfirmpassword]= useState('')

    function registeruser(event){

        event.preventDefault();
        var users=JSON.parse(localStorage.getItem('users') ||"[]")
        var newuser={
            name: name,
            username: username,
            password: password,
            confirmpassword: confirmpassword
        }

        users.push(newuser)

        localStorage.setItem('users',JSON.stringify(users))

        alert("REGISTRATION SUCCESSFUL");
    }

  return (
    <div>
        
            <h1 className='text-center mt-5'>REGISTER</h1>
           
            <div className=' col-6 sa-tab'>
            <form onSubmit={registeruser}>
                <input type="text" placeholder='Name' className='form-control mb-3' value={name}
                onChange={(e)=> {setname(e.target.value)}} required/>
                <input type="text" placeholder='Email' className='form-control mb-3' value={username}
                onChange={(e)=> {setusername(e.target.value)}} required/>
                <input type="password" placeholder='Password' className='form-control mb-3' value={password}
                onChange={(e)=> {setpassword(e.target.value)}} required/>
                  <input type="password" placeholder='ConfirmPassword' className='form-control mb-3' value={confirmpassword}
                onChange={(e)=> {setconfirmpassword(e.target.value)}} required/>
              
                <input type="submit"  className='btn btn-primary text-center col-6' value="Sign IN"/>
               <a href='/log' className=' sa-log'>LOGIN</a>
            </form>
            </div>
           
        </div>
  )
}

export default Signup
