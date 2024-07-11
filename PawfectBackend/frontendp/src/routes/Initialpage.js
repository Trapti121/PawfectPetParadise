import React, { useEffect } from 'react';
import '../components/Initialpage.css';
import { useNavigate, Link } from 'react-router-dom';
const Initialpage = () => {
    useEffect(() => {
        document.body.classList.add('initialpage');
        return () => {
          document.body.classList.remove('initialpage');
        };
      }, []);
    return (
    <div className='startpageBox'>
      <button className='userlog'>
      <Link to ="/login">
        Login as User
        </Link>
      </button>
      <button className='adminlog'>
      <Link to ="/admin-login">
        Login as Admin
        </Link>
      </button>
    </div>
  )
}

export default Initialpage;
