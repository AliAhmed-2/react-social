import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./signup.css"
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
// import Alert from '@mui/material/Alert';



function Signup() {
    const [userName, setUserName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const auth = getAuth();
    
    const navigate = useNavigate()
    function handleSignup(){
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
                displayName: userName, photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs10cupyp3Wf-pZvdPjGQuKne14ngVZbYdDQ&s"
            }).then(() => {

                sendEmailVerification(auth.currentUser)
                .then(() => {
                    // Email verification sent!
                    console.log("Email verification sent!")
                    navigate("/login");
                    // <Alert severity="success">Your account has created</Alert>
                    // ...
                })
                .catch(() => {
                    console.log("Verification not sent")
                   
                })
                
                console.log("Profile Updated")
                // Profile updated!
                // ...
            }).catch((error) => {
                console.log("Update Profile Err" , error)
                // An error occurred
                // ...
            });
            console.log("Res" , user)
            // ...
        })
        .catch((error) => {
            console.log("err" , error)
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
       
    }
    return (
        <div className="sign-upform">
            <h1>SignUp Form</h1>
            <TextField label="Enter Name" variant="standard" onChange={(e) => {setUserName(e.target.value)}} />
            <TextField label="Enter Email" variant="standard" onChange={(e) => {setEmail(e.target.value)}} />
            <TextField label="Set password" variant="standard" onChange={(e) => {setPassword(e.target.value)}}/>
            <TextField label="Confirm password" variant="standard" />
            <Button onClick={handleSignup} variant="contained" color="success">Signup</Button>
        </div>
    )
}


export default Signup;