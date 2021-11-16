import React ,{useState}from 'react'  // Loading the react library 

function Counter() {
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
