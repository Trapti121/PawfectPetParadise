import React, { useState, useEffect } from 'react';
import axios from "axios"
import '../components/Login.css';
import { useNavigate, Link } from 'react-router-dom';

export const AdminLogin= (props) => {

  const history=useNavigate();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
  };
  async function submit(e){
    e.preventDefault();

    try{
        await axios.post("http://localhost:8000/login",{
            email,pass
        })
        .then(res=>{
            if(res.data==="exist"){
                alert("Admin signed in")
                console.log(res.config.data);
                localStorage.setItem("adminlogins",JSON.stringify(res.config.data));
                history("/")
            }
            else if(res.data==="notexist"){
                alert("Admin have not Registered!")
                history("/register")
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

};
  useEffect(() => {
    document.body.classList.add('login-body');


    return () => {
      document.body.classList.remove('login-body');
    };
  }, []);

    return (
    <>
      <div className="Box">
        <div className="Form">
          <form onSubmit={handleSubmit}>
            <h1>Login as Admin</h1>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
            />
            <label htmlFor="password">Password</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="password"
            />
           <button type="submit" onClick={submit} > Login </button>
          </form>
          <button>
          <Link to="/register">Don't have an account? Register here.</Link>
         </button>
        </div>
      </div>
    </>
  );
};
export default AdminLogin;