import '../styles/post.css'
import {Link} from 'react-router-dom';
export default function Post({detail}) {
 const folder="http://localhost:5000/pictures/"
 console.log(detail.photo);
  return (
    <div className="post">
      <img
        className="postImg"
        src={folder + detail.photo}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            {detail.categories.map((c)=>(
              <a href="#" className="link" to="/posts?cat=Music">
              {c.name}
            </a>
            ))}
           
          </span>
        </div>
        <span className="postTitle">
          <Link to={`/blogs/${detail.username}+${detail._id}`} className="link">
            {detail.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{new Date(detail.createdAt).toDateString()}</span>
        <span className="postCat">{detail.categories[0]}</span>
      </div>
      <p className="postDesc">
        {detail.description}
      </p>
    </div>
  );
}