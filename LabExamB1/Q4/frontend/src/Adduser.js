import React, { useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
const Adduser = () => {
  const navigate= useNavigate();

const [data,setUser]=useState({
    fname:"",
    lname:"",
    addr:"",
    pin:0
})

const handleSubmit=()=>{
  const content=JSON.stringify(data);
  console.log(content);
 const result= axios.post("http://localhost:5000/users",content,{
  headers: {
    'Content-Type': 'application/json'
  }});
 result.then((data)=>{
  console.log(data.status);
  if(data.status==200)
  {
    navigate("/");
  }
 })
}

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="fname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fname"
            aria-describedby="emailHelp"
            onChange={e=>setUser({...data,fname:e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lname"
            onChange={e=>setUser({...data,lname:e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            aria-describedby="emailHelp"
            onChange={e=>setUser({...data,addr:e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pin" className="form-label">
            Pincode
          </label>
          <input
            type="number"
            className="form-control"
            id="pin"
            onChange={e=>setUser({...data,pin:e.target.value})}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Adduser;
