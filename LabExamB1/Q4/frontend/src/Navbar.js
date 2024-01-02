import React, { useEffect } from 'react'

const Navbar = () => {
    const auth=localStorage.getItem("admin");
useEffect(()=>{

},[]);
    
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <a className="nav-link" href="/about">About</a>
        </li>
      </ul>
    </div>
  </div>
  <div>
    <ul className="navbar-nav">
        <li className="nav-item"> 
        {auth?<p>Welcome {auth}</p>:<a className="nav-link" href="/">Login</a>}   
        </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar





