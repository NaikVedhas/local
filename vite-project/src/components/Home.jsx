import useFetch from "./useFetch"
import { Link } from "react-router-dom"

export const Home = () => {
  
 
  
  return (
    <div>
      {/* <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs" alt="" /> */}
    <div className="my-3 mx-40 p-2">

    <h1 className="text-center text-7xl p-3">Flitch</h1>
    <h3 className="text-center text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero exercitationem ipsa ut enim ipsam in voluptates inventore tenetur magnam sint adipisci, perferendis, quos pariatur officia ullam itaque provident quisquam minima sed. Dolor, quisquam impedit.</h3>
    <h2 className="text-center p-2  hover:text-purple-600"><Link to={`/movies`} >Explore all Movies</Link></h2>
    </div>

    </div>
  )
}