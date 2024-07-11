import React, { useState, useEffect } from 'react';
import axios from "axios"
import '../components/Register.css'
import { useNavigate, Link } from 'react-router-dom';

export const Register = (props) => {
  const history=useNavigate();
  const [email, setEmail] = useState('');
  const [pass,setPass]  = useState('');
  const [name] = useState('');
  const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
      }
  async function submit(e){
    e.preventDefault();

    try{

        await axios.post("http://localhost:8000/signup",{
            email,pass
        })
        .then(res=>{
            if(res.data==="notexist"){
                history("/")
            }
            else if(res.data==="exist"){
                alert("User Already Exists")
                history("/")
            }
        })
        .catch(e=>{
            alert("wrong details")
            console.log(e);
        })

    }
    catch(e){
        console.log(e);

    }

}
useEffect(() => {
      document.body.classList.add('login-body');
  
      return () => {
        document.body.classList.remove('login-body');
      };
    }, []);
return (
      <>
       <div className="Form">
      <h1>Register here</h1>
      <form onSubmit={handleSubmit}>
        <label htmlfor="name">Full name</label>
        <input value={name} name="name" placeholder="full Name" ></input>
      <label htmlfor="email">email</label>
     <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
     <label htmlfor="Password">Password</label>
      <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password"/>
      <button type="submit" onClick={submit} >Register</button>
  </form>
  <button>
    <Link to="/login">
          Already have an account? Login here.</Link>
        </button>
  </div>
   </>
    );
  };

export default Register;
