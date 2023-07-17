import react from 'react';
import {useLocation} from 'react-router';
import '../styles/single.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Context} from '../context/Context.js';
import Navbar from './Navbar'
import parse from 'html-react-parser';
function Single()
{
  const [blog,setblog]=react.useState([]);
  const[update,setupdate]=react.useState(false);
  const[title,settitle]=react.useState("")
  const[desc,setdesc]=react.useState("")
  const[file,setfile]=react.useState(null)
  const[i,seti]=react.useState(false)
  const id=useLocation();
  let loc=id.pathname.split("/")[2];
  const loc2=loc.split("+")[0];
  const loc3=loc.split("+")[1];
  const usern=blog.username;
  const {user}=react.useContext(Context);
  const folder="http://localhost:5000/pictures/"
  
  console.log(id)
  react.useEffect(()=>{
   const fetchSingle=async ()=>{
    await axios.get("/blogs/"+ loc3)
    .then((res)=>{
     setblog(res.data)
    })
    await axios.get(`/authenciate/?name=${loc2}`)
     .then((res)=>{
      setfile(res.data)
      seti(true)
     })
  }
   
   fetchSingle()
  },[i])
  const hupdate=async ()=>{
   try{
    await axios.put(`/blogs/${blog._id}`,{
      username:usern,
      title,
      desc
    })
    setupdate(false);
   }
   catch(err)
   {
    console.log(err);
    console.log(title)
   }
  }
  //console.log(blog)
  console.log(usern)
  console.log(user)
    return(
 <>
 <Navbar/>
   <div className="singlePost">
      <div className="singlePostWrapper">

        <img
          className="singlePostImg"
          src={folder+blog.photo}
          alt=""
        />
        {update?(<input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => settitle(e.target.value)}
          />):(
        <h1 className="singlePostTitle">
          {blog.title}
          {usern===user.username&&(
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"  onClick={() => setupdate(true)}></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
)}
        </h1>
        )}
         <div className="singlePostInfo">
          <span className="singlePostAuthor">
          <img src={i&&file[0]!==null&&folder+file[0].profile} className="top-img" alt="https://depositphotos.com/vector-images/no-profile-picture.html"></img>
            Creator:
            
            <Link to={`/profile/${blog.username}`} className="link">
              <b> {blog.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(blog.createdAt).toDateString()}
          </span>
        </div>
       {update ? (
          <textarea 
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{blog.description}</p>
        )}
        {update && (
          <button className="writeSubmit2" onClick={hupdate}>
            Update
          </button>
        )}
      </div>
    </div>
    <br></br>
    
    <Link to={`/comments/:${blog._id}`}>Comments</Link>
 </>
    )
}

export default Single;