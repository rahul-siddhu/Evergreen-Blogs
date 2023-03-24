import {useState, useEffect} from'react'
//Creating a custom hook

const useFetch = (url)=>{
    const [data, setData]=useState(null)//hooks
    const [isPending, setIsPending]=useState(true)
    const[error, setError]=useState(null)

    useEffect(()=>{
        const abortContent = new AbortController()
            fetch(url, {signal: abortContent.signal})
            .then(res =>{
                if(!res.ok){
                    throw Error('Error fetching data from the server')
                }
                return res.json()
            })
            .then(data =>{
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(e=>{
                if(e.name==='AbortError'){
                    console.log("Fetch aborted")
                }
                else{
                    setIsPending(false)
                    setError(e.message)
                }
            })
        return ()=> abortContent.abort()
    },[url])
    return {data , error, isPending}
}

export default useFetch