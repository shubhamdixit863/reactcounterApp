import React,{useState,useEffect} from 'react'
import axios from 'axios';

const Api = () => {
   const [data,setData]=useState([]);


   useEffect(()=>{

    axios.get("http://localhost:9000/user").then(data=>{
       
        setData(data["data"]);

    })

   },[])

    return (
        <div className="row" >
            <h1>Api Component</h1>
            {
                data.map(ele=>(

                    <div className="col-4">
                        <h5>{ele.name}</h5>
                        <h5>{ele.age}</h5>
                        <img src={ele.picture}/>

                        
                       
                    </div>


                ))

            }



        </div>
    )
}

export default Api
