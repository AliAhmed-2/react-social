import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./login.css"
import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword ,GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


function Login(){

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const auth = getAuth();
    const gitprovider = new GithubAuthProvider();


    function LoginWithGithub(){
        signInWithPopup(auth, gitprovider)
        .then((result) => {
          // This gives you a GitHub Access Token. You can use it to access the GitHub API.
          const credential = GithubAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
      
          // The signed-in user info.
          const user = result.user;
          console.log(user)
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        }).catch((error) => {
          // Handle Errors here.
          console.log(error)
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GithubAuthProvider.credentialFromError(error);
          // ...
        });
    }
    

// handling function          

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
         <div className="login-methods">
            <button onClick={LoginWithGithub} className="github"><FaGithub /> Login with Github</button>
            <button className="facebook"><FaFacebook /> Login with Facebook</button>
            <button className="google"><FaGoogle /> Login with Google</button>
         </div>
        </div>
    )
}
export default Login;