import React ,{useState,useEffect}from 'react'  // Loading the react library 
import axios from "axios";



function Counter() {

useEffect(() => {
    axios({
        method: 'post',
        url: 'http://localhost:8080/api/postData',
        data: {
          firstName: 'Finn',
          lastName: 'Williams'
        }
      });
  
   
}, [])
    const [state,setState]=useState(0);

function increment(){
    setState(state+1);

}


function decrement(){
    setState(state-1);

}

    return (
        <div>
            <h1>
            {
                state
            }
            </h1>
          


            <button onClick={increment}>
                Increement
            </button>


            <button onClick={decrement}>
                Decrement
            </button>
            
        </div>
    )
}

export default Counter
