import React from 'react';

const PokemonCard = ({ pokemon, addToFavorites, removeFromFavorites, isFavorite }) => {
  const getColor = (type) => {
    switch (type) {
      case 'fire':
        return 'bg-red-500';
      case 'water':
        return 'bg-blue-500';
      case 'grass':
        return 'bg-green-500';
      case 'poison':
        return 'bg-purple-500';
      case 'bug':
        return 'bg-amber-700';
      case 'normal':
        return 'bg-neutral-400';
      case 'flying':
        return 'bg-orange-500';
      case 'electric':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg hover:border-blue-500 hover:shadow-blue-300">
      <h2 className="text-xl text-center font-semibold mb-2">{pokemon.name}</h2>
      <img
        src={pokemon.sprites?.front_shiny || pokemon.sprites?.front_default}
        alt={pokemon.name}
        className="w-24 h-24 mx-auto"
      />
      <div className="mt-4">
        {pokemon.types.map((typeInfo) => (
          <span
            key={typeInfo.slot}
            className={`text-white px-2 py-1 rounded ${getColor(typeInfo.type.name)}`}
          >
            {typeInfo.type.name}
          </span>
        ))}
      </div>
      <ul className="mt-4">
        <li>HP: {pokemon.stats[0].base_stat}</li>
        <li>Ataque: {pokemon.stats[1].base_stat}</li>
        <li>Defensa: {pokemon.stats[2].base_stat}</li>
        <li>Ataque Especial: {pokemon.stats[3].base_stat}</li>
      </ul>
      <button
        className={`mt-4 ${isFavorite ? 'bg-red-500 hover:bg-red-600' : 'bg-yellow-500 hover:bg-yellow-600'} text-white px-4 py-2 rounded w-full`}
        onClick={isFavorite ? () => removeFromFavorites(pokemon) : () => addToFavorites(pokemon)}
      >
        {isFavorite ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'}
      </button>
    </div>
  );
};

export default PokemonCard;
