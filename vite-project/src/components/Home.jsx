import useFetch from "./useFetch"

export const Home = () => {
  
  const {data} = useFetch();
  console.log(data);
  
  const arr =data.results;
  console.log(arr);
  
  return (
    <div>
      
   

    </div>
  )
}