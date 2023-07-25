import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'

const Login=(props)=> {
  const [credentials, setCredentials] = useState({email: "", password: ""}) 
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/auth/login", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify({email: credentials.email, password: credentials.password})
      });
      const json = await response.json()
      console.log(json);
      if (json.success){
          // Save the auth token and redirect
          localStorage.setItem('token', json.authtoken); 
          navigate('/');
          props.showAlert("Logged in successfully","success");
      }
      else{
        props.showAlert("Invalid credentials","danger");
      }
  }

  const onChange = (e)=>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-5">
          <label htmlFor="email" className="form-label">
            <strong>Email address</strong>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3 mt-5">
          <label htmlFor="password" className="form-label">
            <strong>Password</strong>
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            Enter your password here to complete the Login process
          </div>
        </div>
        <div className="text-center mt-5">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
