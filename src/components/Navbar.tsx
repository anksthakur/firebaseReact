import { Link } from "react-router-dom";
import Logout from "./Logout";

const Navbar = () => {
  return (
    <nav className="bg-orange-800 p-4">
      <div className="flex items-center justify-between">
        <div>
          <Link to="/news" className="text-white text-lg font-bold">
            NewsApp
          </Link>
        </div>

        <div>
        <ul className="flex flex-col md:flex-row md:mt-0 mt-2 items-center gap-10">
          {["entertainment", "general", "health", "science", "sports", "technology"].map((category) => (
            <li key={category} className="md:ml-4">
              <Link to={`/${category}`} className="text-white hover:underline">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Link>
            </li>
          ))} 
        </ul>
        </div>
        <div><Logout/></div>
      </div>
    </nav>
  );
};

export default Navbar;
