import '../styles/signup.css'
import react from 'react';
import {Context} from "../context/Context.js";
import axios from 'axios';
import Navbar from './Navbar';
function Login()
{
  const [username,setusername]=react.useState('');
  const [password,setpassword]=react.useState('');
  const { user,setuser,logged,setlogged,photo,setphoto} = react.useContext(Context);
  console.log(user)
  const handle=async (e)=>{
   e.preventDefault();
   //dispatch({type:"login_start"})
   try{
    const res=await axios.post('/authenciate/login',{
      username,
      password
    });
    setlogged(true)
    setuser(res.data);
    setphoto()
    console.log(user);
    console.log(logged)
    logged&&window.location.replace('/write')
   }
   catch(err)
   {
    
   }
  };
  //console.log(user);
  return(
    <>
    <Navbar/>
    <div className="container-fluid">
    <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form class="form"onSubmit={handle}>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" onChange={(e)=>setusername(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" onChange={(e)=>setpassword(e.target.value)}/>

        <button class="button1" >Log In</button>
        <div className="social">
          <div className="go"><i className="fab fa-google"></i>  Google</div>
          <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
        </div>
    </form>
    </div>
    </>
  )
}

export default Login;