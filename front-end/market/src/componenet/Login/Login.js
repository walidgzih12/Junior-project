import React, { useEffect , useState } from 'react';
import {Link ,useNavigate} from 'react-router-dom';
import axios from "axios"
import './Login.css';

function Login() {
  const navigate = useNavigate();
 const [username,setUsername]= useState('')
 const [Tel , setTel ]=useState('')
 const [password ,setPassword]=useState('')
 const [image,setImage] = useState('')
 
 const handleSignup = () => {
  axios.post('http://localhost:3050/api/postusers', {
      username: username,
      Tel: Tel,
      password: password,
      image: image
    })
    .then((response) => {
      console.log("user created")
      navigate('/home');
      console.log(response.data); 
    })
    .catch((error) => {
      console.error(error);
      alert("An error occurred while signing up. Please try again.");
    });
};


useEffect(() => {
  function handleSignupClick() {
    const signupElement = document.getElementById('signup');
    const loginElement = document.getElementById('login');
    if (signupElement && loginElement) {
      signupElement.classList.remove('s-atbottom');
      signupElement.classList.add('s-attop');
      loginElement.classList.remove('l-attop');
      loginElement.classList.add('l-atbottom');
    }
  }

  function handleLoginClick() {
    const signupElement = document.getElementById('signup');
    const loginElement = document.getElementById('login');
    if (signupElement && loginElement) {
      loginElement.classList.remove('l-atbottom');
      loginElement.classList.add('l-attop');
      signupElement.classList.remove('s-attop');
      signupElement.classList.add('s-atbottom');
    }
  }

  const signupElement = document.getElementById('signup');
  const loginElement = document.getElementById('login');
  if (signupElement && loginElement) {
    signupElement.addEventListener('click', handleSignupClick);
    loginElement.addEventListener('click', handleLoginClick);
  }

  return () => {
    if (signupElement && loginElement) {
      signupElement.removeEventListener('click', handleSignupClick);
      loginElement.removeEventListener('click', handleLoginClick);
    }
  };
}, []);
 
  return (
    <div>
      <div className="login-signup l-attop" id="login">
        <div className="login-signup-title">
          LOG IN
        </div>
        <div className="login-signup-content">
          <div className="input-name">
            <h2>Username</h2>
          </div>
          <input type="text" name="username" value="" className="field-input" />
          <div className="input-name input-margin">
            <h2>Password</h2>
          </div>
          <input type="text" name="password" value="" className="field-input" />
          <div className="input-r">
            <div className="check-input">
              <input type="checkbox" id="remember-me-2" name="rememberme" value="" className="checkme" />
              <label className="remmeberme-blue" htmlFor="remember-me-2"></label>
            </div>
            <div className="rememberme"><label htmlFor="remember-me-2">Remember Me</label></div>
          </div>
          <button className="submit-btn">Enter</button>
          <div className="forgot-pass">
            <a href="#">Forgot Password?</a>
          </div>
        </div>
      </div>
      <div className="login-signup s-atbottom" id="signup">
        <div className="login-signup-title">
          SIGN UP
        </div>
        <div className="login-signup-content">
          <div className="input-name">
            <h2>Username</h2>
          </div>
          <input type="text" name="username" value={username} onChange={e=>setUsername(e.target.value)} className="field-input" />
          <div className="input-name input-margin">
            <h2>TEL N° </h2>
          </div>
          <input type="tel" name="Tel"  value={Tel} onChange={e=>setTel(e.target.value)}className="field-input" />
          <div className="input-name input-margin">
            <h2>Password</h2>
          </div>
          <input type="password" name="Password" value={password} onChange={e=>setPassword(e.target.value)} className="field-input" />
          <div className="input-name input-margin">
            <h2>PIC PROFILE </h2>
          </div>
          <input type="text" name="image" value={image} onChange={e=>setImage(e.target.value)} className="field-input" />
          <button className="submit-btn" onClick={handleSignup}>Enter</button>
        </div>
      </div>
    </div>
  );
}

export default Login;