import { useState, useEffect } from 'react';

const useFetch = (url)=>{

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [err, setErr] = useState(null)

    useEffect(()=>{

        const abortCont = new AbortController();

        setTimeout( () =>{
          fetch(url)
          .then( res =>{
  
              if(!res.ok){
                  throw Error('URL not going to fetch datas!!')
              }
  
              return res.json()
          })
          .then( data =>{
              setErr(null)
              setBlogs(data)
              setIsPending(false)
          })
          .catch( err =>{

            if(err.name === 'AbortError'){
                console.log('Fetch was Abort')
            }else{
                setIsPending(false)
                setErr(err.message)
            }

          })
        },1000);

        return () => abortCont.abort();
  
      },[blogs, url])


      return {blogs, isPending,err}

}
export default useFetch;