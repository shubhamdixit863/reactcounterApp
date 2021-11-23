import React, { useState,useEffect } from "react";
import axios from "axios";

const Register = () => {
  const [state, setState] = useState({
    name: "Default Value",
    email: "",
    password: "",
    age: 0,
  });
//console.log("Component Rendered")
  const [apiData,setApiData]=useState([]);
  const [flag,setFlag]=useState(false);

  const getUsers=()=>{
    axios.get("http://localhost:9000/getUsers").then((response) => {
        setApiData(response["data"].user);
      });

  }

  const getUser=(id)=>{
    axios.get("http://localhost:9000/user/"+id).then((response) => {
        console.log(response["data"].user);
      });

  }

  useEffect(() => {
    getUsers();
    
   
  }, [flag])

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setState({ ...state, [name]: value });
  };

  const handleClick = () => {
    

    axios.post("http://localhost:9000/savedata", state).then((response) => {
      //console.log(response["data"]);
      setFlag(!flag);// toggling 
    });
  };

  const handleDelete=(id)=>{

    axios.delete("http://localhost:9000/delete/"+id, state).then((response) => {
        //console.log(response["data"]);
        setFlag(!flag);// toggling 
      });

  }

  return (
    <section>
      <div className="row">
        <h1>Registration Component</h1>
        <div className="col-4 offset-md-4">
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            className="form-control"
          />
          <br></br>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            className="form-control"
          />
          <br></br>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            className="form-control"
          />{" "}
          <br></br>
          <input
            type="number"
            placeholder="Age"
            name="age"
            onChange={handleChange}
            className="form-control"
          />{" "}
          <br></br>
          <button className="btn btn-success" onClick={handleClick}>
            SignUp
          </button>
        </div>
      </div>

      <div className="row" style={{marginTop:"80px"}}>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email </th>
              <th scope="col">Age</th>
              <th scope="col">Password</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
              {
                  apiData.map(ele=>(
                    <tr key={ele._id}>
                    <th scope="row">{ele._id}</th>
                    <td onClick={()=>getUser(ele._id)} style={{textDecoration:"underline",cursor:"pointer"}}>{ele.name}</td>
                    <td>{ele.email}</td>
                    <td>{ele.age}</td>
                    <td>{ele.password}</td>
                    <td><button className="btn btn-warning" onClick={()=>handleDelete(ele._id)}>Delete</button></td>
                  </tr>
                  ))
              }
           
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Register;
