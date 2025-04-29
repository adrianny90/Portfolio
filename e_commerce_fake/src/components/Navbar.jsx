import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <header className="bg-blue-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            Home
          </Link>
          <Link to="/cart" className="text-2xl font-bold" role="button">
            Cart
          </Link>
        </div>
      </header>
      <div className="flex flex-wrap justify-center">
        <Link to="/jewelery">
          <button className="bg-blue-200 border-2 border-blue-500 text-blue-700 m-4 px-6 py-2 text-2xl font-bold rounded-lg shadow-md hover:bg-blue-300 hover:border-blue-600 transition duration-300">
            Jewelery
          </button>
        </Link>
        <Link to="/electronics">
          <button className="bg-blue-200 border-2 border-blue-500 text-blue-700 m-4 px-6 py-2 text-2xl font-bold rounded-lg shadow-md hover:bg-blue-300 hover:border-blue-600 transition duration-300">
            Electronics
          </button>
        </Link>
        <Link to="/mensclothing">
          <button className="bg-blue-200 border-2 border-blue-500 text-blue-700 m-4 px-6 py-2 text-2xl font-bold rounded-lg shadow-md hover:bg-blue-300 hover:border-blue-600 transition duration-300">
            Men's clothing
          </button>
        </Link>
        <Link to="/womensclothing">
          <button className="bg-blue-200 border-2 border-blue-500 text-blue-700 m-4 px-6 py-2 text-2xl font-bold rounded-lg shadow-md hover:bg-blue-300 hover:border-blue-600 transition duration-300">
            Women's clothing
          </button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
