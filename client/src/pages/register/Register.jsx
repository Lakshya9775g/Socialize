<<<<<<< HEAD
import './register.scss';
import { Link } from "react-router-dom";

const Register = ()=> {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>What's up mates</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.</p>
                    <span>You Already Have An Account?</span>
                    <Link to = "/login">
                        <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form >
                        <input type="text" placeholder="Full Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="text" placeholder="username"/>
                        <input type="password" placeholder="password"/>
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;

=======
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import axios from "axios";

const Register = () => {

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  };

  console.log(err)
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Lama Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" name = "username" onChange={handleChange} />
            <input type="email" placeholder="Email" name = "email" onChange={handleChange}/>
            <input type="password" placeholder="Password" name = "password" onChange={handleChange}/>
            <input type="text" placeholder="Name" name = "name" onChange={handleChange}/>
            {err && err }
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
>>>>>>> ef40cc4537ab40fa5ed62a2216fb3f2c2746ebfb
