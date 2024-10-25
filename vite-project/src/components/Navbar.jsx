import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-gray-800 text-white">
      <div className="flex items-center space-x-8">
        <div className="text-2xl font-bold">Logo</div>
        <ul className="flex space-x-6">
          <li><NavLink to="/" className="hover:text-gray-400">Home</NavLink></li>
          <li><NavLink to="/movies" className="hover:text-gray-400">Movies</NavLink></li>
          <li><NavLink to="/cast" className="hover:text-gray-400">Cast</NavLink></li>
          <li><NavLink to="/about" className="hover:text-gray-400">About</NavLink></li>
        </ul>
      </div>
      <div className="flex space-x-4">
        <button className="px-4 py-2 font-semibold rounded">Premium</button>
        <button className="px-4 py-2 font-semibold rounded">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
