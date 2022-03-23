import { useState } from "react";

import Login from "./Login";
import Signup from "./Signup";
import profile from "./profile";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
 

 

  return (
    <div>
    
        
       
      <BrowserRouter>
      <Route path='/log' component={Login} exact/>
      
     <Route path='/' component={Signup} exact/>
      
       <Route path='/profile' component={profile} exact/>
    
      </BrowserRouter>
    
    </div>
  );
}

export default App;
