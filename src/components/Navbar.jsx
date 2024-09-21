import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 fixed top-0 left-0 right-0">
      <div className="container max-w-6xl mx-auto flex justify-between items-center">
        <div>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt="Pokemon Logo"
            className="h-6 md:h-12"
          />
        </div>
        <ul className="flex gap-0 md:gap-3">
          <li>
            <Link to="/" className="text-white font-semibold hover:text-yellow-300 text-lg hover:bg-blue-600 p-2 rounded">Home</Link>
          </li>
          <li>
            <Link to="/favorites" className="text-white font-semibold hover:text-yellow-300 text-lg hover:bg-blue-600 p-2 rounded">Favoritos</Link>
          </li>
        </ul>
        <div>
        <a href="https://pokeapi.co/" className="text-yellow-300 font-semibold text-lg hover:bg-blue-600 p-2 rounded">PokeAPI</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;