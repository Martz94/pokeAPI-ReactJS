import React, { useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const removeFavorite = (pokemonToRemove) => {
    const updatedFavorites = favorites.filter((pokemon) => pokemon.id !== pokemonToRemove.id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
      {favorites.map((pokemon) => (
        <PokemonCard 
          key={pokemon.id} 
          pokemon={pokemon} 
          removeFromFavorites={removeFavorite} 
          isFavorite={true} // Siempre será true en la página de favoritos
        />
      ))}
    </div>
  );
};

export default FavoritesPage;
