import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./login.css"
import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword  } from "firebase/auth";

function Login(){
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const auth = getAuth();


    function handlelogin(){
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("Res" , user)
            // ...
            navigate("/home", {state:{name: user.displayName, email:user.email}});

        })
        .catch((error) => {
            console.log("Err" , error)
            const errorCode = error.code;
            alert('Invalid password or email')
            const errorMessage = error.message;
        });
    
    
    }

    
    return (
        <div className="login-form">
            <h1>Login</h1>
          <TextField label="Enter Email" variant="standard" onChange={(e) => {setEmail(e.target.value)}} />
         <TextField label="Enter password" variant="standard" onChange={(e) => {setPassword(e.target.value)}} />
         <Button onClick={handlelogin} variant="contained" color="success">Login</Button>
        </div>
    )
}
export default Login;