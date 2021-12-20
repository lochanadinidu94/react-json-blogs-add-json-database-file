import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import AllUrls from "./URLs";

const BlogDetails = () => {

    const jsonurl = AllUrls();
    console.log(jsonurl)

    const {id} = useParams();
    const {blogs, isPending,err} = useFetch(jsonurl+'/'+id)

    const history = useHistory();

    const handleDelete = () =>{
        fetch(jsonurl+'/'+id,{
            method:'DELETE'
        }).then(()=>{
            history.push('/');
        }).catch((err)=>{
            console.log(err.name)
        })
    }

    return ( 
        <div className="blog-details">
            <h2>Blog Details - {id}</h2>
            <br/>
            { err && <div> {err} </div>}
            { isPending && <div> Loarding.....! </div> }
            { blogs && (
                <article>
                    <h3>{blogs.title}</h3>
                    <p>Written by: {blogs.author}</p>
                    <br/>
                    <p className="blog-body">{blogs.body}</p>
                    <br/>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;