import './login.scss';
import { Link } from "react-router-dom";

const Login = ()=> {
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello mates</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.</p>
                    <span>Don't You Have An Account?</span>
                    <Link to= "/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form >
                        <input type="text" placeholder="username"/>
                        <input type="password" placeholder="password"/>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
