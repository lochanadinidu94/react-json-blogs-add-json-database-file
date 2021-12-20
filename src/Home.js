import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import AllUrls from "./URLs";

const Home = () => {

    //Json server access

    // use for before accessing Jason server
    // const [blogs, setBlogs] = useState([
    //     {title: 'My Website 1', body:'qwerty uiop',author:'Mario', id:1},
    //     {title: 'My Website 2', body:'asdfg hjklp',author:'JRK', id:2},
    //     {title: 'My Website 3', body:'zxcvb nmlpo',author:'Mario', id:3}
    // ]);

    const jsonurl = AllUrls();

    const [name, setName] = useState('Mario Def Pless de Silva')

    // const {blogs, isPending, err} = useFetch('http://localhost:8000/blogs')
    const {blogs, isPending, err} = useFetch(jsonurl)

    // const handleDelete = (id) =>{
    //     const newBlogs = blogs.filter((blog) => blog.id !== id)
    //     setBlogs(newBlogs)
    // }

    const changeName = ()=>{
        setName('New Name is Availabele!!!!')
    }

    //before using Json
    // useEffect(()=>{
    //     console.log("useEffect Render!")
    // },[name])

    return ( 
        <div className="Home">

            { err && <div> {err} </div>}

            { isPending && <div> Loarding.....! </div> }

            { !err && <div>

                { blogs && <BlogList blogs={blogs} title="All Blogs !" />}
                
                { blogs && <BlogList blogs={blogs.filter( (blog) => 
                    blog.author === 'Mario'  
                )} title="Mario's Blogs !" />}

                {/* after start custome hooks (usefecth) */}
                {/* { blogs && <BlogList blogs={blogs} title="All Blogs !" handleDelete={handleDelete}/>}
                
                { blogs && <BlogList blogs={blogs.filter( (blog) => 
                    blog.author === 'Mario'  
                )} title="Mario's Blogs !" handleDelete={handleDelete}/>} */}
            
                    -------
                    <br></br>

                <button onClick={changeName}>Change Name</button>
                <p>{name}</p>     

            </div> } 

        </div>
     );
}
 
export default Home;