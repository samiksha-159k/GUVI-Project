
import React, {useState} from 'react'
import reactRouterDom from 'react-router-dom'
import { useHistory } from 'react-router-dom'


function Login() {
    
    const[username, setusername]= useState('')
    const[password, setpassword]= useState('')
    const history = useHistory()

    // function logout(){
    //     localStorage.removeItem('loggedin')
    // }

    function loggin(){
        var users=JSON.parse(localStorage.getItem('users'))
        var i=0;
        for(var user of users){
            if(user.username==username && user.password==password)
            {
                i++;

            }
        }
        if(i==1){
            alert("LOGIN SUCCESSFUL");
            localStorage.setItem('loggedin','loggedin')
            history.push('/profile')
            window.location.reload(true)
        }
        else{
            alert("INVALID LOGIN");
        }
    }

  return (
      <div>
      <h1 className='text-center mt-5'> LOGIN</h1>

   
      
    
         <div className='col-6 sa-loggg'>
                         <input type="text" placeholder='Email' className='form-control mb-3' value={username}
    onChange={(e)=> {setusername(e.target.value)}}/>
    <input type="password" placeholder='Password' className='form-control mb-3' value={password}
    onChange={(e)=> {setpassword(e.target.value)}}/>
    <button onClick={loggin} className="sa-btn">LOGIN</button>
                        </div>
                
          
      
    </div>
  )
}

export default Login