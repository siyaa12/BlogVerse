import '../styles/AllPost.css'
import Post from './Post'
function AllPost({blog})
{
    return(
  <div className="posts">
    {blog.map((b)=>(
      <Post detail={b}/>
    )
     
    )}
  </div>
    )
}

export default AllPost;