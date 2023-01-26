import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Leftbar from "./components/leftbar/Leftbar";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/Rightbar";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import "./style.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";



function App() {
  const {currentUser} = useContext(AuthContext); //will be updated later

  const {darkMode} = useContext(DarkModeContext)

  const Layout = ()=>{
    return (
      <div className= {`theme-${darkMode? "dark": "light"}`}>
        <Navbar/>
        <div style={{display: "flex"}}>
        <Leftbar/>  
        <div style={{flex:"6"}}>
        <Outlet/>
        </div>
        <Rightbar/>
        </div>
      </div>
    );
  }

  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      return <Navigate to = "/login"/>;
    }
    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute>
      ),
      children:[
        {
          path: "/",
          element:<Home/>
        },
        {
          path: "/profile/:id",
          element:<Profile/>
        },
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
