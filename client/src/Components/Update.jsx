import Navbar from './Navbar';
import react from 'react';
import axios from 'axios';
import {Context} from "../context/Context.js";

function Update()
{
  const [profile,setprofile]=react.useState(null);
  const [username,setusername]=react.useState("");
  const [password,setpassword]=react.useState("");
  const [email,setemail]=react.useState("");
  const [success,setsuccess]=react.useState(false);
  const{user}=react.useContext(Context);

  const folder = "http://localhost:5000/pictures/"

  const handle=async (e)=>{
      e.preventDefault();
      const updated={
        userId:user._id,
        username,
        email,
        password,
      };
      if(profile)
      {
        const data=new FormData();
        const fileName=Date.now()+profile.name;
        data.append("name",fileName)
        data.append("file",profile);
        updated.profilePic=fileName;
        try{
         await axios.post('/upload',data)
        }
        catch(err)
        {

        }

      }
      try {
        const res = await axios.put("/users/" + user._id, updated);
        setsuccess(true);
      } catch (err) {
        
      }
  }
  return(
    <>
    <Navbar/>
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <h2>Update Your Account</h2>
        </div>
        <form className="settingsForm" onSubmit={handle}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={profile ? URL.createObjectURL(profile) : folder+user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setprofile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setusername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setemail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <br/><br/>
          <button className="button3" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
    </div>
    </>
  )
}

export default Update;