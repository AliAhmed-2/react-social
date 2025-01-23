import React, { useEffect } from 'react'
import WaveGIF from './assets/wave.gif';
import "./home.css"
import { useLocation, useNavigate } from 'react-router-dom';


function Home(){
    const {state} = useLocation();
    const navigate = useNavigate();

    useEffect(()=> {
        if(state === null) {
            navigate('/login')
        }
    }, [state])

    return(
        <div>
            <img className="wave" src={WaveGIF} alt="" />
            <div className="details"><div><span>Name:</span><h1 className='name-heading'>{state?.name}</h1></div>
           <div><span>Email:</span> <h6 className='email-heading'>{state?.email}</h6></div></div>
        </div>
    )
}
export default Home;