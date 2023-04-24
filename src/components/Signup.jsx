import React, {useState}from "react";

export default function Signup() {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(email,password);
    }
  return (
    <div className="container my-3">
        <h3>Please Sign Up!!!</h3>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Id
          </label>
          <input
            type="email"
            placeholder='abc@abc.com'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={password}
            placeholder='123456'
            onChange={(e)=>setPassword(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success" >
          Log In
        </button>
        </form>
    </div>
  );
}
