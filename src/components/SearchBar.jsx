import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="px-4 w-full">
      <input
        type="text"
        placeholder="Buscar Pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-slate-400 rounded-lg p-2 w-full"
      />
    </div>
  );
};

export default SearchBar;
