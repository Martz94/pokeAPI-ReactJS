import React, { useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (pokemonToRemove) => {
    const updatedFavorites = favorites.filter((pokemon) => pokemon.id !== pokemonToRemove.id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className=' container mx-auto max-w-6xl mt-36 mb-10'>
      {favorites.length === 0 ? (
        <h3 className=' text-xl mx-auto text-center'>No has elegido favoritos.</h3>
      ) : (
        <div>
          <h3 className=' mb-5 text-2xl font-semibold text-left ps-4 my-5'>Tus pekemones elegidos:</h3>
          <div className="mx-auto mt-10 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
            {favorites.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                removeFromFavorites={removeFavorite}
                isFavorite={true}
                isOnFavoritesPage={true}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
