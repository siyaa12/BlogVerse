import react from 'react';
import '../styles/home.css';
import '../styles/navbar.css';
import AllPost from './AllPost';
import Navbar from './Navbar';
import Title from './Title';
import axios from 'axios';
import {useLocation} from 'react-router';
import {Context} from "../context/Context.js";
function Home()
{
  const {user,logged}=react.useContext(Context);
  console.log(user.username)
  console.log(logged)
  const [blogs,setblogs]=react.useState([]);
  const loc=useLocation()
  console.log(loc)
  react.useEffect(()=>{ const fetchData=async  ()=>{
   axios.get('/blogs'+loc.search)
   .then((res)=>{
    //console.log(res.data)
    setblogs(res.data);
   })
  }
  fetchData()
  },[loc.search])
    return(
    <>
  <div className="home">
    <Navbar/>
    <Title/>
   <AllPost blog={blogs}/>
  </div>
  </>
    )
}


export default Home;