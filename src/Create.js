import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

const [title, setTitle] = useState('')
const [body, setBody] = useState('')
const [author, setAuthor] = useState('-- Select Author --')

const [isPending, setIsPending] = useState(false)

const history = useHistory();

const handleSubmit = (e) =>{
    e.preventDefault();
    if(author !== '-- Select Author --'){
        const blog = {title,body,author}

        setIsPending(true)

        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            alert("Added new blog!.")
            // history.go(-1)
            history.push('/')
        })

        setIsPending(false)

    }else{
        alert('Select Author!')
    }
}

    return (  
        <div className="create">
            <h2>Create New Blogs !!</h2>

            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type='text' required
                    placeholder="-- Title --"
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}
                />

                <label>Blog body:</label>
                <textarea required
                    rows="5"
                    placeholder="-- Body --"
                    value={body}
                    onChange={(e)=>{setBody(e.target.value)}}
                ></textarea>

                <label>Author:</label>
                <select
                    value={author}
                    onChange={(e)=>{setAuthor(e.target.value)}}
                >
                    <option value='-- Select Author --'>-- Select Author --</option>
                    <option value='Mario'>Mario</option>
                    <option value='Yorshi'>Yorshi</option>
                    <option value='Daniel'>Daniel</option>
                    <option value='Michel'>Michel</option>
                    <option value='Emma'>Emma</option>
                </select>
                
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog</button>}
            
            </form>

        </div>
    );
}
 
export default Create;