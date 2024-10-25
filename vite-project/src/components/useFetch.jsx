import { useEffect, useState } from "react"


const useFetch = (url) => {
  
   const [data,setData] = useState([]);
   const [error,setError] = useState(null);
   const [isLoading,setIsLoading] = useState(true);


    useEffect(()=>{

   fetch(url)
   .then(res =>{
        if(!res.ok){
            throw Error('Database Down');
        }
        return res.json();
   })
   .then(data =>{
    setData(data);
   })


    },[])
  
    return {data,error,isLoading}
}
export default useFetch