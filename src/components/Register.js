import React,{useState} from 'react';
import axios from 'axios';

const Register = () => {

    const [state,setState]=useState({
        name:"",
        username:"",
        password:"",

    })



    const handleChange=(event)=>{
        const value=event.target.value;
        const name=event.target.name;
        setState({...state,[name]:value});


    }



    const handleClick=()=>{

        //console.log(state);

        /// Api call we can do to

        axios.post("http://localhost:9000/savedata",state).then(response=>{
            console.log(response["data"]);
        })

    }

    return (
        <div className="row" >
            <h1>Registration Component</h1>
            <div className="col-4 offset-md-4">

                <input type="text" placeholder="Username" name="username" onChange={handleChange} className="form-control"/>
                <br></br>
                <input type="password" placeholder="Password" name="password" onChange={handleChange} className="form-control"/>
                <br></br>
                <input type="text" placeholder="Name" name="name" onChange={handleChange} className="form-control"/>    <br></br>
                <button className="btn btn-success" onClick={handleClick}>SignUp</button>



            </div>
           

            



        </div>
    )
}

export default Register
