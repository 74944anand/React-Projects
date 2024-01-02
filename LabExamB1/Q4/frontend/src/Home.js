import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
const Home = () => {
const navigate= useNavigate();
const [user,setUser]= useState({
    email:"",
    pass:""
})
const handleSubmit=()=>{
    const content=JSON.stringify(user);
    console.log(content);
   const result= axios.post("http://localhost:5000/",content,{
    headers: {
      'Content-Type': 'application/json'
    }});
   result.then((data)=>{
    console.log(data.data);
    localStorage.setItem("admin",data.data);
    navigate("/addUser")
   })
}
    

  return (
    <div className="form">
      <form>
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={e=>setUser({...user,email:e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={e=>setUser({...user,pass:e.target.value})}
          />
        </div>
        <button type="button" className="btn btn-primary"  onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
