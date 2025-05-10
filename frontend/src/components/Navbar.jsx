import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Blogify
        </Link>
        <div className="space-x-4">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            to="/create"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            + New Post
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
