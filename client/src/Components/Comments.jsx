import react from 'react';
import '../styles/comments.css';
import {Context} from "../context/Context.js";
import axios from 'axios';
import { useEffect } from 'react';
import { useRouter} from 'react-router-dom'
import {useLocation} from 'react-router';
import Navbar from '../Components/Navbar';
function Comments()
{

    const{user,logged}=react.useContext(Context)
    const id=useLocation()
    const[comment,setcomment]=react.useState([])
    const[i,seti]=react.useState(false);
    const loc=id.pathname.split("/")[2]
    useEffect(()=>{
        const fetch=async ()=>{
           
            await axios.get("/comments/"+ loc)
           .then((res)=>{
            setcomment(res.data)
            seti(true);
           }) 
           }
        fetch();
    },[loc])
   console.log(comment)
 return(
    <>
    <Navbar/>
    <nav class="navbar navbar-expand-sm navbar-light">
    <img src="https://i.imgur.com/CFpa3nK.jpg" width="20" height="20" class="d-inline-block align-top rounded-circle" alt=""/> 
    <a class="navbar-brand ml-2" href="#" data-abc="true">Rib Simpson</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation"> 
        <span class="navbar-toggler-icon"></span> 
    </button>
    <div class="end">
        <div class="collapse navbar-collapse" id="navbarColor02">
               
        </div>
    </div>    
</nav>
<section>
    <div class="container">
        <div class="row">
            <div class="col-sm-5 col-md-6 col-12 pb-4">
                <h1>Comments</h1>
                {comment.map((b)=>(
               <div class="comment mt-4 text-justify float-left">
               <img src="https://i.imgur.com/yTFUilP.jpg" alt="" class="rounded-circle" width="40" height="40"/>
               <h4>{i&&b.username}</h4>
               <span>{i&&new Date(b.createdAt).toDateString()}</span>
               <br/>
               <p>{i&&b.description}</p>
           </div>
                ))}
                
                
            </div>
            {!logged&&<h1>Please Login First in order to Comment</h1>}
            {logged&&
            <div class="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
                <form id="algin-form">
                    <div class="form-group">
                        <h4>Leave a comment</h4>
                        <label for="message">Message</label>
                        <textarea name="msg" id=""msg cols="30" rows="5" class="form-control"></textarea>
                    </div>
                    
                </form>
            </div>
}
        </div>
    </div>
</section>
    </>
 )
}


export default Comments;